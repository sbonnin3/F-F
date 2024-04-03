<template>
  <div class="posts">
    <v-container v-if="$store.state.auth.user.provider.services.posts">
      <h1>{{ $t("dashboard.navigation.posts") }}</h1>
      <router-view></router-view>
    </v-container>
    <v-container v-else>
      <PleaseSuscribeToService
        :service="$t('dashboard.navigation.posts')"
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
