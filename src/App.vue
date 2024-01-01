<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    const userLocale = localStorage.getItem('user.locale')
    if (userLocale) {
      this.$i18n.locale = userLocale
    }
    document.documentElement.lang = this.$i18n.locale
  },
  watch: {
    '$i18n.locale': function (newVal) {
      localStorage.setItem('user.locale', newVal)
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
