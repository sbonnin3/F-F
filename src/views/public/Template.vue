<template>
  <div>
    <PublicNav :links="publicNavLinks" />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import PublicNav from "@/components/public/NavBar.vue";

export default {
  name: "PublicTemplate",
  components: {
    PublicNav,
  },
  data() {
    return {
      publicNavLinks: [
        {
          title: "public.navigation.about",
          to: {name: "about"},
        },
        {
          title: "public.navigation.map",
          to: {name: "map"},
        },
        {
          title: "public.navigation.activities",
          to: {name: "activities"},
        },
        {
          title: "public.navigation.planning",
          to: {name: "planning"},
        },
        {
          title: "public.navigation.providers",
          to: {name: "providers"},
        },
      ],
    };
  },
  created() {
    if (this.$store.state.user.canAccessDashboard) {
      this.$router.push({name: 'dashboard'})
    }


    const savedUserRole = localStorage.getItem('userRole');
    if (savedUserRole) {
      this.userRole = savedUserRole; // Restaurez l'état de connexion à partir de LocalStorage
    }
  },
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
