<template>
  <div>
    <nav class="navbar">
      <div class="container">
        <div class="mobile-header">
          <a href="../../" class="logo">
            <img src="./assets/images/Image1.png" alt="Logo">
          </a>
          <button class="menu-button" @click="toggleMenu">&#9776;</button>
        </div>
        <div class="nav-buttons" :class="{ 'active': isMenuOpen }">
          <router-link to="/page/accueil" class="buttons-nav">Informations</router-link>
          <router-link to="/page/activites" class="buttons-nav">Activités</router-link>
          <router-link to="/page/planning" class="buttons-nav">Planning</router-link>
          <router-link to="/page/prestataire" class="buttons-nav">Prestataires</router-link>
          <router-link to="/page/connexion" class="buttons-nav">Connexion</router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
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

  .buttons-nav {
    text-decoration: none;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    border: 2px solid black; /* Ajoute un contour blanc autour du bouton */
  }

  .buttons-nav:hover {
    background-color: #333;
    border: 2px solid white; /* Ajoute un contour blanc autour du bouton */
  }

  /* Style du contenu de la page */
  router-view {
    margin-top: 20px;
  }

  /* Media query pour les téléphones */
  @media (max-width: 767px) {
    .container {
      flex-direction: column;
      align-items: flex-start;
    }

    .nav-buttons {
      margin-top: 10px;
    }

    .buttons-nav {
      padding: 10px;
    }

    .mobile-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .logo {
      order: -1; /* Pour déplacer le logo à gauche */
    }

    .menu-button {
      display: block;
      margin-right: 30px; /* Ajustez cette valeur selon vos besoins */
    }

    .nav-buttons {
      display: none;
      flex-direction: column;
      align-items: flex-start;
    }

    .buttons-nav {
      padding: 10px;
    }

    .nav-buttons.active {
      display: flex;
      justify-content: flex-end; /* Alignez les boutons à droite */
    }
  }

  body, html {
    margin: 0;
    padding: 0;
  }

  .navbar {
    position: fixed;
    width: 100%;
    background-color: #000;
    padding: 10px;
    z-index: 1000;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .content {
    padding-top: 70px;
  }

  .logo img {
    max-width: 100px;
  }

  .nav-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-left: 2%;
    padding-right: 2%;
  }

  @media screen and (max-width: 768px) {
    .buttons-nav {
      padding: 8px 16px;
      margin-left: 10px;
    }
  }

  .mobile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu-button {
    display: none;
    background: none;
    border: none;
    font-size: 1.5em;
    color: white;
    cursor: pointer;
  }

  /* Media query pour les téléphones */
  @media (max-width: 767px) {
    .menu-button {
      display: block;
    }

    .nav-buttons {
      display: none;
      flex-direction: column;
      align-items: flex-start;
    }

    .buttons-nav {
      padding: 10px;
    }

    .nav-buttons.active {
      display: flex;
    }
  }
</style>
