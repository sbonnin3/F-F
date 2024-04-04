<template>
  <v-container>
    <h1>{{$t("dashboard.navigation.providers")}}</h1>
    <router-view></router-view>
  </v-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Template'
}
</script>