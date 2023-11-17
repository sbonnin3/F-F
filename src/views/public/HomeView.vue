<template>
  <div class="content">
    <img class="affiche" src="@/assets/images/affiche.png" alt="Carte-3D">
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
  background: url("@/assets/images/video.gif") 100% 50% fixed;
  background-size: cover;
  margin: 0;
  padding: 0;
}

.affiche {
  width: 200px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  display: block;
  padding-top: 130px;
  transition: transform 0.3s; /* Ajoute une transition pour un effet de lissage lors du changement de taille */
}

.affiche:hover {
  transform: scale(1.2); /* Ajustez la valeur selon vos besoins, 1.2 signifie un grossissement de 20% */
}
</style>
