<template>
  <div class="container">
    <div class="carte" ref="container"></div>
    <div class="menu">
      <h2>Menu</h2>
      <label>
        <input type="checkbox" v-model="chek_toilettes" @change="faireQuelqueChose"> Toilettes
      </label>
      <label>
        <input type="checkbox" v-model="chek_batiments" @change="faireQuelqueChose"> Bâtiments
      </label>
      <!-- Ajoutez d'autres options si nécessaire -->
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import plateforme from '../assets/paul_ricard/Plateforme.glb'
import route from '../assets/paul_ricard/Route.glb'
import voiture from '../assets/paul_ricard/Voiture.glb'
import batiments from '../assets/paul_ricard/Batiments.glb'
import toilettes from '../assets/paul_ricard/Toilettes.glb'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Carte',
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      isDragging: false,
      angleY: 0,
      angleX: Math.PI / 4, // Angle initial pour une vue en diagonale

      toilettesObject: null,
      batimentsObject: null,

      chek_toilettes: false, // La propriété option1 sera liée à la case à cocher correspondante
      chek_batiments: false // La propriété option2 sera liée à la case à cocher correspondante

    }
  },
  mounted() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight); // Ajustez la taille ici
    this.$refs.container.appendChild(renderer.domElement);

    const loader = new GLTFLoader();

    loader.load(plateforme, (gltf) => {
      const object = gltf.scene;
      scene.add(object);
    })

    loader.load(route, (gltf) => {
      const object = gltf.scene;
      scene.add(object);
    })

    loader.load(voiture, (gltf) => {
      const object = gltf.scene;
      scene.add(object);
      
      // Vérifier s'il y a des animations
      if (gltf.animations && gltf.animations.length > 0) {
        this.driveAnimation = gltf.animations[0];
      }
    })

    loader.load(batiments, (gltf) => {
      this.batimentsObject = gltf.scene; // Stockez l'objet dans la variable batimentsObject
      scene.add(this.batimentsObject);
    })

    loader.load(toilettes, (gltf) => {
      this.toilettesObject = gltf.scene; // Stockez l'objet dans la variable toilettesObject
      scene.add(this.toilettesObject);
    })

    const light = new THREE.PointLight(0xffffffff, 30)
    scene.add(light)

    document.addEventListener('mousedown', this.onMouseDown);
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);

    document.addEventListener('keydown', (event) => {
      const speed = 0.05;
      if (event.key === "ArrowUp" && this.angleX <= 1.6) {
        this.angleX += speed;
      }
      if (event.key === "ArrowDown" && this.angleX >= -1.6) {
        this.angleX -= speed;
      }
      if (event.key === "ArrowLeft") {
        this.angleY -= speed;
      }
      if (event.key === "ArrowRight") {
        this.angleY += speed;
      }
    });

    const loop = () => {
      requestAnimationFrame(loop);

      // Appliquer les rotations à la caméra
      camera.position.x = Math.sin(this.angleY) * 5;
      camera.position.z = Math.cos(this.angleY) * 5;
      camera.position.y = Math.sin(this.angleX) * 5 + 6;
      camera.lookAt(0, 0, 0);

      // Mettre à jour la position de la lumière
      light.position.copy(camera.position);

      // Vérifier la visibilité des objets
      if (this.chek_toilettes && this.toilettesObject) {
        this.toilettesObject.visible = true; // Affiche l'objet toilettes
      } else if (this.toilettesObject) {
        this.toilettesObject.visible = false; // Désaffiche l'objet toilettes
      }

      if (this.chek_batiments && this.batimentsObject) {
        this.batimentsObject.visible = true; // Affiche l'objet batiments
      } else if (this.batimentsObject) {
        this.batimentsObject.visible = false; // Désaffiche l'objet batiments
      }
      renderer.setSize(window.innerWidth , window.innerHeight);
      renderer.render(scene, camera);
    }

    loop();
  },
  methods: {
    faireQuelqueChose() {
      if (this.chek_toilettes && this.toilettesObject) {
        this.toilettesObject.visible = true; // Affiche l'objet toilettes
      } else if (this.toilettesObject) {
        this.toilettesObject.visible = false; // Désaffiche l'objet toilettes
      }

      if (this.chek_batiments && this.batimentsObject) {
        this.batimentsObject.visible = true; // Affiche l'objet batiments
      } else if (this.batimentsObject) {
        this.batimentsObject.visible = false; // Désaffiche l'objet batiments
      }
    },
    onMouseDown(event) {
      this.isDragging = true;
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    },
    onMouseMove(event) {
      if (this.isDragging) {
        const deltaX = event.clientX - this.mouseX;
        const deltaY = event.clientY - this.mouseY;

        // Mettez à jour la rotation en fonction du mouvement de la souris
        this.angleY -= deltaX * 0.01;
        this.angleX += deltaY * 0.01;
        if (this.angleX > 1.6) {
        this.angleX = 1.6;
        }
        if (this.angleX < -1.6) {
          this.angleX = -1.6;
        }

        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
      }
    },
    onMouseUp() {
      this.isDragging = false;
    },
  }
}
</script>

<style scoped>
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
  background-color: rgba(100,100,100);
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
</style>
