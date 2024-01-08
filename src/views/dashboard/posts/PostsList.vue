<template>
  <v-container>
    <v-btn :to="{ name: 'newPost' }" color="primary"
      >{{ $t("dashboard.providers.posts.create") }}
    </v-btn>

    <br /><br />

    <h2>{{ $t("dashboard.providers.posts.listTitle") }}</h2>

    <v-row>
      <v-col v-for="post in posts" :key="post.id" cols="6">
        <v-card>
          <v-card-title>
            <h3>{{ post.title }}</h3>
          </v-card-title>
          <v-card-text>
            <p>{{ post.content }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :to="{ name: 'editPost', params: { id: post._id } }"
              color="primary"
              >{{ $t("dashboard.actions.edit") }}
              <!--                   TODO : Make editPost                   -->

            </v-btn>
            <v-btn color="error" @click="deletePost(post._id)"
              >{{ $t("dashboard.actions.delete") }}
              <!--                   TODO : Make deletePost(id)                   -->
            </v-btn>
          </v-card-actions>
        </v-card>
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
    };
  },
  async mounted() {
    this.posts = await Posts.getPosts(this.$store.state.auth.user.providerId);
  },
};
</script>
