<template class="page">
  <div class="content">
    <div class="background">
      <h1> A propos : Notre événement </h1>
    </div>
    <div class="suite">
      <div class="text-image">
      <h2> 1. À propos du Grand Prix au Circuit Paul Ricard </h2>
      <br>
        <p>Le Grand Prix au Circuit Paul Ricard - un événement où la passion pour l'automobile et le désir de vivre des expériences uniques se rencontrent. Situé dans le sud de la France, le Circuit Paul Ricard est renommé pour sa piste impressionnante de 5,8 kilomètres, dotée de virages techniques et de longues lignes droites, offrant un terrain parfait pour les amateurs de vitesse. Notre événement s'adresse à tous : des passionnés de voitures classiques aux fans de technologie de pointe dans le sport automobile.</p>
        <button class="more-info-button">En savoir plus</button>
      </div>
      <div class="image-container">
        <img src="@/assets/images/dessus_paul_ricard.jpg" alt="Circuit">
      </div>
    </div>
    <div class="suite">
      <div class="image-container">
          <img src="voitures" alt="photo de différentes voitures">
      </div>
      <div class="text-image">
      <h3> 2. Notre Philosophie : Passion et Diversité </h3>
      <br>
        <p>La passion pour les voitures et le sport automobile est au cœur de notre événement. Nous croyons que chaque visiteur, qu'il soit un amateur ou un expert, mérite de vivre une expérience exceptionnelle. C'est pourquoi notre Grand Prix propose une variété d'activités - du karting au baptême de pilotage - pour que chacun puisse trouver son bonheur.</p>
      </div>
    </div>
    <div class="suite">
      <div class="text-image">
      <h3> 3. Une Journée Inoubliable Pour Tous </h3>
      <br>
      <p> Notre objectif est de créer une ambiance inoubliable, où le frisson de la vitesse se mêle à l'excitation de la compétition. Des courses époustouflantes, des activités interactives, et des moments de détente sont soigneusement planifiés pour garantir une expérience complète. Que vous veniez en famille, entre amis ou en solo, le Grand Prix au Circuit Paul Ricard est l'endroit idéal pour partager votre passion et créer des souvenirs mémorables. </p>
    </div>
     <div class="image-container">
        <img src="photo3.png" alt="podium">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'A Propos'
}
</script>

<style scoped>
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
