<template>
  <nav>
    <div class="brand">
      <router-link to="/dashboard">
        <img
          alt="logo de l'application"
          src="@/assets/images/logo_f-f_white.png"
        />
      </router-link>

      <div class="line"></div>
    </div>
    <div class="nav-links">
      <router-link
        v-for="(link, id) in links"
        :key="id"
        :exact="link.exact || false"
        :to="link.to"
      >
        <v-icon>{{ link.icon }}</v-icon>
        <div class="link-text">{{ $t(link.title) }}</div>
      </router-link>
      <router-link to="/logout"
        >{{ $t("public.navigation.logout") }}
      </router-link>
      <div class="language">
        <LanguageSelector />
      </div>
    </div>
  </nav>
</template>

<script>
import LanguageSelector from "@/components/LanguageSelector.vue";

export default {
  name: "SideBar",
  components: { LanguageSelector },
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  background-color: black;
  width: 350px;
  height: 100vh;
  padding: 20px;

  .brand {
    position: relative;

    height: 10vh;

    min-height: 120px;

    a {
      display: block;
      width: 100%;

      img {
        display: block;
        width: 120px;
        inset: 0;
        margin: auto;
      }
    }

    .line {
      position: absolute;
      left: 25%;
      right: 25%;
      width: 50%;
      height: 1px;
      background-color: white;

      top: 80%;
    }
  }

  .nav-links {
    font-size: 1.3rem;
    position: relative;

    a {
      color: white;
      text-decoration: none;

      display: flex;
      align-items: center;
      padding: 10px 0 10px 20px;
      margin: 5px 0;
      border-left: 3px solid transparent;
      border-radius: 5px;
      transition: all 0.3s ease-in-out;

      &:hover {
        border-left: 3px solid yellow;
        background-color: rgba(255, 255, 255, 0.2);
      }

      i {
        margin-right: 10px;
        min-width: 24px;
        color: white;
      }

      .link-text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &.router-link-exact-active {
        background-color: yellow;
        color: black;

        & i {
          color: black;
        }
      }
    }

    .language {
      position: relative;

      .lang-changer {
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>
