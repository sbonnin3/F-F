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
    <div class="info-window" v-if="showInfoWindow">
      <br><br><br><br>
      <h3>{{ infoWindowTitle }}</h3>
      <p>{{ infoWindowText }}</p>
      <img :src="infoWindowImage" alt="Image" />
    </div>
  </div>
</template>

<script>
import * as THREE from 'three';
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
  mounted() {
    this.initThreeJS();
    this.loadModels();
    this.addEventListeners();
    this.animate();
    this.faireQuelqueChose();
  },
  methods: {
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
        this.showInfoWindow = true;
        this.infoWindowTitle = "Restaurant " + clickedObject.name;
        this.infoWindowText = "Restauration sur place";

        if (clickedObject.name === "McDonald") {
          this.infoWindowImage = 'https://upload.wikimedia.org/wikipedia/fr/thumb/e/ea/Mcdonalds_France_2009_logo.svg/1200px-Mcdonalds_France_2009_logo.svg.png';
        }
        else if (clickedObject.name === "Burger_King") {
          this.infoWindowImage = 'data:image/png;base64,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';
        }
        else if (clickedObject.name === "Quick") {
          this.infoWindowImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Logo_2015_Quick.svg/1200px-Logo_2015_Quick.svg.png';
        }
        else if (clickedObject.name === "Snac_Paul_Ricard") {
          this.infoWindowImage = 'https://yt3.googleusercontent.com/ytc/AIf8zZRRIdHhc8ItrijRrF-Qmu9eGVMC0oaUo-f1eaHmsg=s900-c-k-c0x00ffffff-no-rj';
        } else {
          this.infoWindowImage = 'https://www.leprohon.com/wp-content/uploads/2012/05/autres.png';
        }
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
    }
  }
}
</script>

<style scoped>
/* Styles for the Vue component */
.info-window {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: white;
  overflow: auto;
  padding: 16px;
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