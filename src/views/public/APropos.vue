<template class="page">
  <div class="content">
    <!--
    <div class="background">
      <h1> A propos : Notre événement </h1>
    </div>
    -->
    <div class="titre text-center mt-12 mb-10">
      <!-- Tailles de police réactives pour le titre principal -->
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">Plus d'information sur notre événement</h1>
      <hr class="my-8 border-gray-600" /> <!-- Séparateur visuel après le titre principal -->
    </div>

    <section class="container  mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col lg:flex-row items-center gap-8 pt-3">
        <!-- Texte et bouton sur la gauche -->
        <div class="flex-1 space-y-6">
          <h2 class="text-4xl font-bold text-gray-800 mb-3 shadow-lg">À propos du Grand Prix au Circuit Paul Ricard</h2>
          <p class="text-lg leading-relaxed text-gray-600">
            Le Grand Prix au Circuit Paul Ricard - un événement où la passion pour l'automobile et le désir de vivre des expériences uniques se rencontrent. Situé dans le sud de la France, le Circuit Paul Ricard est renommé pour sa piste impressionnante de 5,8 kilomètres, dotée de virages techniques et de longues lignes droites, offrant un terrain parfait pour les amateurs de vitesse. Notre événement s'adresse à tous : des passionnés de voitures classiques aux fans de technologie de pointe dans le sport automobile.
          </p>
          <button @click="goToNewPage" class="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300" >En savoir plus</button>
        </div>
        <!-- Image sur la droite -->
        <div class="flex-1">
          <img src="@/assets/images/dessus_paul_ricard.jpg" alt="Circuit Paul Ricard" class="rounded shadow-lg" />
        </div>
      </div>
    </section>

    <section class="container  mt-10 mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col lg:flex-row items-center gap-8 pt-3">
        <div class="flex-1">
          <img src="@/assets/images/voitures.webp" alt="Circuit Paul Ricard" class="rounded shadow-lg" />
        </div>
        <!-- Texte et bouton sur la gauche -->
        <div class="flex-1 space-y-6">
          <h2 class="text-4xl font-bold text-gray-800 mb-3 shadow-lg">Notre Philosophie : Passion et Diversité</h2>
          <p class="text-lg leading-relaxed text-gray-600">
            La passion pour les voitures et le sport automobile est au cœur de notre événement. Nous croyons que chaque visiteur, qu'il soit un amateur ou un expert, mérite de vivre une expérience exceptionnelle. C'est pourquoi notre Grand Prix propose une variété d'activités - du karting au baptême de pilotage - pour que chacun puisse trouver son bonheur.
          </p>
        </div>
      </div>
    </section>

    <section class="container  mt-10 mb-10 mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col lg:flex-row items-center gap-8 pt-3">
        <!-- Texte et bouton sur la gauche -->
        <div class="flex-1 space-y-6">
          <h2 class="text-4xl font-bold text-gray-800 mb-3 shadow-lg">Une Journée Inoubliable Pour Tous</h2>
          <p class="text-lg leading-relaxed text-gray-600">
            Notre objectif est de créer une ambiance inoubliable, où le frisson de la vitesse se mêle à l'excitation de la compétition. Des courses époustouflantes, des activités interactives, et des moments de détente sont soigneusement planifiés pour garantir une expérience complète. Que vous veniez en famille, entre amis ou en solo, le Grand Prix au Circuit Paul Ricard est l'endroit idéal pour partager votre passion et créer des souvenirs mémorables.
          </p>
        </div>
        <!-- Image sur la droite -->
        <div class="flex-1">
          <img src="@/assets/images/photo3.png" alt="Circuit Paul Ricard" class="rounded shadow-lg" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'APropos',
  methods: {
    goToNewPage() {
      window.location.href = 'https://www.circuitpaulricard.com/';
    },
  },
}

</script>

<style scoped lang="scss">
.background {
  padding-top: 5%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.suite {
  padding-top: 5%;
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  font-size: 20px;
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

.more-info-button:hover {
  background-color: #0056b3;
}

</style>
