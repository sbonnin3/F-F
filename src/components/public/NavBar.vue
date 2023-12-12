<template>
  <nav>
    <div class="brand">
      <router-link :to="{ name: 'home' }">
        <img src="@/assets/images/logo_f-f_white.png" alt="logo de l'événement" />
      </router-link>
    </div>
    <div class="hamburger" @click="toggleMenu">
      <i class="material-symbols">
        {{ isMenuOpen ? "close" : "menu" }}
      </i>
    </div>
    <div class="nav-links" :class="{ open: isMenuOpen }">
      <router-link :to="{name: 'home'}" :exact="true">
        <i class="material-symbols">home</i>
      </router-link>
      <router-link v-for="(link, id) in getLinks()" :key="id" :to="link.to" :exact="link.exact || false">
        {{ $t(link.title) }}
      </router-link>
      <button v-if="!userRole" @click.prevent="openLoginForm" class="loginButton">{{ $t('public.navigation.login') }}</button>
      <span id="role" v-else>{{ userRole }}</span>
      <button v-if="userRole" @click="confirmLogout" class="loginButton">{{ $t('public.navigation.logout') }}</button>

      <span class="lang-changer">
        <i class="material-symbols">language</i>
        <select v-model="$i18n.locale" aria-label="sélection de la langue de l'application">
          <option v-for="lang in $i18n.availableLocales" :key="lang" :value="lang">
            {{ getFlagEmoji(lang) }}
          </option>
        </select>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    userRole:{ String
    },
    links: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      isMenuOpen: false,
      roleLinks: {
        admin: [
          { title: "dashboard.navigation.dashboard", to: { name: "admin_dashboard" } },
          { title: "dashboard.navigation.stats", to: { name: "admin_statistics" } },
          { title: "dashboard.navigation.notifications", to: { name: "admin_notifications" } },
          { title: "dashboard.navigation.myAccount", to: { name: "admin_account" } }
        ],
        prestataire: [
          { title: "dashboard.navigation.orders", to: { name: "presta_orders" } },
          { title: "dashboard.navigation.stats", to: { name: "presta_statistics" } },
          { title: "dashboard.navigation.notifications", to: { name: "presta_notifications" } },
          { title: "dashboard.navigation.myAccount", to: { name: "presta_account" } }
        ],
        client: [
          { title: "dashboard.navigation.reservations", to: { name: "client_reservations" } },
          { title: "dashboard.navigation.planning", to: { name: "client_planning" } },
          { title: "dashboard.navigation.myAccount", to: { name: "client_account" } }
        ],
        pilote: [
          { title: "dashboard.navigation.coursesCalendar", to: { name: "pilote_planning" } },
          { title: "dashboard.navigation.introductionsCalendar", to: { name: "pilote_baptism" } },
          { title: "dashboard.navigation.myAccount", to: { name: "pilote_account" } }
        ]
      }
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    getFlagEmoji(lang) {
      if (lang === "en") lang = "gb";

      const codePoints = lang.toUpperCase().split("").map((char) => 127397 + char.charCodeAt());
      return String.fromCodePoint(...codePoints);
    },
    openLoginForm() {
      this.$emit('open-login-form');
    },

    confirmLogout() {
      this.$emit('confirm-logout');
    },
    getLinks() {
      if (this.userRole) {
        return this.roleLinks[this.userRole.toLowerCase()] || this.links;
      }
      return this.links;
    }
  },
  watch: {
    $route() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style scoped lang="scss">
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

      i.material-symbols {
        vertical-align: bottom;
        padding-bottom: 3px;
      }
    }

    .lang-changer {
      color: white;
      display: flex;
      align-items: center;
      gap: 5px;

      select {
        background-color: transparent;
        border: none;
        color: white;
        font-size: 1rem;
        cursor: pointer;
      }

      i {
        font-size: 1.3rem;
      }

      border: 1px solid white;
      padding: 5px;
    }
    z-index: 1001;
  }

  .loginButton{
    font-family: 'Arial', sans-serif;
    font-size:1.3rem;
    border: none;
    background: none;
    cursor: pointer;
    margin: 0;
    padding : 6px 0 6px 0;
    color:white;
    border-bottom: transparent 3px solid;
    transition: all 0.3s ease-in-out;

    &:hover{
      border-bottom: yellow 3px solid;
    }
  }





  #role{
    color:yellow;
    font-size:1.3rem;
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
