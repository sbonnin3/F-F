<template>
    <div class="content">
      <h1>Voulez-vous vraiment vous déconnecter ?</h1>
      <button @click="logout">Oui</button>
      <button @click="$router.go(-1)">Non</button> <!-- Retour à la page précédente -->
    </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Logout",
  methods: {
    logout() {
      this.$store.dispatch("logout")
      this.$router.push({name: "home"});
    },
  },
};
</script>
<style scoped>

</style>
