<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="5">
        <v-alert type="info" border="top" icon="mdi-account-card">
          <p><span class="font-weight-bold">{{ $store.state.auth.user.firstname }} {{
              $store.state.auth.user.lastname
            }}</span>
            <br><span class="font-italic">{{ $store.state.auth.user.email }}</span>
            <br>{{$t("dashboard.providers.dashboard.for_provider")}} <b>{{ $store.state.auth.user.provider.name }}</b> ({{ $store.state.auth.user.provider.category }})</p>
        </v-alert>
      </v-col>
      <v-col cols="12" lg="4" v-if="provider.services.posts">
        <v-alert type="grey" prominent border="top" icon="mdi-post">
          <p><span class="display-1 font-weight-bold">{{ $store.state.posts.providerPosts.length }}</span> <br>posted
            posts since start</p>
        </v-alert>
      </v-col>
      <v-col cols="12" lg="3" v-if="provider.services.livredor">
        <v-alert type="success" prominent border="top" icon="mdi-book-open-page-variant">
          <p><span class="display-1 font-weight-bold">{{ $store.state.livredor.providerReviews.length }}</span> reviews
            received</p>
          <v-rating
              :value="rateAvg"
              readonly
              dense
              color="white"
          />
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapState} from "vuex";

export default {
  computed: {
    ...mapState({
      provider: state => state.auth.user.provider
    }),
    rateAvg() {
      if (this.provider.services.livredor) {
        return this.$store.state.livredor.providerReviews.reduce((acc, comment) => acc + comment.rate, 0) / this.$store.state.livredor.providerReviews.length
      }
      return 0
    }
  },
  async mounted() {
    if (this.provider.services.posts)
      await this.$store.dispatch('getProviderPosts')
    if (this.provider.services.livredor)
      await this.$store.dispatch('getProviderReviews')
  }
}

</script>