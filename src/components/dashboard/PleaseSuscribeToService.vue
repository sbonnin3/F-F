<template>
  <v-alert outlined prominent icon="mdi-face-agent" type="error">
    <h2>{{service}}</h2>
    <p>Sorry, you need to suscribe to this service to access this page.</p>
    <v-btn color="error" text @click="$router.go(-1)">Go back</v-btn>
    <v-btn color="success" :to="linkToSuscribe">Subscribe to {{service}}</v-btn>
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
