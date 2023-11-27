<template>
  <nav>
    <div class="brand">
      <router-link :to="{ name: 'home' }">
        <img src="@/assets/images/Image1.png" alt="Logo"/>
      </router-link>
    </div>
    <div class="hamburger" @click="toggleMenu">
      <i class="material-symbols">
        {{ isMenuOpen ? "close" : "menu" }}
      </i>
    </div>
    <div class="nav-links" :class="{ open: isMenuOpen }">
      <router-link v-for="(link, id) in links" :key="id" :to="link.to" :exact="link.exact || false">
        {{ $t(link.title) }}
      </router-link>
      <span class="lang-changer">
        <i class="material-symbols">language</i>
        <select v-model="$i18n.locale">
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
    getFlagEmoji(lang) {
      if (lang === "en") lang = "gb";

      const codePoints = lang.toUpperCase().split("").map((char) => 127397 + char.charCodeAt());
      return String.fromCodePoint(...codePoints);
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
