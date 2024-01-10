<template>
  <v-container>
    <h1>{{ $t('dashboard.navigation.dashboard') }}</h1>
    <router-view></router-view>
  </v-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dashboard"
};
</script>