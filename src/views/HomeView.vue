<template>
  <div class="content">
    <h1>Bienvenue sur notre site web !</h1>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style>
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
}

.content h1 {
  color: white; /* Ajoutez une couleur de texte appropriée pour être visible sur le fond */
}
</style>
