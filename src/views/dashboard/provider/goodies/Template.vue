<template>
  <div class="posts">
    <v-container v-if="$store.state.auth.user.provider.services.goodies">
      <h1>{{ $t("dashboard.navigation.goodies") }}</h1>
      <router-view></router-view>
    </v-container>
    <v-container v-else>
      <PleaseSuscribeToService
        :service="$t('dashboard.navigation.goodies')"
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