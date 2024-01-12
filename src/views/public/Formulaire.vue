<template>
  <div>
    <h1>Formulaire de réservation</h1>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="client.name" placeholder="Nom complet" required>
      <input type="email" v-model="client.email" placeholder="Email" required>
      <input type="tel" v-model="client.phone" placeholder="Téléphone" required
      pattern="\d{10}" title="Le numéro de téléphone doit contenir 10 chiffres.">       
      <button type="submit">Soumettre</button>
      <button type="button" @click="goBack">Retour</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Formulaire-Reservation',
  props: {
    selectedActivity: String,
    selectedTimeSlot: String,
  },
  data() {
    return {
      client: {
        name: '',
        email: '',
        phone: '',
      }
    };
  },
  methods: {
    submitForm() {
      if (this.client.phone.length === 10 && !isNaN(this.client.phone)) {
        console.log('Informations client:', this.client);
        alert("Les données ont bien été soumises."); // Ajouter cette ligne pour la confirmation
      } else {
        alert("Le numéro de téléphone doit être composé de 10 chiffres.");
       }
      localStorage.setItem('clientData', JSON.stringify(this.client));
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>

input[type="text"],
input[type="email"],
input[type="tel"] {
  /* ... vos autres styles d'input ... */
  margin-bottom: 30px; /* Augmentez cette valeur pour plus d'espace */
}

body, html {
    margin: 0;
    box-sizing: border-box;
    width: 300px;
    height: 150px;
    }

#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

h1 {
    margin-bottom: 2rem;
    color: #333;
    text-align: center; 
}

form {
    margin: auto; 
    padding: 2rem;
    max-width: 500px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    border-radius: 10px;
    margin-bottom: 0;
    background: #fff;
    display: flex;
    flex-direction: column;
    width: 100%; 
}

input {
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box; 
}

button {
    margin-bottom: 30px;
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 5px;
    background-color: #5cb85c;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    text-align: center; 

}

button:hover {
    background-color: #4cae4c;
}

.button-back {
  margin-top: 10px;
}

</style>
