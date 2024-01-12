<template>
  <div class="content">
    <h1 class="page-title">Découvrez nos activités</h1>
    <div class="card-container">
      <div class="card" v-for="activity in activities" :key="activity.title" @click="openPopup(activity)">
        <h3 class="card-title">{{ activity.title }}</h3>
        <img :src="activity.image" :alt="activity.title" class="card-image">
        <p class="card-summary">{{ activity.summary }}</p>
        <button class="reserve-button">Réserver</button>
      </div>
    </div>

    <div class="popup" v-if="showPopup" @click="handleOutsideClick">
      <div class="popup-content" @click.stop>
        <h2>{{ selectedActivity.title }}</h2>
        <img :src="selectedActivity.image" :alt="selectedActivity.title" style="width: 50%;">
        <p>{{ selectedActivity.summary }}</p>
        <p class="activity-price">Prix: {{ selectedActivity.price }} €</p>
        <button @click="reserveActivity">Réserver</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Activites',
  data() {
    return {
      selectedActivity: null,
      showPopup: false,
      activities: [
        { title: 'Piste de karting',
          image: 'https://www.circuitpaulricard.com/assets/evenements/938/fiche/2020_PaulRicard_KARTPACA-7820.jpg',
          summary: 'Découvrez la vitesse et l’adrénaline sur notre piste de karting.',
          price: 50,
        },
        { title: 'Vol en hélicoptère',
          image: 'https://www.helipass.com/uploads/media/default/0001/02/5cf525a20a54b-mob9016-jpg.jpeg',
          summary: 'Survolez le circuit et vivez une expérience inoubliable.',
          price: 50,
        },
        { title: 'Tour en bus',
          image: 'https://static.apidae-tourisme.com/filestore/objets-touristiques/images/26/161/9543962-diaporama.jpg',
          summary: 'Explore la piste avec confort dans notre bus.',
          price: 50,
        },
        { title: 'Terrain de quad',
          image: 'https://c3.ywcdn.com/www.airvertical.fr/files/2022/01/800x600_QUAD.jpeg',
          summary: 'Découvrez de nouvelles sensations sur notre terrain de quad.',
          price: 50,
        },
        { title: 'Restauration',
          image: 'https://media.abcsalles.com/images/1/salles/900h/14361/circuit-paul-ricard-6.jpg',
          summary: 'Venez vous restaurer dans les différents snacs.',
          price: 50,
        },
        { title: 'Concert',
          image: 'https://weezevent.com/wp-content/uploads/2018/08/27184142/organiser-un-concert-en-7-etapes.png',
          summary: 'Entre amis écoutez de musique lors des différents concerts.',
          price: 50,
        },
        { title: "Feu d'artifice",
          image: 'https://cdn.visitjapan.ru/storage/app/media/Spot/6545/image/td2pki7buofscgn3essk.jpeg',
          summary: 'Fêtons le 14 juillet cette année au circuit paul ricard.',
          price: 50,
        },
        { title: 'Course des pilotes',
          image: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/motorsport/circuits/EUROPE/valencia/2023/paul_d.jpg',
          summary: 'Regardez le grand prix entre les différents pilotes de course.',
          price: 50,
        },
        { title: 'Bâptème de pilotage',
          image: 'https://media.cylex-locale.fr/companies/1426/5920/images/1707112535-img40_145988_large.jpg',
          summary: 'Même jeune tu peux venir conduire au circuit paul ricard.',
          price: 50,
        },
        { title: 'Simulation de conduite',
          image: 'https://xtrem-park.com/wp-content/uploads/2022/04/CPR-BOUTIQUE-SIMU-1.jpg',
          summary: "Conduire sans risque, c'est possible avec la simulation.",
          price: 50,
        },
      ]
    };
  },
  methods: {
    openPopup(activity) {
      this.selectedActivity = activity;
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
    handleOutsideClick() {
      if (this.showPopup) {
        this.showPopup = false;
      }
    },
    reserveActivity() {
      // Logique pour la réservation
    },
  }
}
</script>

<style scoped>
.content {
  text-align: center;
  padding: 20px 0 40px 0;
}

.page-title {
  font-size: 2em;
  margin-top: 0;
  margin-bottom: 20px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card {
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.card-title {
  font-size: 1.2em;
  margin: 10px 0;
  width: 100%;
  padding: 0 10px;
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-summary {
  padding: 5px 10px 5px 10px;
  color: #666;
  margin-bottom: 0px;
  width: 100%;
  margin: auto;
}

.reserve-button {
  padding: 10px 20px;
  margin-top: auto;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.reserve-button:hover {
  background-color: #0056b3;
}

.popup {
  position: fixed;
  top: 45px; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 60%;
  max-height: 80%;
  overflow-y: auto;
}

.popup-content img {
  width: 100%;
  border-radius: 10px;
}

.activity-price {
  font-size: 1.2em;
  margin-top: 10px;
}
</style>