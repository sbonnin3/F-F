<template>
  <div>
    <h1>Formulaire de réservation</h1>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="client.name" placeholder="Nom complet" required>
      <input type="email" v-model="client.email" placeholder="Email" required>
      <input type="text" v-model="client.phone" placeholder="Téléphone" required>
      <!-- Ajoutez d'autres champs si nécessaire -->
      <button type="submit">Soumettre</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ReservationForm',
  props: ['activityDetails'],
  data() {
    return {
      client: {
        name: '',
        email: '',
        phone: '',
        // ... autres champs
      },
    };
  },
  methods: {
    submitForm() {
      console.log('Informations client:', this.client);

      // Vérifiez si vous êtes déjà sur la route cible avant de naviguer
      if (this.$route.name !== 'ReservationForm') {
        this.$router.push({ name: 'ReservationForm' }).catch(err => {
          if (err.name !== 'NavigationDuplicated') {
            // Si l'erreur n'est pas une NavigationDuplicated, relancez-la
            throw err;
          }
          // Vous pouvez également ajouter une logique ici pour gérer l'erreur
        });
      }
    },
  },
};
</script>

