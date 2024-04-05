<template>
  <div class="posts">
    <v-container v-if="$store.state.auth.user.provider.services.mapPlacement">
      <h1>{{ $t("dashboard.navigation.map") }}</h1>
      <router-view></router-view>
      <img :src="imagePath" alt="Carte">
      <div v-if="objectName">Bâtiment actuel : {{ objectName }}</div>
      <v-select v-model="selectedOption" :items="options" item-text="text" item-value="value"
        label="Choisissez une option"></v-select>
      <v-btn @click="submitUpdate">Valider</v-btn>
    </v-container>
    <v-container v-else>
      <PleaseSuscribeToService :service="$t('dashboard.navigation.map')"
        :link-to-suscribe="{ name: 'dashboard.ROLE_PROVIDER' }"></PleaseSuscribeToService>
    </v-container>
  </div>
</template>

<script>
import PleaseSuscribeToService from "@/components/dashboard/PleaseSuscribeToService.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Template",
  components: { PleaseSuscribeToService },
  data() {
    return {
      objectName: '',
      imagePath: require('@/assets/images/CarteInteractiveProvider.png'),
      selectedOption: null,
      options: [
        { text: 'Restaurant1', value: 'Restaurant1' },
        { text: 'Restaurant2', value: 'Restaurant2' },
        { text: 'Restaurant3', value: 'Restaurant3' },
        { text: 'Restaurant4', value: 'Restaurant4' },
        { text: 'Aéroport', value: 'Aéroport' },
        { text: 'Karting', value: 'Karting' },
      ],
    };
  },
  computed: {
    providerId() {
      return this.$store.state.auth.user.provider.providerId;
    }
  },
  methods: {
    fetchProviderData(objectName) {
      const url = `http://localhost:3000/api/providers/objet/${objectName}`;
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Aucun provider associé');
          }
          return response.json();
        })
        .then(data => {
          if (data && data.length > 0) {
            const providerData = data[0];
            this.currentInfoWindow = {
              title: providerData.name,
              text: providerData.description,
              image: providerData.logo,
            };
          } else {
            throw new Error('Aucun provider associé');
          }
        })
        .catch(error => {
          console.log(error);
          const defaultInfo = this.defaultInfoForObjects()[objectName];
          if (defaultInfo) {
            this.currentInfoWindow = { ...defaultInfo };
          } else {
            console.error(`Aucune information trouvée pour l'objet : ${objectName}`);
          }
        })
        .finally(() => {
          this.showInfoWindow = true;
        });
    },
    async submitUpdate() {
      const providerId = this.$store.state.auth.user.provider._id;
      const objetName = this.selectedOption;

      try {
        const response = await fetch(`http://localhost:3000/api/providers/${providerId}/${objetName}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          console.log("Mise à jour réussie");
        } else {
          console.error("Erreur lors de la mise à jour");
        }
      } catch (error) {
        console.error("Erreur lors de l'appel API", error);
      }
    }
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>