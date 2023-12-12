<template>
  <nav>
    <div class="brand">
      <router-link to="/dashboard">
        <img alt="logo de l'application" src="@/assets/images/logo_f-f_white.png"/>
      </router-link>

      <div class="line"></div>
    </div>
    <div class="nav-links">
      <router-link v-for="(link, id) in links" :key="id" :exact="link.exact || false" :to="link.to">
        <div class="link-icon material-symbols">{{ link.icon }}</div>
        <div class="link-text">{{ link.title }}</div>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    links: {
      type: Array,
      required: true,
    }
  }
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

    img {
      width: 120px;
      margin: auto;
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
    color: white;
    text-decoration: none;
    font-size: 1.3rem;
    a {
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

      .link-icon {
        margin-right: 10px;
        min-width: 24px;
      }

      .link-text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &.router-link-exact-active {
        background-color: yellow;
        color: black;

      }
    }
  }
}
</style>