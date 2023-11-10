<template>
  <div>
    <nav class="navbar">
      <div class="container">
        <a href="../" class="logo">
          <img src="./assets/images/Image1.png" alt="Logo">
        </a>
        <div class="nav-buttons">
          <router-link to="/page/accueil" class="buttons-nav">À propos</router-link>
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

<style>
  /* Reset du style par défaut et ajout de styles de base */
  body, h1, h2, h3, p, ul, li {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
  }

  /* Style de la navbar */
  .navbar {
    background-color: #000;
    padding: 15px 0;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo img {
    width: 100px; /* Ajustez la largeur selon vos besoins */
  }

  /* Style des boutons de navigation */
  .nav-buttons {
    display: flex;
    gap: 20px;
  }

  .buttons-nav {
    text-decoration: none;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .buttons-nav:hover {
    background-color: #333;
  }

  /* Style du contenu de la page */
  router-view {
    margin-top: 20px;
  }
</style>