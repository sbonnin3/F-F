<template class="page">
  <div class="content">
    <div class="background">
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 sm:p-4 rounded">
        <div class="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          FAST & FABULOUS
        </div>
      </div>
    </div>

    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="titre text-center mt-12 mb-10">
        <!-- Tailles de police réactives pour le titre principal -->
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">{{ $t('public.home.header') }}</h1>
        <hr class="my-8 border-gray-600" /> <!-- Séparateur visuel après le titre principal -->
      </div>
      <div class="suite">
        <div class="text space-y-6">
          <!-- Tailles de police réactives pour le second titre -->
          <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">{{ $t('public.home.secondHeader') }}</h2>
          <!-- Texte adaptatif pour les différents écrans -->
          <p class="text-lg sm:text-lg leading-relaxed">{{ $t('public.home.leCircuitPaulRicardEstRaviDaccueillir') }}</p>
          <hr class="my-6 border-gray-300" /> <!-- Séparateur visuel avant les points forts -->
          <!-- Tailles de police réactives pour les sous-titres -->
          <h2 class="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 my-4">{{ $t('public.home.pointsForts.header') }}</h2>
          <ul class="list-disc pl-5 space-y-3 text-base sm:text-lg">
            <li>{{ $t('public.home.pointsForts.grandPrix') }}</li>
            <li>{{ $t('public.home.pointsForts.kartingForAll') }}</li>
            <li>{{ $t('public.home.pointsForts.bateme') }}</li>
            <li>{{ $t('public.home.pointsForts.animations') }}</li>
            <li>{{ $t('public.home.pointsForts.restauration') }}</li>
          </ul>
          <hr class="my-6 border-gray-300" /> <!-- Séparateur visuel avant la conclusion -->
          <!-- Tailles de police réactives pour la conclusion -->
          <p class="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mt-6 mb-12 text-center">{{ $t('public.home.endOfPage') }}</p>
        </div>
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
  padding-top: 0%;
  padding-left: 20%;
  padding-right: 20%;
  padding-bottom:2%;
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
