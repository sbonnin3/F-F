<template class="page">
  <div class="content">
    <div class="background">
      <h1 class="page-title">FAST & FABULOUS  </h1>   
    </div>

    <div class="titre">
      <h1> Grand Prix Automobile au Circuit Paul Ricard </h1>
    </div>
    <div class="suite">
      <div class="text">
        <h1> Vivez une journée exceptionnelle de vitesse et d'adrénaline ! </h1>
        <br>
        <p> Le Circuit Paul Ricard est ravi d'accueillir l'édition 2024 de notre Grand Prix Automobile, une célébration palpitante pour les amateurs de vitesse et de performances mécaniques. Cet événement unique en son genre vous offre une journée complète de courses époustouflantes, d'activités passionnantes et de divertissements pour tous les âges. </p>
        <br> <br>
        <h2> Points forts de l'événement :</h2>
        <br>
        <ul>
        <li> Le Grand Prix : L'attraction principale de la journée, notre Grand Prix vous promet des courses à couper le souffle avec certains des meilleurs pilotes du circuit. Vivez l'excitation de la vitesse et la compétition sur l'un des circuits les plus emblématiques de France. </li>
        <li>Karting pour tous : Que vous soyez débutant ou pilote expérimenté, profitez de nos sessions de karting. Une occasion parfaite pour sentir l'adrénaline d'une course et pourquoi pas, découvrir de futurs talents. </li>
        <li> Baptêmes de pilotage : Vivez le frisson de la vitesse en passager d'une voiture de course pilotée par des professionnels. Une expérience inoubliable qui vous fera vivre les sensations d'une vraie course </li>
        <li> Expositions et animations : Découvrez une gamme de voitures classiques et modernes, participez à des ateliers interactifs et profitez d'animations pour toute la famille.</li>
        <li> Restauration et zones de détente : Des espaces de restauration seront disponibles pour vous permettre de recharger vos batteries et de profiter de la journée confortablement. </li>
        </ul>
        <br>
        <h3> Rejoignez-nous pour une journée mémorable au cœur de l'action et de la passion automobile. Le Grand Prix au Circuit Paul Ricard est plus qu'un événement, c'est une expérience à vivre pleinement !</h3>
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
