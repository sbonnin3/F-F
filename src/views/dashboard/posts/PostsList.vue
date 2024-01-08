<template>
  <v-container>
    <v-btn color="primary">{{ $t("dashboard.providers.posts.create") }}</v-btn>
    <!--                TODO : Create a post -->

    <br /><br />

    <h2>{{ $t("dashboard.providers.posts.listTitle") }}</h2>

    <br />

    <v-row align="center" style="margin-left: 20px">
      <v-item-group v-model="window" class="shrink mr-6" mandatory tag="v-flex">
        <v-btn icon @click="window = 0">
          <v-icon>mdi-arrow-collapse-up</v-icon>
        </v-btn>
        <v-item v-for="n in posts.length" :key="n" v-slot="{ active, toggle }">
          <div>
            <v-btn :input-value="active" icon @click="toggle">
              <v-icon>mdi-record</v-icon>
            </v-btn>
          </div>
        </v-item>
        <v-btn icon @click="window = posts.length - 1">
          <v-icon>mdi-arrow-collapse-down</v-icon>
        </v-btn>
      </v-item-group>

      <v-col>
        <v-window v-model="window" class="elevation-2" vertical>
          <v-window-item v-for="post in posts" :key="post.id">
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
import Posts from "@/services/from_datasets/posts.service";

export default {
  name: "PostsList",
  data() {
    return {
      posts: [],
      window: 0,
    };
  },
  async mounted() {
    this.posts = await Posts.getPosts(this.$store.state.auth.user.providerId);
  },
};
</script>
