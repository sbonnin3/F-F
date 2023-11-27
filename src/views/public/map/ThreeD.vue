<template>
  <div class="container">
    <div class="carte" ref="container"></div>
    <div class="menu">
      <h2>Menu</h2>
      <button @click="toggleAll" class="toggle-button" :class="{ 'active': isAllChecked }">
        <div class="slider"></div>
      </button>
      <span>Tout</span> <!-- Ajout du texte à côté du bouton -->
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
      <!-- Bouton Reset Position -->
      <button @click="resetRotationAndPosition" class="reset-button">Reset Position</button>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import plateforme from '@/assets/paul_ricard/Plateforme.glb'
import route from '@/assets/paul_ricard/Route.glb'
import batiments from '@/assets/paul_ricard/Batiments.glb'
import toilettes from '@/assets/paul_ricard/Toilettes.glb'
import restaurants from '@/assets/paul_ricard/Restaurants.glb'
import concerts from '@/assets/paul_ricard/Concerts.glb'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Carte',
  data() {
    return {
      hoveredObject: null,

      routeObject: null,
      plateformeObject: null,
      toilettesObject: null,
      batimentsObject: null,
      restaurantsObject: null,
      concertsObject: null,

      rotationX: 0, // Angle de rotation autour de l'axe X
      rotationY: 0, // Angle de rotation autour de l'axe Y

      camera: null,

      isAllChecked: false,
      chek_toilettes: false,
      chek_batiments: false,
      chek_restaurants: false,
      chek_concerts: false,

      isDragging: false,
      startMouseX: 0,
      startMouseY: 0,
      currentMouseX: 0,
      currentMouseY: 0,
    }
  },
  mounted() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera = camera; // Ajoutez cette ligne pour assigner la caméra à la variable `camera`
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight); // Ajustez la taille ici
    this.$refs.container.appendChild(renderer.domElement);
    this.rotationX = 1.57; // Réinitialisez les angles de rotation
    this.rotationY = 0;
    
    this.camera.position.z = 10
    
    const loader = new GLTFLoader();

    loader.load(route, (gltf) => {
      this.routeObject = gltf.scene; // Stockez l'objet dans la variable
      scene.add(this.routeObject);
    })

    loader.load(plateforme, (gltf) => {
      this.plateformeObject = gltf.scene; // Stockez l'objet dans la variable
      scene.add(this.plateformeObject);
    })

    loader.load(batiments, (gltf) => {
      this.batimentsObject = gltf.scene; // Stockez l'objet dans la variable
      scene.add(this.batimentsObject);
    })

    loader.load(toilettes, (gltf) => {
      this.toilettesObject = gltf.scene; // Stockez l'objet dans la variable
      scene.add(this.toilettesObject);
    })

    loader.load(restaurants, (gltf) => {
      this.restaurantsObject = gltf.scene; // Stockez l'objet dans la variable
      scene.add(this.restaurantsObject);
    })

    loader.load(concerts, (gltf) => {
      this.concertsObject = gltf.scene; // Stockez l'objet dans la variable
      scene.add(this.concertsObject);
    })

    const light = new THREE.PointLight(0xffffffff, 30)
    scene.add(light)
    
    window.addEventListener('touchstart', this.debutGlissement);
    window.addEventListener('touchmove', this.glissement);
    window.addEventListener('touchend', this.finGlissement);
    window.addEventListener('mousedown', this.debutGlissement);
    window.addEventListener('mousemove', this.glissement);
    window.addEventListener('mouseup', this.finGlissement);
    window.addEventListener('keydown', this.gererTouchesClavier); // Déplacez cette ligne en dehors de la boucle de rendu

    const loop = () => {
      requestAnimationFrame(loop);
      
      // Mettre à jour la position de la lumière
      light.position.copy(camera.position);

      // Vérifier la visibilité des objets
      if (this.routeObject) {
        this.routeObject.rotation.x = this.rotationX;
        this.routeObject.rotation.y = this.rotationY;
      }

      if (this.plateformeObject) {
        this.plateformeObject.rotation.x = this.rotationX;
        this.plateformeObject.rotation.y = this.rotationY;
      }

      if (this.chek_toilettes && this.toilettesObject) {
        this.toilettesObject.visible = true; // Affiche l'objet
        this.toilettesObject.rotation.x = this.rotationX;
        this.toilettesObject.rotation.y = this.rotationY;
      } else if (this.toilettesObject) {
        this.toilettesObject.visible = false; // Désaffiche l'objet
      }

      if (this.chek_batiments && this.batimentsObject) {
        this.batimentsObject.visible = true; // Affiche l'objet
        this.batimentsObject.rotation.x = this.rotationX;
        this.batimentsObject.rotation.y = this.rotationY;
      } else if (this.batimentsObject) {
        this.batimentsObject.visible = false; // Désaffiche l'objet
      }

      if (this.chek_restaurants && this.restaurantsObject) {
        this.restaurantsObject.visible = true; // Affiche l'objet
        this.restaurantsObject.rotation.x = this.rotationX;
        this.restaurantsObject.rotation.y = this.rotationY;
      } else if (this.restaurantsObject) {
        this.restaurantsObject.visible = false; // Désaffiche l'objet
      }

      if (this.chek_concerts && this.concertsObject) {
        this.concertsObject.visible = true; // Affiche l'objet
        this.concertsObject.rotation.x = this.rotationX;
        this.concertsObject.rotation.y = this.rotationY;
      } else if (this.concertsObject) {
        this.concertsObject.visible = false; // Désaffiche l'objet
      }
      
      renderer.setSize(window.innerWidth, 0.999*window.innerHeight);
      renderer.render(scene, this.camera);
    }

    loop();

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Fonction pour gérer le survol
    const handleHover = (event) => {
      // Mettez à jour les coordonnées de la souris en fonction de la position de l'événement
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      // Mettez à jour le raycaster
      raycaster.setFromCamera(mouse, camera);

      // Recherchez les intersections avec les objets de la scène
      const intersects = raycaster.intersectObjects([
        this.toilettesObject,
        this.batimentsObject,
        this.restaurantsObject,
        this.concertsObject,
        // ... autres objets
      ].filter(obj => obj));

      // Vérifiez s'il y a des intersections
      if (intersects.length > 0) {
    const newHoveredObject = intersects[0].object;

    // Vérifiez si l'objet survolé a changé
    if (newHoveredObject !== this.hoveredObject) {
      // Réinitialisez la couleur de l'objet précédemment survolé
      if (this.hoveredObject && this.hoveredObject.material) {
        this.hoveredObject.material.color.set(0xffffff);
      }

      // Mettez à jour l'objet survolé
      this.hoveredObject = newHoveredObject;

      // Changez la couleur de l'objet survolé
      if (this.hoveredObject && this.hoveredObject.material) {
        this.hoveredObject.material.color.set(0xff0000);
      }
    }
  } else {
    // Aucun objet survolé, réinitialisez la couleur
    if (this.hoveredObject && this.hoveredObject.material) {
      this.hoveredObject.material.color.set(0xffffff);
      this.hoveredObject = null;
    }
  }
};

    // Ajoutez des écouteurs d'événements pour gérer le survol
    window.addEventListener('mousemove', handleHover);
    window.addEventListener('touchmove', handleHover);
  },
  watch: {
    chek_toilettes() {
      this.updateToggleAll();
    },
    chek_batiments() {
      this.updateToggleAll();
    },
    chek_restaurants() {
      this.updateToggleAll();
    },
    chek_concerts() {
      this.updateToggleAll();
    }
  },

  methods: {
    updateToggleAll() {
      this.isAllChecked = this.chek_toilettes && this.chek_batiments && this.chek_restaurants && this.chek_concerts;
    },
    gererTouchesClavier(event) {
      switch(event.key) {
        case 'ArrowRight':
          this.deplacerDroite();
          break;
        case 'ArrowLeft':
          this.deplacerGauche();
          break;
        case 'ArrowUp':
          this.avancer();
          break;
        case 'ArrowDown':
          this.reculer();
          break;
      }
    },
    deplacerDroite() {
      this.camera.position.x += 0.03; // Augmentez la position X pour déplacer la caméra vers la droite
    },
    deplacerGauche() {
      this.camera.position.x -= 0.03; // Diminuez la position X pour déplacer la caméra vers la gauche
    },
    avancer() {
      this.camera.position.z -= 0.03; // Augmentez la position Z pour déplacer la caméra vers l'avant
    },
    reculer() {
      this.camera.position.z += 0.03; // Diminuez la position Z pour déplacer la caméra vers l'arrière
    },
    debutGlissement(event) {
        if (event.touches && event.touches.length === 1) {
            this.isDragging = true;
            this.startMouseX = event.touches[0].clientX;
            this.startMouseY = event.touches[0].clientY;

            // Stockez également les valeurs initiales de rotation
            this.startRotationX = this.rotationX;
            this.startRotationY = this.rotationY;
        } else if (!event.touches) {
            this.isDragging = true;
            this.startMouseX = event.clientX;
            this.startMouseY = event.clientY;

            // Stockez également les valeurs initiales de rotation
            this.startRotationX = this.rotationX;
            this.startRotationY = this.rotationY;
        }
    },

    glissement(event) {
        if (this.isDragging) {
            if (event.touches && event.touches.length === 1) {
                this.currentMouseX = event.touches[0].clientX;
                this.currentMouseY = event.touches[0].clientY;
            } else if (!event.touches) {
                this.currentMouseX = event.clientX;
                this.currentMouseY = event.clientY;
            }

            const deltaX = (this.currentMouseX - this.startMouseX) * 0.01;
            const deltaY = (this.currentMouseY - this.startMouseY) * 0.01;

            // Appliquez les changements à la rotation initiale
            this.rotationX = this.startRotationX + deltaY;
            this.rotationY = this.startRotationY + deltaX;
        }
    },

    finGlissement() {
        this.isDragging = false;
    },

    resetRotationAndPosition() {
      this.rotationX = 1.57; // Réinitialisez les angles de rotation
      this.rotationY = 0;
      this.camera.position.set(0, 0, 10); // Réinitialisez la position de la caméra
    },

    toggleAll() {
      this.isAllChecked = !this.isAllChecked;
      this.chek_toilettes = this.isAllChecked;
      this.chek_batiments = this.isAllChecked;
      this.chek_restaurants = this.isAllChecked;
      this.chek_concerts = this.isAllChecked;
    },


    faireQuelqueChose() {
      if (this.chek_toilettes && this.toilettesObject) {
        this.toilettesObject.visible = true; // Affiche l'objet
      } else if (this.toilettesObject) {
        this.toilettesObject.visible = false; // Désaffiche l'objet
      }

      if (this.chek_batiments && this.batimentsObject) {
        this.batimentsObject.visible = true; // Affiche l'objet
      } else if (this.batimentsObject) {
        this.batimentsObject.visible = false; // Désaffiche l'objet
      }

      if (this.chek_restaurants && this.restaurantsObject) {
        this.restaurantsObject.visible = true; // Affiche l'objet
      } else if (this.restaurantsObject) {
        this.restaurantsObject.visible = false; // Désaffiche l'objet
      }

      if (this.chek_concerts && this.concertsObject) {
        this.concertsObject.visible = true; // Affiche l'objet
      } else if (this.concertsObject) {
        this.concertsObject.visible = false; // Désaffiche l'objet
      }
    }
  }
}
</script>

<style scoped>
.reset-button {
  width: 100%; /* Ajustez la largeur selon vos préférences */
  background-color: #ccc;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  padding: 8px;
  margin-top: 16px; /* Ajout de marge pour espacer du reste du contenu */
}

.toggle-button {
  position: relative;
  display: inline-block; /* Ajout de cette règle pour que le bouton et le texte soient sur la même ligne */
  vertical-align: middle; /* Alignement vertical au centre */
  position: relative;
  width: 50px; /* Ajustez la largeur selon vos préférences */
  height: 20px; /* Ajustez la hauteur selon vos préférences */
  background-color: #ccc;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 20px;
  padding: 0;
}

.toggle-button + span {
  vertical-align: middle; /* Alignement vertical au centre */
  margin-left: 8px; /* Espacement entre le bouton et le texte */
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

.container {
  display: flex;
  background-color: black;
}

.carte {
  flex: 1;
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

.espace-supplementaire {
  height: 10px; /* Ajustez la hauteur selon vos préférences */
  display: block;
  content: " ";
}

</style>