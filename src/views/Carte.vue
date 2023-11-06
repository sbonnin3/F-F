<template>
  <div>
    <div class="carte" ref="container"></div>
  </div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import sansNomGLB from '../assets/paul_ricard.glb';

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
    }
  },
  mounted() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.$refs.container.appendChild(renderer.domElement);

    const loader = new GLTFLoader();

    loader.load(sansNomGLB, (gltf) => {
      const object = gltf.scene;

      scene.add(object);
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

      renderer.render(scene, camera);
    }

    loop();
  },
  methods: {
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
.carte {
  overflow: hidden;
}
</style>
