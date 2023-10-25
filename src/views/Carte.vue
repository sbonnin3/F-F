<template>
  <div>
    <div class="carte" ref="container"></div>
  </div>
</template>

<script>
// Importez Three.js
import * as THREE from 'three';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Carte',
  mounted() {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight)
    const plateau = new THREE.BoxGeometry(5, 1, 5)
    const geometry2 = new THREE.BoxGeometry(1, 1, 1.5)
    const geometry3 = new THREE.BoxGeometry(0.5, 1, 0.5)
    const geometry4 = new THREE.BoxGeometry(0.5, 1, 1)
    geometry2.translate(1.2, 1, -1);
    geometry3.translate(-1.2, 1, 0);
    geometry4.translate(1.2, 1, 1.2);
    const material = new THREE.MeshPhongMaterial({ color:0xffffff })
    const material1 = new THREE.MeshPhongMaterial({ color:0xfff255 })
    const material2 = new THREE.MeshPhongMaterial({ color:0xff255 })
    const mesh = new THREE.Mesh(plateau, material)
    const mesh2 = new THREE.Mesh(geometry2, material)
    const mesh3 = new THREE.Mesh(geometry3, material2)
    const mesh4 = new THREE.Mesh(geometry4, material1)
    const light = new THREE.PointLight(0xeeeeee, 30)
    scene.add(light)
    scene.add(mesh)
    scene.add(mesh2)
    scene.add(mesh3)
    scene.add(mesh4)
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.$refs.container.appendChild(renderer.domElement);
    let angleY = 0;
    let angleX = Math.PI / 4; // Angle initial pour une vue en diagonale
    document.addEventListener('keydown', (event) => {
    const speed = 0.05;
    if (event.key === "ArrowUp" && angleX <= 1.6) {
      angleX += speed;
    }
    if (event.key === "ArrowDown" && angleX >= -1.6) {
      angleX -= speed;
    }
    if (event.key === "ArrowLeft") {
      angleY += speed;
    }
    if (event.key === "ArrowRight") {
      angleY -= speed;
    }
    });
    function loop() {
      requestAnimationFrame(loop);
      // Appliquer les rotations à la caméra
      camera.position.x = Math.sin(angleY) * 5;
      camera.position.z = Math.cos(angleY) * 5;
      camera.position.y = Math.sin(angleX) * 5 + 5; // Ajoutez la hauteur
      camera.lookAt(0, 0, 0);
      // Mettre à jour la position de la lumière
      light.position.copy(camera.position);
      renderer.render(scene, camera);
    }
    loop();
  }
}
</script>

<style scoped>
.carte {
  overflow: hidden;
}
</style>
