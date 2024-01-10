<template>
  <div class="content">
    <h1>Réservation pour le Grand Prix</h1>
    <div class="activities">
      <h2>Choisissez votre activité</h2>
      <select v-model="selectedActivity">
        <option disabled value="">Sélectionnez une activité</option>
        <option v-for="activity in activities" :key="activity.nom" :value="activity.nom">
          {{ activity.nom }}
        </option>
      </select>
    </div>
    <div class="date-time-picker" v-if="selectedActivity">
      <h2>Choisissez la date et l'heure</h2>
      <div class="time-slots">
        <button class="time-slot" 
                v-for="timeSlot in timeSlots" 
                :key="timeSlot" 
                @click="selectTimeSlot(timeSlot)">
          {{ timeSlot }}
        </button>
      </div>
    </div>
    <div class="reservation-details" v-if="selectedTimeSlot">
      <h2>Détails de la réservation</h2>
      <p>Activité sélectionnée : {{ getActivity(selectedActivity).nom }}</p>
      <p>Description : {{ getActivity(selectedActivity).description }}</p>
      <p>Heure sélectionnée : {{ selectedTimeSlot }}</p>
    </div>
    <div class="button-container">
      <button class="confirm-button" 
              v-if="selectedActivity && selectedTimeSlot && !reservationConfirmed" 
              @click="confirmReservation">
        Confirmer la réservation
      </button>
      <button class="cancel-button" 
              v-if="reservationConfirmed" 
              @click="cancelReservation">
        Annuler la réservation
      </button>
    </div>
     <div class="countdown-container" v-if="countdown">
      <h2>Temps restant avant l'événement :</h2>
      <p>{{ countdown }}</p>
    </div>
  </div>
</template>

<script>
import ActiviteService from '@/services/from_datasets/activite.service.js';

export default {
  name: 'ReservationActivite',
  data() {
    return {
      selectedActivity: '',
      selectedTimeSlot: null,
      activities: ActiviteService.getAllActivites(),
      timeSlots: this.generateTimeSlots(),
      reservationConfirmed: false,
    };
  },
  methods: {
    generateTimeSlots() {
      let slots = [];
      for (let hour = 8; hour <= 20; hour++) {
        slots.push(`${hour}:00`);
      }
      return slots;
    },
    selectTimeSlot(slot) {
      this.selectedTimeSlot = slot;
    },
    confirmReservation() {
      this.reservationConfirmed = true;
    },
    cancelReservation() {
      this.reservationConfirmed = false;
      this.selectedTimeSlot = null;
    },
    getActivityAnimation(activityName) {
      const activity = this.getActivity(activityName);
      return activity && activity.image || '';
    },
    getActivity(activityName) {
      return this.activities.find(activity => activity.nom === activityName) || {};
    }
  },
}
</script>
<style scoped>

.content {
  max-width: 800px; /* Limiter la largeur maximale du contenu */
  margin: auto; /* Centrer dans la page */
  padding: 20px; /* Ajouter du padding pour l'espacement */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Ajouter une ombre subtile */
  border-radius: 10px; /* Adoucir les coins */
  background: #fff; /* Fond blanc pour la section */
}

.activities, .date-time-picker, .reservation-details {
  margin-bottom: 20px; /* Espacement entre les sections */
}

h1, h2 {
  color: #333; /* Couleur plus foncée pour les titres */
  text-align: center; /* Centrer les titres */
}

select {
  width: 100%; /* Utiliser toute la largeur disponible */
  padding: 10px; /* Ajouter du padding pour rendre la sélection plus grande */
  margin-bottom: 20px; /* Espacement après le sélecteur */
  border: 1px solid #ccc; /* Bordure subtile */
  border-radius: 5px; /* Coins arrondis pour le sélecteur */
}

.time-slot:hover {
  background-color: #e0e0e0;
  border-color: #c0c0c0;
}

.reservation-details {
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 5px;
  background: #f8f8f8;
}

.time-slots {
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* Ajoute un espace entre les boutons */
  justify-content: start;
  max-width: 600px; /* Vous pouvez ajuster cette largeur en fonction de votre design */
  margin: auto; /* Centrer le conteneur des créneaux */
}

.time-slot {
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f8f8f8;
  cursor: pointer;
  transition: background-color 0.3s ease;

  /* Taille fixe ou minimum pour chaque créneau */
  min-width: 80px;
  text-align: center;
}

.time-slot:hover {
  background-color: #e0e0e0; /* Changement de couleur au survol */
}

.button-container {
  display: flex;
  justify-content: center; /* Alignement horizontal au centre */
  margin-top: 20px; /* Ajoutez une marge en haut si nécessaire */
}

.confirm-button, .cancel-button {
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin: auto; 
}

.confirm-button:hover, .cancel-button:hover {
  background-color: #0056b3;
}

.animation-container {
  text-align: center; /* Centrer le contenu horizontalement */
  display: flex; /* Utiliser flexbox pour centrer */
  justify-content: center; /* Centrer horizontalement dans le conteneur flex */
  align-items: center; /* Centrer verticalement dans le conteneur flex */
  height: 200px; /* Fixer une hauteur pour le conteneur, ajustez selon vos besoins */
  
}

.animation-container img {
  max-width: 100%; /* Limiter la largeur maximale de l'image à celle de son conteneur */
  max-height: 100%; /* Limiter la hauteur maximale de l'image à celle de son conteneur */
  object-fit: contain; /* Assurez-vous que tout l'objet rentre dans la boîte assignée */
}

</style>
