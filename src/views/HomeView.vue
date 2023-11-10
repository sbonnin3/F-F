<template>
  <div class="content">
    <h1>Circuit Paul Ricard</h1>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
body {
  margin: 0;
  overflow: hidden; /* Empêche le défilement de la page */
}

.content {
  width: 100%;
  height: 100vh; /* Assurez-vous que la hauteur de votre contenu occupe toute la vue de la fenêtre */
  overflow: hidden;
  background: url("../assets/images/video.gif") center center fixed;
  background-size: cover;
  margin: 0;
  padding: 0;
}

h1 {
  padding-top: 240px;
  text-align: center;
  color: rgba(200, 50, 50, 100);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: 'VotrePolicePreferée', sans-serif;
  transition: color 0.5s ease;
}
</style>
