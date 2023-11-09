<!-- <template>
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

@media screen and (max-width: 768px) {
  .nav-buttons button {
    padding: 2% 8%; /* Ajustez selon vos préférences */
    margin-right: 5px; /* Ajustez selon vos préférences */
  }
}
</style> -->

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

body, html {
  margin: 0;
  padding: 0;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
}

.buttons-nav {
  margin-left: 20px;
  background-color: #555;
  color: #fff;
  border: 2px solid #ff0;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 70%;
  font-weight: bold;
  outline: none;
}

.buttons-nav:hover {
  background-color: #ff0;
  color: #000;
}

@media screen and (max-width: 768px) {
  .buttons-nav {
    padding: 8px 16px;
    margin-left: 10px;
  }
}

</style>
