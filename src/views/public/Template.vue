<template>
  <div>
    <PublicNav :links="navLinks" />
    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
import PublicNav from "@/components/public/NavBar.vue";
import {mapState} from "vuex";

export default {
  name: "PublicTemplate",
  components: {
    PublicNav,
  },
  computed: {
    ...mapState(["navLinks"]),
  },
  mounted() {
    this.$store.dispatch("getNavLinks");
  }
}
;
</script>

<style>
/* Reset du style par défaut et ajout de styles de base */
body, h1, h2, h3, p, ul, li {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Arial', sans-serif;
}

main {
  margin-top: 90px;
}
</style>
