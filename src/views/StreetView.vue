<template>
  <div class="container">
    <div class="carte" ref="container"></div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import plateforme from '../assets/paul_ricard/Plateforme.glb'
import route from '../assets/paul_ricard/Route.glb'
import batiments from '../assets/paul_ricard/Batiments.glb'
import toilettes from '../assets/paul_ricard/Toilettes.glb'
import restaurants from '../assets/paul_ricard/Restaurants.glb'
import concerts from '../assets/paul_ricard/Concerts.glb'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Carte',
  data() {
    return {
      routeObject: null,
      plateformeObject: null,
      toilettesObject: null,
      batimentsObject: null,
      restaurantsObject: null,
      concertsObject: null,

      rotationX: 0,
      rotationY: 0,

      camera: null,

      chek_toilettes: false,
      chek_batiments: false,
      chek_restaurants: false,
      chek_concerts: false
    }
  },
  mounted() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera = camera;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.$refs.container.appendChild(renderer.domElement);

    this.camera.position.y = 0.25
    this.camera.position.z = 0

    const loader = new GLTFLoader();

    loader.load(route, (gltf) => {
      this.routeObject = gltf.scene;
      scene.add(this.routeObject);
    })

    loader.load(plateforme, (gltf) => {
      this.plateformeObject = gltf.scene;
      scene.add(this.plateformeObject);
    })

    loader.load(batiments, (gltf) => {
      this.batimentsObject = gltf.scene;
      scene.add(this.batimentsObject);
    })

    loader.load(toilettes, (gltf) => {
      this.toilettesObject = gltf.scene;
      scene.add(this.toilettesObject);
    })

    loader.load(restaurants, (gltf) => {
      this.restaurantsObject = gltf.scene;
      scene.add(this.restaurantsObject);
    })

    loader.load(concerts, (gltf) => {
      this.concertsObject = gltf.scene;
      scene.add(this.concertsObject);
    })

    const light = new THREE.PointLight(0xffffffff, 1)
    scene.add(light);

    window.addEventListener('keydown', this.gererTouchesClavier);

    const loop = () => {
      requestAnimationFrame(loop);

      light.position.copy(camera.position);

      if (this.routeObject) {
        this.routeObject.rotation.x = this.rotationX;
        this.routeObject.rotation.y = this.rotationY;
      }

      if (this.plateformeObject) {
        this.plateformeObject.rotation.x = this.rotationX;
        this.plateformeObject.rotation.y = this.rotationY;
      }

      if (this.toilettesObject) {
        this.toilettesObject.rotation.x = this.rotationX;
        this.toilettesObject.rotation.y = this.rotationY;
      }

      if (this.batimentsObject) {
        this.batimentsObject.rotation.x = this.rotationX;
        this.batimentsObject.rotation.y = this.rotationY;
      }

      if (this.restaurantsObject) {
        this.restaurantsObject.rotation.x = this.rotationX;
        this.restaurantsObject.rotation.y = this.rotationY;
      }

      if (this.concertsObject) {
        this.concertsObject.rotation.x = this.rotationX;
        this.concertsObject.rotation.y = this.rotationY;
      }

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, this.camera);
    }

    loop();
  },
  methods: {
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
      this.camera.rotation.y -= 0.03;
    },
    deplacerGauche() {
      this.camera.rotation.y += 0.03;
    },
    avancer() {
      const forward = new THREE.Vector3(0, 0, -1);
      forward.applyQuaternion(this.camera.quaternion);
      this.camera.position.add(forward.multiplyScalar(0.03));
    },
    reculer() {
      const backward = new THREE.Vector3(0, 0, 1);
      backward.applyQuaternion(this.camera.quaternion);
      this.camera.position.add(backward.multiplyScalar(0.03));
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
</style>