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
    </div>
</template>
<script>
export default {
    name: "PublicNav",
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