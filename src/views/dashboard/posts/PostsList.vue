<template>
  <v-container>
    <v-btn color="primary" :to="{name: 'newPost'}">{{ $t("dashboard.providers.posts.create.title") }}</v-btn>
    <!-- TODO : Create a post -->
    <v-btn
        style="inset: 40px 40px auto auto; position: absolute"
        icon large
        color="primary"
        :to="{name: 'posts'}"
        :loading="reloading"
        @click.prevent="reloading = true; $store.dispatch('getProvidersPosts').then(() => reloading = false)"
    >
      <v-icon>mdi-refresh</v-icon>
    </v-btn>

    <br /><br />

    <h2>{{ $t("dashboard.providers.posts.listTitle") }}</h2>

    <br />

    <v-row align="center" style="margin-left: 20px">
      <v-item-group v-model="window" class="shrink mr-6" mandatory tag="v-flex">
        <v-btn icon @click="window = 0">
          <v-icon>mdi-arrow-collapse-up</v-icon>
        </v-btn>
        <v-item v-for="n in providersPosts.length" :key="n" v-slot="{ active, toggle }">
          <div>
            <v-btn :input-value="active" icon @click="toggle">
              <v-icon>mdi-record</v-icon>
            </v-btn>
          </div>
        </v-item>
        <v-btn icon @click="window = providersPosts.length - 1">
          <v-icon>mdi-arrow-collapse-down</v-icon>
        </v-btn>
      </v-item-group>

      <v-col>
        <v-window v-model="window" class="elevation-2" vertical>
          <v-window-item v-for="post in providersPosts" :key="post.id">
            <v-card>
              <v-card-title>
                <h3>{{ post.title }}</h3>
              </v-card-title>
              <v-card-subtitle>
                <p>{{ post.datetime }}</p>
              </v-card-subtitle>
              <v-card-text>
                <p>{{ post.content }}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success"
                  >{{ $t("dashboard.actions.edit") }}
                </v-btn>
                <!--                TODO : Edit a post -->
                <v-btn color="error"
                  >{{ $t("dashboard.actions.delete") }}
                </v-btn>
                <!--                TODO : Delete a post -->
              </v-card-actions>
            </v-card>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "PostsList",
  data() {
    return {
      window: 0,
      reloading: false,
    };
  },
  computed: mapState({
    providersPosts: state => state.posts.providersPosts,
  }),
  async mounted() {
    await this.$store.dispatch("getProvidersPosts")
  },
};
</script>
