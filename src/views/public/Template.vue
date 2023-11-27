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
          title: "public.navigation.home",
          to: { name: "home" },
          exact: true
        },
        {
          title: "public.navigation.about",
          to: { name: "about" },
        },
        {
            title: "public.navigation.map",
            to: { name: "map" },
        },
        {
          title: "public.navigation.activities",
          to: { name: "activities" },
        },
        {
          title: "public.navigation.planning",
          to: { name: "planning" },
        },
        {
          title: "public.navigation.providers",
          to: { name: "providers" },
        },
        {
          title: "public.navigation.login",
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
