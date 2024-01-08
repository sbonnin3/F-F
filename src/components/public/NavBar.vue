<template>
  <nav>
    <div class="brand">
      <router-link :to="{ name: 'home' }">
        <img
          alt="logo de l'événement"
          src="@/assets/images/logo_f-f_white.png"
        />
      </router-link>
    </div>
    <div class="hamburger" @click="toggleMenu">
      <v-icon>
        {{ isMenuOpen ? "mdi-close" : "mdi-menu" }}
      </v-icon>
    </div>
    <div :class="{ open: isMenuOpen }" class="nav-links">
      <router-link :exact="true" :to="{ name: 'home' }">
        <v-icon>mdi-home</v-icon>
      </router-link>
      <router-link
        v-for="(link, id) in links"
        :key="id"
        :exact="link.exact || false"
        :to="link.to"
      >
        {{ $t(link.title) }}
      </router-link>
      <router-link v-if="!$store.state.isLogged" :to="{ name: 'login' }"
        >{{ $t("public.navigation.login") }}
      </router-link>
      <router-link v-if="$store.state.isLogged" :to="{ name: 'logout' }"
        >{{ $t("public.navigation.logout") }}
      </router-link>
      <LanguageSelector/>
    </div>
  </nav>
</template>

<script>
import LanguageSelector from "@/components/LanguageSelector.vue";

export default {
  components: { LanguageSelector },
  props: {
    userRole: { String },
    links: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
  watch: {
    $route() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  background-color: #000;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;

  z-index: 1000;

  i {
    color: #fff !important;
  }

  .brand {
    img {
      height: 65px;
    }

    z-index: 1001;
  }

  .hamburger {
    display: none;
    cursor: pointer;
    color: #fff;

    i {
      font-size: 2.3rem;
    }

    z-index: 1001;
  }

  .nav-links {
    display: flex;
    align-items: center;

    gap: 40px;

    a {
      color: #fff;
      text-decoration: none;
      font-size: 1.3rem;

      padding: 6px 0;
      border-bottom: transparent 3px solid;
      transition: all 0.3s ease-in-out;

      &:hover {
        border-bottom: yellow 3px solid;
      }

      &.active {
        border-bottom: yellow 3px solid;
      }

      i {
        vertical-align: bottom;
        padding-bottom: 3px;
      }
    }

    z-index: 1001;
  }

  .loginButton {
    font-family: "Arial", sans-serif;
    font-size: 1.3rem;
    border: none;
    background: none;
    cursor: pointer;
    margin: 0;
    padding: 6px 0 6px 0;
    color: white;
    border-bottom: transparent 3px solid;
    transition: all 0.3s ease-in-out;

    &:hover {
      border-bottom: yellow 3px solid;
    }
  }

  #role {
    color: yellow;
    font-size: 1.3rem;
  }

  @media screen and (max-width: 1200px) {
    .hamburger {
      display: block;
    }
    .nav-links {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      flex-direction: column;
      justify-content: center;
      align-items: center;

      background-color: #000;

      transform: translateX(100%);
      transition: all 0.3s ease-in-out;

      gap: 10px;

      a {
        font-size: 1.2rem;
        padding: 10px 0;
      }

      z-index: 1000;
    }

    .nav-links.open {
      transform: translateX(0);
    }
  }
}
</style>
