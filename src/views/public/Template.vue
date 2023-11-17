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
          title: "Accueil",
          to: { name: "home" },
          exact: true
        },
        {
          title: "A propos",
          to: { name: "about" },
        },
        {
            title: "Carte",
            to: { name: "map" },
        },
        {
          title: "Activités",
          to: { name: "activities" },
        },
        {
          title: "Planning",
          to: { name: "planning" },
        },
        {
          title: "Prestataires",
          to: { name: "providers" },
        },
        {
          title: "Connexion",
          to: { name: "login" },
        },
      ],
    };
  },
};
</script>

<style lang="scss">
main {
  /* To avoid the navbar to hide the content */
  margin-top: 90px;

  .container {
    padding: 0 5%;

    @media screen and (max-width: 768px) {
      padding: 0;
    }
  }
}
</style>
