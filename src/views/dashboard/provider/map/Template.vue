<template>
  <div class="posts">
    <v-container v-if="$store.state.auth.user.provider.services.mapPlacement">
      <h1>{{ $t("dashboard.navigation.map") }}</h1>
      <router-view></router-view>
    </v-container>
    <v-container v-else>
      <PleaseSuscribeToService
        :service="$t('dashboard.navigation.map')"
        :link-to-suscribe="{ name: 'dashboard.ROLE_PROVIDER' }"
      ></PleaseSuscribeToService>
    </v-container>
  </div>
</template>

<script>
import PleaseSuscribeToService from "@/components/dashboard/PleaseSuscribeToService.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Template",
  components: { PleaseSuscribeToService },
};
</script>