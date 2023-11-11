<template class="page">
  <div class="content">
    <div class="background">
      <h1>FAST & FABULOUS</h1>
    </div>
    <div class="titre">
      <h1>Page d'accueil : Clique sur la 2ème carte tu verras c'est génial !</h1>
    </div>
    <div class="suite">
      <div class="text-image">
        <p>Cypriis caesorumque has appulit Scironis Isauriae quae letalia ad navem quae quae sed funeribus appulit letalia</p>
      </div>
      <div class="image-container">
        <img src="../assets/images/dessus_paul_ricard.jpg" alt="Circuit">
      </div>
    </div>
    <div class="suite">
      <div class="image-container">
        <a href="../page/carte" class="logo">
          <img src="../assets/images/carte.png" alt="Carte-3D">
        </a>
      </div>
      <div class="text-image">
        <p>Cypriis caesorumque has appulit Scironis Isauriae quae letalia ad navem quae quae sed funeribus appulit letalia</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Accueil'
}
</script>

<style scoped>
.background {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-image: url('../assets/images/paul_ricard.JPG');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.suite {
  padding-top: 5%;
  padding-left: 20%;
  padding-right: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  max-width: 100%;
}

.titre {
  padding-top: 1%;
  text-align: center;
}

.text-image {
  padding: 10%;
}
</style>
