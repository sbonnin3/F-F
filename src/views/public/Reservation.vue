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
              v-if="selectedActivity && selectedTimeSlot" 
              @click="confirmReservation">
        Confirmer la réservation
      </button>
      <button class="cancel-button" 
              v-if="reservationConfirmed" 
              @click="cancelReservation">
        Annuler la réservation
      </button>
    </div>
    <client-information-form
      v-if="showClientForm"
      :activity-details="{ nom: selectedActivity, heure: selectedTimeSlot }"
      @formSubmitted="handleFormSubmission"
    />
  </div> <!-- Fermeture de la div "content" -->
</template>

<script>
import ClientInformationForm from './ClientInformationForm.vue'; 
import ActiviteService from '@/services/from_datasets/activite.service.js';

export default {

  components: {
    ClientInformationForm
  },

  name: 'ReservationActivite',
  data() {
    return {
      selectedActivity: '',
      selectedTimeSlot: null,
      activities: ActiviteService.getAllActivites(),
      timeSlots: [],
      showClientForm: false,
      reservationConfirmed: false,
    };
  },
  
   watch: {
    selectedActivity(newVal) {
      if (newVal) {
        const activite = ActiviteService.getActiviteByName(newVal);
        if (activite && activite.horaires) {
          this.timeSlots = activite.horaires;
        }
      } else {
        this.timeSlots = []; // Réinitialiser les créneaux horaires
      }
    },
  },
  methods: {

  confirmReservation() {
    this.reservationConfirmed = true;
  this.$router.push({
    name: 'ReservationForm',
    query: {
      selectedActivity: this.selectedActivity,
      selectedTimeSlot: this.selectedTimeSlot
    } 
  });
  },
    handleFormSubmission(clientData) {
      console.log('Le formulaire a été soumis avec les données suivantes:', clientData);
      this.$router.push({ name: 'Reservation' });
      this.showClientForm = false;
      this.selectedActivity = '';
      this.selectedTimeSlot = null;
    },

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
  max-width: 800px;
  margin: auto; 
  padding: 20px; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px; 
  background: #fff; 
}

.activities, .date-time-picker, .reservation-details {
  margin-bottom: 20px;
}

h1, h2 {
  color: #333; 
  text-align: center; 
}

select {
  width: 100%;
  padding: 10px; 
  margin-bottom: 20px; 
  border: 1px solid #ccc; 
  border-radius: 5px; 
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
  gap: 10px; 
  justify-content: center;
  max-width: 600px;
  margin: auto;
}

.time-slot {
  flex: 0 1 calc(33.333% - 10px); /* Prendre jusqu'à un tiers de l'espace disponible, moins le gap */
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f8f8f8;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;
  margin-bottom: 10px;
}

.time-slot:hover {
  background-color: #FFFF00; 
}

@media (max-width: 600px) {
  .time-slot {
    flex: 0 1 calc(50% - 10px); /* Pour les petits écrans, prenez la moitié de l'espace */
  }
}

@media (max-width: 400px) {
  .time-slot {
    flex: 0 1 100%; /* Pour les très petits écrans, chaque créneau prend toute la largeur */
  }
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
