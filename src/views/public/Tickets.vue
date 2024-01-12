<template>
    <div>
      <h1>Achat de Tickets</h1>
      <form @submit.prevent="handlePurchase">
        <div>
          <label>Type de Ticket:</label>
          <select v-model="ticketType">
            <option value="saturday">Samedi - 50€/personne</option>
            <option value="sunday">Dimanche - 50€/personne</option>
            <option value="both">Les deux jours - 85€/personne</option>
          </select>
        </div>
        <div>
          <label>Nombre de Personnes:</label>
          <input type="number" v-model.number="numberOfPeople" min="1" />
        </div>
        <div>Prix Total: {{ totalPrice }}€</div>
        <button type="submit">Acheter</button>
      </form>
  
      <div v-if="purchaseConfirmed">Réservation Confirmée</div>
    </div>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Tickets',
    data() {
      return {
        ticketType: 'saturday',
        numberOfPeople: 1,
        purchaseConfirmed: false
      };
    },
    computed: {
      totalPrice() {
        const prices = { saturday: 50, sunday: 50, both: 85 };
        return prices[this.ticketType] * this.numberOfPeople;
      },
    },
    methods: {
      handlePurchase() {
        // Ici, intégrez la logique de paiement et de confirmation
        console.log("Achat effectué");
        this.purchaseConfirmed = true;
        // Intégration avec le système de paiement et gestion des données
      },
    },
  };
  </script>
  
  <style scoped>
  /* Votre CSS ici */
  </style>
  