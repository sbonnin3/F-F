<template>
  <div>
    <h1>Formulaire de réservation</h1>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="client.name" placeholder="Nom complet" required>
      <input type="email" v-model="client.email" placeholder="Email" required>
      <input type="text" v-model="client.phone" placeholder="Téléphone" required>
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
      },
    };
  },
  methods: {
    submitForm() {
      console.log('Informations client:', this.client);

      if (this.$route.name !== 'ReservationForm') {
        this.$router.push({ name: 'ReservationForm' }).catch(err => {
          if (err.name !== 'NavigationDuplicated') {
            throw err;
          }
        });
      }
    },
  },
};
</script>

