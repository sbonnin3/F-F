<template>
  <div class="content">
    <br>
    <div class="image-container">
      <router-link to="3D" class="image-link" append>
        <h1>{{ $t("public.map.3Dmap") }}</h1>
        <img src="@/assets/images/map.png" alt="Carte-3D" class="carte-image">
      </router-link>
      <router-link to="streetview" class="image-link" append>
        <h1>{{ $t('public.map.streetView') }}</h1>
        <img src="@/assets/images/visite.png" alt="Carte-3D" class="carte-image">
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Carte'
  }
</script>

<style scoped>
.carte-image {
  width: 100%; /* Utilisez 100% pour remplir complètement le conteneur */
  border-radius: 30px;
}

.image-container {
  display: flex;
  justify-content: space-between; /* Les images seront espacées également sur la ligne */
  /* Ajoutez d'autres styles nécessaires */
}

.image-link {
  flex: 1; /* Chaque image occupe une part égale de l'espace disponible */
  margin: 0 10px; /* Espacement entre les images */
  /* Ajoutez d'autres styles nécessaires */
}
h1 {
  text-align: center;
  color: black;
}
a {
  text-decoration: none; /* Enlève le soulignement du lien */
}
</style>