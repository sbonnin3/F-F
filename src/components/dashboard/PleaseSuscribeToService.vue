<template>
  <v-alert outlined prominent icon="mdi-face-agent" type="error">
    <h2>{{service}}</h2>
    <p>{{ $t('dashboard.services.sorry-not-suscribed') }}</p>
    <v-btn color="error" text @click="$router.go(-1)">{{ $t('dashboard.services.go-back') }}</v-btn>
    <v-btn color="success" :to="linkToSuscribe">{{ $t('dashboard.services.subscribe-to-service', [service]) }}</v-btn>
  </v-alert>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'PleaseSuscribeToService',
  props: {
    service: {
      type: String,
      required: true
    },
    linkToSuscribe: {
      type: Object,
      required: false
    }
  },
}

</script>
