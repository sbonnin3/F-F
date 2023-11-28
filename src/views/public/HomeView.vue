<template class="page">
  <div class="content">
    <div class="background">
      <h1 class="page-title">FAST & FABULOUS</h1>
    </div>

    <div class="titre">
      <h1>{{ $t('public.home.header') }}</h1>
    </div>
    <div class="suite">
      <div class="text">
        <h1>{{ $t('public.home.secondHeader') }}</h1>
        <br>
        <p>{{ $t('public.home.leCircuitPaulRicardEstRaviDaccueillir') }}</p>
        <br> <br>
        <h2>{{ $t('public.home.pointsForts.header') }}</h2>
        <br>
        <ul>
        <li>{{ $t('public.home.pointsForts.grandPrix') }} </li>
        <li>{{ $t('public.home.pointsForts.kartingForAll') }} </li>
        <li>{{ $t('public.home.pointsForts.bateme') }} </li>
        <li>{{ $t('public.home.pointsForts.animations') }}</li>
        <li>{{ $t('public.home.pointsForts.restauration') }} </li>
        </ul>
        <br>
        <h3> {{ $t('public.home.endOfPage') }}</h3>
      </div>
    </div>
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
}

.background {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('@/assets/images/paul_ricard.JPG');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.suite{
  padding-top: 5%;
  padding-left: 20%;
  padding-right: 20%;
  padding-bottom:20%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  font-size: 20px;
}

.content {
  width: 100%;
  height: 100vh; /* Assurez-vous que la hauteur de votre contenu occupe toute la vue de la fenêtre */
  /*background: url("@/assets/images/video.gif") center center fixed;     = animation voiture*/
  background-size: cover;
  margin: 0;
  padding: 0;
}

.titre {
  padding-top: 1%;
  text-align: center;
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
