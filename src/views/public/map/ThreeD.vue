<template>
  <div>
    <div class="carte" ref="container"></div>
    <div v-if="showObjectName" class="object-name">{{ objectName }}</div>
    <div class="menu">
      <h2>Menu</h2>
      <button @click="toggleAll" class="toggle-button" :class="{ 'active': isAllChecked }">
        <div class="slider"></div>
      </button>
      <span>Tout</span>
      <br class="espace-supplementaire">
      <label>
        <input type="checkbox" v-model="chek_toilettes" @change="faireQuelqueChose"> Toilettes
      </label>
      <label>
        <input type="checkbox" v-model="chek_batiments" @change="faireQuelqueChose"> Bâtiments
      </label>
      <label>
        <input type="checkbox" v-model="chek_restaurants" @change="faireQuelqueChose"> Restaurants
      </label>
      <label>
        <input type="checkbox" v-model="chek_concerts" @change="faireQuelqueChose"> Concerts
      </label>
      <button @click="resetRotationAndPosition" class="reset-button">Reset Position</button>
    </div>
    <div class="building-info" v-if="showBuildingInfo" @click="hideBuildingInfo">
      <h3>{{ buildingInfo.title }}</h3>
      <p>{{ buildingInfo.description }}</p>
    </div>
    <div class="info-window" v-if="showInfoWindow && currentInfoWindow">
      <h3>{{ currentInfoWindow.title }}</h3>
      <p>{{ currentInfoWindow.text }}</p>
      <img :src="currentInfoWindow.image" />
      <ProviderProfile v-if="currentInfoWindow && currentInfoWindow.providerId" :id="currentInfoWindow.providerId" />
    </div>
  </div>
</template>

<script>
import ProviderProfile from "@/components/public/ProviderProfile.vue";
import * as THREE from 'three';
import { TweenMax } from 'gsap';
import { Power2 } from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import plateformePath from '@/assets/paul_ricard/Plateforme.glb';
import routePath from '@/assets/paul_ricard/Route.glb';
import batimentsPath from '@/assets/paul_ricard/Batiments.glb';
import toilettesPath from '@/assets/paul_ricard/Toilettes.glb';
import restaurantsPath from '@/assets/paul_ricard/Restaurants.glb';
import concertsPath from '@/assets/paul_ricard/Concerts.glb';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Carte',
  data() {
    return {
      // Data properties
      showInfoWindow: false,
      infoWindowTitle: '',
      infoWindowText: '',
      infoWindowImage: '',
      infoWindowContent: {
        /*
        Nom des objets :
        Plateforme
        Route
        Toilettes
        Batiments
        Concert
        Quick
        Snac Paul Ricard
        McDonald
        Burger King
        */
        Toilettes: {
          title: 'Toilettes',
          image: 'https://cdn-icons-png.flaticon.com/256/185/185547.png',
          providerId: null // Aucun ID pour la plateforme
        },
        Quick: {
          providerId: '1' // ID pour Quick
        },
      },
      currentInfoWindow: null,

      showBuildingInfo: false,
      buildingInfo: {
        title: '',
        description: '',
      },
      objectMapping: {
        'routeObject': 'Objet 1',
        'plateformeObject': 'Objet 2',
        'toilettesObject': 'Objet 3',
        'batimentsObject': 'Objet 4',
        'restaurantsObject': 'Objet 5',
        'concertsObject': 'Objet 6',
      },
      showObjectName: false,
      objectName: '',
      hoveredObject: null,

      routeObject: null,
      plateformeObject: null,
      toilettesObject: null,
      batimentsObject: null,
      restaurantsObject: null,
      concertsObject: null,

      camera: null,
      scene: null,
      renderer: null,
      originalColors: new Map(),

      isAllChecked: true,
      chek_toilettes: true,
      chek_batiments: true,
      chek_restaurants: true,
      chek_concerts: true,

      isDragging: false,
      startMouseX: 0,
      startMouseY: 0,
      currentMouseX: 0,
      currentMouseY: 0,
      rotationX: 0,
      rotationY: 0,
    };
  },
  components: {
    ProviderProfile
  },
  mounted() {
    this.initThreeJS();
    this.loadModels();
    this.addEventListeners();
    this.openAnimation();
    this.animate();
    this.faireQuelqueChose();
    window.addEventListener('beforeunload', this.beforeUnloadHandler);
  },
  methods: {
    openAnimation() {
      const rotation = { x: 0, y: 0 }; // Les valeurs de rotation initiales

      // Modifiez la durée pour ajuster la vitesse (en secondes)
      const animationDuration = 5; // Exemple : augmentation de la durée à 4 secondes

      // Utilise TweenMax pour l'animation avec la nouvelle durée
      TweenMax.to(rotation, animationDuration, {
        x: 0.5,
        y: 6,
        ease: Power2.easeOut, // Utilisez une fonction d'accélération
        onUpdate: () => {
          // Fonction de mise à jour appelée à chaque frame de l'animation
          this.rotationX = rotation.x;
          this.rotationY = rotation.y;
        },
      });
    },

    initThreeJS() {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.camera.position.z = 10;
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.$refs.container.appendChild(this.renderer.domElement);
      this.addLights();
    },
    loadModels() {
      this.group = new THREE.Group();

      const loader = new GLTFLoader();
      
      loader.load(plateformePath, (gltf) => {
        this.plateformeObject = gltf.scene;
        this.group.add(this.plateformeObject);
      });

      loader.load(routePath, (gltf) => {
        this.routeObject = gltf.scene;
        this.group.add(this.routeObject); // Correction ici
      });

      loader.load(batimentsPath, (gltf) => {
        this.batimentsObject = gltf.scene;
        this.group.add(this.batimentsObject); // Correction ici
      });

      loader.load(toilettesPath, (gltf) => {
        this.toilettesObject = gltf.scene;
        this.group.add(this.toilettesObject); // Correction ici
      });

      loader.load(restaurantsPath, (gltf) => {
        this.restaurantsObject = gltf.scene;
        this.group.add(this.restaurantsObject); // Correction ici
      });

      loader.load(concertsPath, (gltf) => {
        this.concertsObject = gltf.scene;
        this.group.add(this.concertsObject); // Correction ici
      });

      this.scene.add(this.group);
    },
    unload3DModels() {
      // Supprimer les gestionnaires d'événements
      window.removeEventListener('resize', this.onWindowResize);
      window.removeEventListener('mousemove', this.handleMouseMove);
      window.removeEventListener('click', this.handleClick);
      window.removeEventListener('touchstart', this.debutGlissement);
      window.removeEventListener('touchmove', this.glissement);
      window.removeEventListener('touchend', this.finGlissement);
      window.removeEventListener('mousedown', this.debutGlissement);
      window.removeEventListener('mousemove', this.glissement);
      window.removeEventListener('mouseup', this.finGlissement);
      window.removeEventListener('keydown', this.gererTouchesClavier);

      // Supprimer les modèles 3D de la scène
      if (this.scene) {
        this.scene.remove(this.routeObject);
        this.scene.remove(this.plateformeObject);
        this.scene.remove(this.toilettesObject);
        this.scene.remove(this.batimentsObject);
        this.scene.remove(this.restaurantsObject);
        this.scene.remove(this.concertsObject);

        // Libérer la mémoire des textures et des géométries
        this.routeObject.traverse((object) => {
          if (object.isMesh) {
            object.geometry.dispose();
            if (object.material.map) {
              object.material.map.dispose();
            }
            object.material.dispose();
          }
        });
        this.plateformeObject.traverse((object) => {
          if (object.isMesh) {
            object.geometry.dispose();
            if (object.material.map) {
              object.material.map.dispose();
            }
            object.material.dispose();
          }
        });
        this.toilettesObject.traverse((object) => {
          if (object.isMesh) {
            object.geometry.dispose();
            if (object.material.map) {
              object.material.map.dispose();
            }
            object.material.dispose();
          }
        });
        this.batimentsObject.traverse((object) => {
          if (object.isMesh) {
            object.geometry.dispose();
            if (object.material.map) {
              object.material.map.dispose();
            }
            object.material.dispose();
          }
        });
        this.restaurantsObject.traverse((object) => {
          if (object.isMesh) {
            object.geometry.dispose();
            if (object.material.map) {
              object.material.map.dispose();
            }
            object.material.dispose();
          }
        });
        this.concertsObject.traverse((object) => {
          if (object.isMesh) {
            object.geometry.dispose();
            if (object.material.map) {
              object.material.map.dispose();
            }
            object.material.dispose();
          }
        });

        // Libérer la mémoire des textures de lumières
        this.scene.traverse((object) => {
          if (object.isLight) {
            if (object.target) {
              object.target.dispose();
            }
            object.dispose();
          }
        });
      }
    },
    addLights() {
      const ambientLight = new THREE.AmbientLight(0xffffff, 5);
      this.scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 3, 5);
      this.scene.add(directionalLight);
    },
    debutGlissement(event) {
      this.isDragging = true;
      this.startMouseX = (event.touches) ? event.touches[0].clientX : event.clientX;
      this.startMouseY = (event.touches) ? event.touches[0].clientY : event.clientY;
    },

    glissement(event) {
      if (!this.isDragging) return;

      const clientX = (event.touches) ? event.touches[0].clientX : event.clientX;
      const clientY = (event.touches) ? event.touches[0].clientY : event.clientY;

      const deltaX = (clientX - this.startMouseX) / window.innerWidth;
      const deltaY = (clientY - this.startMouseY) / window.innerHeight;

      this.rotationY += deltaX * 2 * Math.PI; // Rotation autour de l'axe Y
      this.rotationX += deltaY * 2 * Math.PI; // Rotation autour de l'axe X

      this.startMouseX = clientX;
      this.startMouseY = clientY;
    },

    finGlissement() {
      this.isDragging = false;
    },
    addEventListeners() {
      window.addEventListener('resize', this.onWindowResize);
      window.addEventListener('mousemove', this.handleMouseMove);
      window.addEventListener('click', this.handleClick);

      // Gestion des événements de glissement pour la rotation
      window.addEventListener('touchstart', this.debutGlissement);
      window.addEventListener('touchmove', this.glissement);
      window.addEventListener('touchend', this.finGlissement);
      window.addEventListener('mousedown', this.debutGlissement);
      window.addEventListener('mousemove', this.glissement);
      window.addEventListener('mouseup', this.finGlissement);

      // Gestion des touches du clavier pour d'autres interactions
      window.addEventListener('keydown', this.gererTouchesClavier);
    },
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
    handleMouseMove(event) {
      event.preventDefault();

      const rect = this.renderer.domElement.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, this.camera);
      

      const objectsToIntersect = [
        this.routeObject,
        this.plateformeObject,
        this.toilettesObject,
        this.batimentsObject,
        this.restaurantsObject,
        this.concertsObject
      ].filter(obj => obj !== null); // Filtrer les objets non nuls

      const intersects = raycaster.intersectObjects(objectsToIntersect, true);
      
      if (intersects.length > 0) {
        const intersectedObject = intersects[0].object;

        if (this.hoveredObject !== intersectedObject) {
          // Réinitialiser l'objet précédemment survolé
          if (this.hoveredObject && this.hoveredObject.material && this.hoveredObject.material.emissive) {
            this.hoveredObject.material.emissive.setHex(this.originalColors.get(this.hoveredObject) || 0x000000);
          }

          // Mettre à jour l'objet survolé actuel
          this.hoveredObject = intersectedObject;

          // Stocker la couleur originale et mettre à jour la couleur
          if (this.hoveredObject.material && this.hoveredObject.material.emissive) {
            if (!this.originalColors.has(this.hoveredObject)) {
              this.originalColors.set(this.hoveredObject, this.hoveredObject.material.emissive.getHex());
            }
            this.hoveredObject.material.emissive.setHex(0x666666);
          }
        }
      } else {
        // Réinitialiser l'objet précédemment survolé
        if (this.hoveredObject && this.hoveredObject.material && this.hoveredObject.material.emissive) {
          this.hoveredObject.material.emissive.setHex(this.originalColors.get(this.hoveredObject) || 0x000000);
        }
        this.hoveredObject = null;
      }
      if (this.isDragging) {
        const deltaX = (event.clientX - this.startMouseX) / window.innerWidth;
        const deltaY = (event.clientY - this.startMouseY) / window.innerHeight;

        this.rotationX += deltaY * 2;
        this.rotationY += deltaX * 2;

        this.startMouseX = event.clientX;
        this.startMouseY = event.clientY;
      }
    },
    handleClick(event) {
      event.preventDefault();

      const rect = this.renderer.domElement.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, this.camera);

      const objectsToIntersect = [
        this.routeObject,
        this.plateformeObject,
        this.toilettesObject,
        this.batimentsObject,
        this.restaurantsObject,
        this.concertsObject,
      ].filter(obj => obj !== null);

      const intersects = raycaster.intersectObjects(objectsToIntersect, true);

      if (intersects.length > 0) {
        const clickedObject = intersects[0].object;
        this.currentInfoWindow = this.infoWindowContent[clickedObject.name] || null;
        this.showInfoWindow = true;
      }
    },
    animate() {
      requestAnimationFrame(this.animate);

      // Appliquer la rotation au groupe
      if (this.group) {
        this.group.rotation.x = this.rotationX;
        this.group.rotation.y = this.rotationY;
      }

      this.renderer.render(this.scene, this.camera);
    },
    handleCheckboxChange() {
      this.isAllChecked = this.chek_toilettes && this.chek_batiments && this.chek_restaurants && this.chek_concerts;
    },
    toggleAll() {
      const newState = !this.isAllChecked;
      this.isAllChecked = newState;
      this.chek_toilettes = newState;
      this.chek_batiments = newState;
      this.chek_restaurants = newState;
      this.chek_concerts = newState;

      // Mettre à jour la visibilité des objets en conséquence
      this.toilettesObject.visible = newState;
      this.batimentsObject.visible = newState;
      this.restaurantsObject.visible = newState;
      this.concertsObject.visible = newState;
    },
    resetRotationAndPosition() {
      this.camera.position.set(0, 0, 10);
      this.rotationX = 0;
      this.rotationY = 0;
    },
    faireQuelqueChose() {
      // Changer la couleur de fond de la scène
      this.scene.background = new THREE.Color(0xabcdef); // Remplacer 0xabcdef par la couleur désirée

      // Pour les toilettes
      if (this.toilettesObject) {
        this.toilettesObject.visible = this.chek_toilettes;
      }

      // Pour les bâtiments
      if (this.batimentsObject) {
        this.batimentsObject.visible = this.chek_batiments;
      }

      // Pour les restaurants
      if (this.restaurantsObject) {
        this.restaurantsObject.visible = this.chek_restaurants;
      }

      // Pour les concerts
      if (this.concertsObject) {
        this.concertsObject.visible = this.chek_concerts;
      }
      this.isAllChecked = this.chek_toilettes && this.chek_batiments && this.chek_restaurants && this.chek_concerts;
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.onWindowResize);
      window.removeEventListener('mousemove', this.handleMouseMove);
      window.removeEventListener('click', this.handleClick);
      // Remove other event listeners
    },
    beforeUnloadHandler() {
      this.unload3DModels();
    },
  }
}
</script>

<style scoped>
/* Styles for the Vue component */
.info-window {
  position: fixed;
  top: 0;
  right: 0;
  width: 460px;
  height: 100%;
  background-color: white;
  overflow: auto;
  padding: 16px;
  padding-top: 100px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
}

.info-window h3 {
  font-size: 1.2em;
  margin-bottom: 8px;
}

.info-window p {
  margin-bottom: 16px;
}

.info-window img {
  max-width: 100%;
  height: auto;
}
.reset-button {
  width: 100%;
  background-color: #ccc;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  padding: 8px;
  margin-top: 16px;
}

.toggle-button {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 50px;
  height: 20px;
  background-color: #ccc;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 20px;
  padding: 0;
}

.toggle-button + span {
  vertical-align: middle;
  margin-left: 8px;
}

.slider {
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  transition: 0.2s;
}

.active .slider {
  transform: translateX(30px);
}

.carte {
  flex: 1;
  max-height: calc(100vh - 91px);
  overflow: hidden;
}

.menu {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 200px;
  padding: 16px;
  background-color: rgba(180,180,180);
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.menu h2 {
  font-size: 1.2em;
  margin-bottom: 8px;
}

.menu label {
  display: block;
  margin-bottom: 8px;
}

.object-name {
  position: fixed;
  bottom: 10px;
  right: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
}
</style>