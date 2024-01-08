<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    const userLocale = this.$store.state.auth.user.locale || localStorage.getItem('user.locale') || 'fr'
    this.$store.commit('setLocale', userLocale)
    this.$i18n.locale = userLocale
    document.documentElement.lang = userLocale
  },
  watch: {
    '$i18n.locale': function (newVal) {
      this.$store.dispatch('setLocale', newVal)
      document.documentElement.lang = newVal
    }
  },
}
</script>

<style>
/* Reset du style par défaut et ajout de styles de base */
body, h1, h2, h3, p, ul, li {
  margin: 0;
  padding: 0;
}

body {
  @media (max-width: 1000px) {
    text-align: justify;
  }
}

@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900');
</style>
