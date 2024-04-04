<template>
  <div class="content">
    <h1 class="page-title">Découvrez nos activités</h1>
    <div class="card-container">
      <div
        class="card"
        v-for="activity in activities"
        :key="activity.title"
        @click="openPopup(activity)"
      >
        <h3 class="card-title">{{ activity.title }}</h3>
        <img
          :src="activity.image"
          :alt="activity.title"
          class="card-image"
        />
        <p class="card-summary">{{ activity.summary }}</p>
        <button class="reserve-button">Réserver</button>
      </div>
    </div>
    <div class="popup" v-if="showPopup" @click.self="closePopup">
      <div class="popup-content" @click.stop>
        <h2>{{ selectedActivity.title }}</h2>
        <img
          :src="selectedActivity.image"
          :alt="selectedActivity.title"
          style="width: 70%; border-radius: 10px; margin: auto"
        />
        <p>{{ selectedActivity.summary }}</p>
        <p class="activity-price">Prix: {{ selectedActivity.price }} €</p>
      <div class="select-time-container">
  <span class="time-label">Horaires :</span>
  <select v-model="selectedTimeSlot" class="select-time-slot">
    <option value="" disabled selected>Sélectionnez un horaire</option>
    <option v-for="horaire in selectedActivity.horaires" :key="horaire" :value="horaire">
      {{ horaire }}
    </option>
  </select>
</div>

        <button @click="reserveActivity">Réserver</button>
      </div>
    </div>
  </div>
</template>

<script>
import { activités } from "@/services/from_datasets/activite.service.js";

export default {
  name: "ListeActivites",
  data() {
    return {
      activities: activités,
      selectedActivity: null,
      showPopup: false,
      selectedTimeSlot: null,
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
    reserveActivity() {
      this.showPopup = false;
      this.$router.push({
        name: "ReservationForm",
        query: {
          selectedActivity: this.selectedActivity.title,
          selectedTimeSlot: this.selectedTimeSlot,
        },
      });
    },
  },
};
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-title {
  font-size: 1.2em;
  margin: 10px 0;
  padding: 0 10px;
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-summary {
  padding: 5px 10px;
  color: #666;
  margin-bottom: 0px;
}

button {
  padding: 12px 24px;
  background-color: #ffbd00;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s;
  margin-top: 10px;
}

button:hover {
  background-color: #ff6400;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.popup {
  position: fixed;
  top: 45px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 40%;
  max-height: 80%;
  overflow-y: auto;
}

.popup-content img {
  width: 100%;
  border-radius: 10px;
}

.select-time-container {
  display: flex;
  justify-content: center; /* Centre horizontalement dans le conteneur */
  align-items: center;
  margin-top: 10px; /* Ajoutez un peu d'espace au-dessus du conteneur */
}

.time-label {
  font-weight: bold; /* Mettez le texte en gras si nécessaire */
  margin-right: 10px; /* Espace à droite du texte */
}

.select-time-slot {
  width: 50%; /* Ou la largeur spécifique que vous souhaitez */
  padding: 10px 15px;
  background-color: #fff;
  border: 2px solid #000; /* Bordure noire */
  border-radius: 4px;
  font-size: 16px;
  color: #495057;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.select-time-slot::after {
  content: '▼';
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #ced4da;
}

</style>
