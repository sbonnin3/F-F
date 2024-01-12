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
        <img :src="selectedActivity.image" :alt="selectedActivity.title" style="width: 70%; border-radius: 10px; margin: auto">
        <p>{{ selectedActivity.summary }}</p>
        <p class="activity-price">Prix: {{ selectedActivity.price }} €</p>
        <select v-if="selectedActivity.horaires">
          <option v-for="horaire in selectedActivity.horaires" :key="horaire" :value="horaire">
            {{ horaire }}
          </option>
        </select>
        <button @click="reserveActivity">Réserver</button>
      </div>
    </div>
  </div>
</template>

<script>
import { activités } from '@/services/from_datasets/activite.service.js';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Activites',
  data() {
    return {
      activities: activités,
      selectedActivity: null,
      showPopup: false,
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

.popup-content select {
  width: auto;
  text-align: center;
  margin: auto;
  padding: 5px;
  border-radius: 20px;
  border: 1px solid #999;
}

.activity-price {
  font-size: 1.2em;
  margin-top: 10px;
}
</style>