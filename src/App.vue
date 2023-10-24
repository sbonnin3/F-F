<template>
  <div>
    <nav class="navbar">
      <div class="container">
        <a href="../" class="logo">
          <img class="logo" src="./assets/images/Image1.png" alt="Logo">
        </a>
        <div class="nav-buttons">
          <button class="buttons-nav" @click="goPage1">À propos</button>
          <button class="buttons-nav" @click="goPage2">Activités</button>
          <button class="buttons-nav" @click="goPage3">Planning</button>
          <button class="buttons-nav" @click="goPage4">Prestataires</button>
          <button class="buttons-nav" @click="goPage5">Connexion</button>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    goPage1 () {
      window.location.href = '../page/accueil'
    },
    goPage2 () {
      window.location.href = '../page/activites'
    },
    goPage3 () {
      window.location.href = '../page/planning'
    },
    goPage4 () {
      window.location.href = '../page/prestataire'
    },
    goPage5 () {
      window.location.href = '../page/connexion'
    }
  }
}
</script>

<style>
body, html {
  background-color: whitesmoke;
  color: black;
  margin: 0;
  padding: 0;
  font-family: 'MV Boli', sans-serif;
  z-index: 1;
}

a {
  color: navajowhite;
}

.navbar {
  position: fixed;
  background-color: #000;
  margin: 0;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  width: 100%;
}

.container {
  display: flex;
  align-items: center;
}

.fond {
  background: black;
}

.logo {
  margin: 0;
  padding: 0;
  width: 100px;
}

.nav-buttons {
  display: flex;
  padding-right: 50%;
}

.buttons-nav {
  margin-left: 20%;
  margin-right: 50%;
}

.nav-buttons button {
  background-color: #000;
  color: #ff0;
  border: 2px solid #ff0;
  border-radius: 20px;
  padding: 3% 10%;
  cursor: pointer;
  font-size: 70%;
  font-weight: bold;
  outline: none;
}

.nav-buttons button:hover {
  background-color: #ff0;
  color: #000;
}

img {
  border-radius: 20px;
}

.page {
  z-index: 0;
}

@media screen and (max-width: 768px) {
  .nav-buttons button {
    padding: 2% 8%; /* Ajustez selon vos préférences */
    margin-right: 5px; /* Ajustez selon vos préférences */
  }
}
</style>