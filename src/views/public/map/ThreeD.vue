<template>
  <div>
    <div class="carte" id="threeContainer" ref="container"></div>
    <div class="menu-toggle">
      <button :class="{ active: allObjectsVisible }" @click="toggleAllObjects">Tout</button>
      <button :class="{ active: objectVisibility['restaurantsObject'] }"
        @click="toggleObjectVisibility('restaurantsObject')">Restaurant</button>
      <button :class="{ active: objectVisibility['toilettesObject'] }"
        @click="toggleObjectVisibility('toilettesObject')">Toilettes</button>
      <button :class="{ active: objectVisibility['batimentsObject'] }"
        @click="toggleObjectVisibility('batimentsObject')">Bâtiments</button>
      <button :class="{ active: objectVisibility['kartingObject'] }"
        @click="toggleObjectVisibility('kartingObject')">Karting</button>
      <button :class="{ active: objectVisibility['parkingObject'] }"
        @click="toggleObjectVisibility('parkingObject')">Parking</button>
      <button :class="{ active: objectVisibility['aeroportObject'] }"
        @click="toggleObjectVisibility('aeroportObject')">Aéroport</button>
      <button :class="{ active: objectVisibility['concertsObject'] }"
        @click="toggleObjectVisibility('concertsObject')">Scène</button>
    </div>
    <div class="info-window" v-if="showInfoWindow && currentInfoWindow">
      <h2>{{ currentInfoWindow.title }}</h2>
      <p>{{ currentInfoWindow.text }}</p>
      <div v-if="currentInfoWindow.groups">
        <div v-for="group in currentInfoWindow.groups" :key="group.name">
          <h3>{{ group.name }}</h3>
          <p>Heure : {{ group.text }}</p>
          <img :src="group.image" alt="Image du groupe">
        </div>
      </div>
      <img v-if="currentInfoWindow.image && !currentInfoWindow.groups" :src="currentInfoWindow.image"
        alt="Image du provider">
    </div>
  </div>
</template>

<script>
import * as THREE from 'three';
import { TweenMax, Power2 } from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import plateformePath from '@/assets/paul_ricard/Plateforme.glb';
import routePath from '@/assets/paul_ricard/Route.glb';
import batimentsPath from '@/assets/paul_ricard/Batiments.glb';
import toilettesPath from '@/assets/paul_ricard/Toilettes.glb';
import restaurantsPath from '@/assets/paul_ricard/Restaurants.glb';
import kartingPath from '@/assets/paul_ricard/Karting.glb';
import parkingPath from '@/assets/paul_ricard/Parking.glb';
import aeroportPath from '@/assets/paul_ricard/Aéroport.glb';
import concertsPath from '@/assets/paul_ricard/Concerts.glb';
import voiturePath from '@/assets/paul_ricard/Voiture.glb';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Carte',
  data() {
    return {
      mixer: null,
      clock: new THREE.Clock(),
      minZoom: 0.5,
      maxZoom: 5,
      isPinching: false,
      initialPinchDistance: 0,
      showInfoWindow: false,
      infoWindowTitle: '',
      infoWindowText: '',
      infoWindowImage: '',
      defaultInfoForObjects() {
        return {
          Toilettes: {
            title: "Toilettes",
            image: 'https://us.123rf.com/450wm/malaha3/malaha32004/malaha3200400190/144852346-mod%C3%A8le-de-signe-de-toilettes-publiques-et-texte-wc-signe-de-porte-aiguille-lieu-public.jpg?ver=6',
          },
          Route: {
            title: 'Les pilotes',
            image: 'https://www.motorsinside.com/images/photo/article/f12022/miniature/1500/touslespilotes.webp',
          },
          Concert: {
            title: 'Concerts',
            text: "Des concerts au programme de 17h00 jusqu'à 02h00 !",
            groups: [
              {
                name: "Sexion d'Assaut",
                text: "17h00",
                image: 'https://www.nikaia.fr/thumbs/1024x562r/2022-02/sexion-site.jpg',
              },
              {
                name: '47ter',
                text: "20h00",
                image: 'https://www.arkeaarena.com/app/uploads/2020/09/AA_SI_SQR_WEB-3.jpg',
              },
              {
                name: 'Maitre GIMS',
                text: "23h00",
                image: 'https://www.zenithdelille.com/wp-content/uploads/2023/05/gims-1-1-scaled-1600x0-c-default.jpg',
              },
            ],
          },
          Aéroport: {
            title: "L'aéroport",
            image: 'https://www.aerobuzz.fr/wp-content/uploads/2022/01/piste-atterrissage-castellet-900x516.jpg',
          },
          Karting: {
            title: 'Karting',
            image: 'https://www.circuitpaulricard.com/assets/actualites/496/fiche/2020_PaulRicard_KARTPACA-7820.jpg',
          },
          Parking: {
            title: 'Parking',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Parking_icon.svg/1200px-Parking_icon.svg.png',
          },
        };
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
        'aeroportObject': 'Objet 7',
        'kartingObject': 'Objet 8',
        'parkingObject': 'Objet 9',
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
      kartingObject: null,
      parkingObject: null,
      aeroportObject: null,

      camera: null,
      scene: null,
      renderer: null,
      originalColors: new Map(),

      isDragging: false,
      startMouseX: 0,
      startMouseY: 0,
      currentMouseX: 0,
      currentMouseY: 0,
      rotationX: 0,
      rotationY: 0,

      allObjectsVisible: true,
      objectVisibility: {
        restaurantsObject: true,
        toilettesObject: true,
        batimentsObject: true,
        concertsObject: true,
        kartingObject: true,
        parkingObject: true,
        aeroportObject: true,
      },
    };
  },
  mounted() {
    this.initThreeJS();
    this.loadModels();
    this.addEventListeners();
    this.openAnimation();
    this.animate();
    this.faireQuelqueChose();
    this.updateObjectVisibility();

    // Écouteur pour les clics en dehors des objets
    document.addEventListener('click', this.handleOutsideClick);
  },

  computed: {
    allObjectsActivated() {
      return Object.values(this.objectVisibility).every(status => status);
    }
  },
  methods: {
    openAnimation() {
      const rotation = { x: 0, y: 0 };

      const animationDuration = 5;

      TweenMax.to(rotation, animationDuration, {
        x: 0.5,
        y: 6,
        ease: Power2.easeOut,
        onUpdate: () => {
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
    toggleObjectVisibility(objectKey) {
      this.objectVisibility[objectKey] = !this.objectVisibility[objectKey];
      this.updateObjectVisibility();
      this.checkAllObjectsState();
    },

    toggleAllObjects() {
      this.allObjectsVisible = !this.allObjectsVisible;
      Object.keys(this.objectVisibility).forEach(key => {
        this.objectVisibility[key] = this.allObjectsVisible;
      });
      this.updateObjectVisibility();
    },

    checkAllObjectsState() {
      this.allObjectsVisible = this.allObjectsActivated;
    },

    updateObjectVisibility() {
      Object.entries(this.objectVisibility).forEach(([key, visible]) => {
        if (this[key]) {
          this[key].visible = visible;
        }
      });
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
        this.group.add(this.routeObject);
      });

      loader.load(batimentsPath, (gltf) => {
        this.batimentsObject = gltf.scene;
        this.group.add(this.batimentsObject);
      });

      loader.load(toilettesPath, (gltf) => {
        this.toilettesObject = gltf.scene;
        this.group.add(this.toilettesObject);
      });

      loader.load(restaurantsPath, (gltf) => {
        this.restaurantsObject = gltf.scene;
        this.group.add(this.restaurantsObject);
      });

      loader.load(concertsPath, (gltf) => {
        this.concertsObject = gltf.scene;
        this.group.add(this.concertsObject);
      });

      loader.load(kartingPath, (gltf) => {
        this.kartingObject = gltf.scene;
        this.group.add(this.kartingObject);
      });

      loader.load(parkingPath, (gltf) => {
        this.parkingObject = gltf.scene;
        this.group.add(this.parkingObject);
      });

      loader.load(aeroportPath, (gltf) => {
        this.aeroportObject = gltf.scene;
        this.group.add(this.aeroportObject);
      });

      loader.load(voiturePath, (gltf) => {
        const voiture = gltf.scene;
        this.group.add(voiture);

        if (gltf.animations && gltf.animations.length) {
          this.mixer = new THREE.AnimationMixer(voiture);
          gltf.animations.forEach((clip) => {
            this.mixer.clipAction(clip).play();
          });
        }
      });

      this.scene.add(this.group);
      this.updateObjectVisibility();
    },

    fetchProviderData(objectName) {
      const url = `http://localhost:3000/api/providers/objet/${objectName}`;
      fetch(url)
        .then(response => {
          if (!response.ok) {
            // Si aucun provider n'est trouvé, utilisez les informations par défaut
            throw new Error('Aucun provider associé');
          }
          return response.json();
        })
        .then(data => {
          if (data && data.length > 0) {
            const providerData = data[0]; // Prendre le premier provider correspondant
            this.currentInfoWindow = {
              title: providerData.name,
              text: providerData.description,
              image: providerData.logo,
            };
          } else {
            throw new Error('Aucun provider associé');
          }
        })
        .catch(error => {
          console.log(error);
          // Utiliser les informations par défaut pour l'objet cliqué
          const defaultInfo = this.defaultInfoForObjects()[objectName];
          if (defaultInfo) {
            this.currentInfoWindow = { ...defaultInfo };
          } else {
            console.error(`Aucune information trouvée pour l'objet : ${objectName}`);
          }
        })
        .finally(() => {
          this.showInfoWindow = true;
        });
    },

    unload3DModels() {
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

      if (this.scene) {
        while (this.scene.children.length > 0) {
          const object = this.scene.children[0];
          this.scene.remove(object);

          if (object.isMesh) {
            if (object.geometry) {
              object.geometry.dispose();
            }
            if (object.material) {
              if (object.material.isMaterial) {
                this.cleanMaterial(object.material);
              } else {
                for (const material of object.material) {
                  this.cleanMaterial(material);
                }
              }
            }
          }
        }

        if (this.renderer) {
          this.renderer.dispose();
        }
      }
    },

    cleanMaterial(material) {
      material.dispose();

      if (material.map) material.map.dispose();
      if (material.lightMap) material.lightMap.dispose();
      if (material.bumpMap) material.bumpMap.dispose();
      if (material.normalMap) material.normalMap.dispose();
      if (material.specularMap) material.specularMap.dispose();
      if (material.envMap) material.envMap.dispose();
    },
    addLights() {
      const ambientLight = new THREE.AmbientLight(0xffffff, 5);
      this.scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 3, 5);
      this.scene.add(directionalLight);
    },
    debutGlissement(event) {
      event.preventDefault();
      this.isDragging = true;
      this.startMouseX = (event.touches) ? event.touches[0].clientX : event.clientX;
      this.startMouseY = (event.touches) ? event.touches[0].clientY : event.clientY;
    },

    glissement(event) {
      event.preventDefault();
      if (!this.isDragging) return;

      const clientX = (event.touches) ? event.touches[0].clientX : event.clientX;
      const clientY = (event.touches) ? event.touches[0].clientY : event.clientY;

      const deltaX = (clientX - this.startMouseX) / window.innerWidth;
      const deltaY = (clientY - this.startMouseY) / window.innerHeight;

      this.rotationY += deltaX * 2 * Math.PI;
      this.rotationX += deltaY * 2 * Math.PI;

      this.startMouseX = clientX;
      this.startMouseY = clientY;
    },

    finGlissement() {
      event.preventDefault();
      this.isDragging = false;
    },

    handleMouseWheel(event) {
      event.preventDefault();

      const zoomAmount = 0.1;
      if (event.deltaY < 0) {
        this.camera.zoom = Math.min(this.camera.zoom + zoomAmount, this.maxZoom);
      } else {
        this.camera.zoom = Math.max(this.camera.zoom - zoomAmount, this.minZoom);
      }
      this.camera.updateProjectionMatrix();
    },

    handleKeyDown(event) {
      const zoomAmount = 0.1;
      if (event.key === 'ArrowUp') {
        this.camera.zoom = Math.min(this.camera.zoom + zoomAmount, this.maxZoom);
      } else if (event.key === 'ArrowDown') {
        this.camera.zoom = Math.max(this.camera.zoom - zoomAmount, this.minZoom);
      }
      this.camera.updateProjectionMatrix();
    },

    handleTouchStart(event) {
      if (event.touches.length === 2) {
        event.preventDefault();
        this.isPinching = true;
        this.initialPinchDistance = this.getPinchDistance(event);
      }
    },

    handleTouchMove(event) {
      if (this.isPinching && event.touches.length === 2) {
        event.preventDefault();
        const currentPinchDistance = this.getPinchDistance(event);
        const zoomFactor = 0.01;
        const newZoom = this.camera.zoom + (currentPinchDistance - this.initialPinchDistance) * zoomFactor;
        this.camera.zoom = Math.min(Math.max(newZoom, this.minZoom), this.maxZoom);
        this.initialPinchDistance = currentPinchDistance;
        this.camera.updateProjectionMatrix();
      }
    },

    handleTouchEnd() {
      event.preventDefault();
      this.isPinching = false;
      this.initialPinchDistance = 0;
    },

    getPinchDistance(event) {
      const dx = event.touches[0].pageX - event.touches[1].pageX;
      const dy = event.touches[0].pageY - event.touches[1].pageY;
      return Math.sqrt(dx * dx + dy * dy);
    },

    addEventListeners() {
      window.addEventListener('resize', this.onWindowResize);
      window.addEventListener('mousemove', this.handleMouseMove);
      window.addEventListener('click', this.handleClick);
      window.addEventListener('touchstart', this.debutGlissement);
      window.addEventListener('touchmove', this.glissement);
      window.addEventListener('touchend', this.finGlissement);
      window.addEventListener('mousedown', this.debutGlissement);
      window.addEventListener('mousemove', this.glissement);
      window.addEventListener('mouseup', this.finGlissement);
      window.addEventListener('keydown', this.gererTouchesClavier);
      window.addEventListener('beforeunload', this.beforeUnloadHandler);
      window.addEventListener('wheel', this.handleMouseWheel);
      window.addEventListener('keydown', this.handleKeyDown);
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
        this.toilettesObject,
        this.batimentsObject,
        this.restaurantsObject,
        this.concertsObject,
        this.kartingObject,
        this.parkingObject,
        this.aeroportObject,
      ].filter(obj => obj !== null);

      const intersects = raycaster.intersectObjects(objectsToIntersect, true);

      if (intersects.length > 0) {
        const intersectedObject = intersects[0].object;
        this.renderer.domElement.style.cursor = 'pointer';

        if (this.hoveredObject !== intersectedObject) {
          if (this.hoveredObject && this.hoveredObject.material && this.hoveredObject.material.emissive) {
            this.hoveredObject.material.emissive.setHex(this.originalColors.get(this.hoveredObject) || 0x000000);
          }

          this.hoveredObject = intersectedObject;

          if (this.hoveredObject.material && this.hoveredObject.material.emissive) {
            if (!this.originalColors.has(this.hoveredObject)) {
              this.originalColors.set(this.hoveredObject, this.hoveredObject.material.emissive.getHex());
            }
            this.hoveredObject.material.emissive.setHex(0x666666);
          }
        }
      } else {
        if (this.hoveredObject && this.hoveredObject.material && this.hoveredObject.material.emissive) {
          this.hoveredObject.material.emissive.setHex(this.originalColors.get(this.hoveredObject) || 0x000000);
        }
        this.renderer.domElement.style.cursor = '';
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
        this.kartingObject,
        this.parkingObject,
        this.aeroportObject,
      ].filter(obj => obj !== null);

      const intersects = raycaster.intersectObjects(objectsToIntersect, true);

      if (intersects.length > 0) {
        const clickedObjectName = intersects[0].object.name;
        this.fetchProviderData(clickedObjectName);
      } else {
        // Aucun objet pertinent n'a été cliqué, fermez la fenêtre d'information
        this.showInfoWindow = false;
        this.currentInfoWindow = null;
      }
    },

    animate() {
      requestAnimationFrame(this.animate);

      const delta = this.clock.getDelta();
      if (this.mixer) {
        this.mixer.update(delta);
      }

      if (this.group) {
        this.group.rotation.x = this.rotationX;
        this.group.rotation.y = this.rotationY;
      }

      this.renderer.render(this.scene, this.camera);
    },

    closeInfoWindow() {
      this.showInfoWindow = false;
      this.currentInfoWindow = null;
    },

    faireQuelqueChose() {
      this.scene.background = new THREE.Color(0xabcdef);
    },
    
    beforeDestroy() {
      document.removeEventListener('click', this.handleOutsideClick);
      if (this.mixer) {
        this.mixer.uncacheRoot(this.mixer.getRoot());
      }
      const threeContainer = document.getElementById('threeContainer');
      if (threeContainer) {
        threeContainer.removeEventListener('wheel', this.handleMouseWheel, { passive: false });
      }
      window.removeEventListener('resize', this.onWindowResize);
      window.removeEventListener('mousemove', this.handleMouseMove);
      window.removeEventListener('click', this.handleClick);
    },
    
    beforeUnloadHandler() {
      this.unload3DModels();
    },

    handleOutsideClick(event) {
      if (event.target != this.renderer.domElement) {
        this.showInfoWindow = false;
        this.currentInfoWindow = null;
      }
    },
  },
}
</script>

<style scoped>
.info-window {
  position: fixed;
  top: 0;
  right: 0;
  width: auto;
  max-width: 460px;
  height: 100%;
  background-color: rgba(200, 200, 200, 0.8);
  overflow: auto;
  padding: 16px;
  padding-top: 100px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  text-align: center;
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

.carte {
  flex: 1;
  max-height: calc(100vh - 91px);
  overflow: hidden;
}

.menu-toggle {
  position: fixed;
  bottom: 10px;
  left: 10px;
  background-color: black;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.menu-toggle button {
  margin-bottom: 5px;
  background-color: white;
}

.menu-toggle button.active {
  background-color: lightgreen;
}

.close-button {
  position: absolute;
  top: 90px;
  right: 0;
  padding: 10px;
  cursor: pointer;
  font-size: 24px;
}
</style>