<template>
  <v-container>
    <v-row>
      <v-col cols="4" v-if="$store.state.auth.user.provider.services.posts">
        <v-alert type="error" prominent border="top" icon="mdi-post">
          <p><span class="display-1 font-weight-bold">{{ $store.state.posts.providerPosts.length }}</span> <br>posted posts since start</p>
        </v-alert>
      </v-col>
      <v-col cols="8">
        <v-alert type="info" border="top" icon="mdi-account-card">
          <p><span class="font-weight-bold">{{ $store.state.auth.user.firstname }} {{ $store.state.auth.user.lastname }}</span>
            <br><span class="font-italic">{{ $store.state.auth.user.email }}</span>
            <br>For {{ $store.state.auth.user.provider.name }} ({{$store.state.auth.user.provider.category}})</p>
        </v-alert>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      provider: {},
    }
  },
  async mounted() {
    this.$store.dispatch('getProviderPosts')
  }
}

</script>