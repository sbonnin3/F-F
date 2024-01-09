<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h3>{{ $t("dashboard.providers.posts.edit.title", {title}) }}</h3>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="title"
            :label="$t('dashboard.providers.posts.edit.titleInput')"
            filled
            shaped
          ></v-text-field>

          <v-textarea
            v-model="content"
            :label="$t('dashboard.providers.posts.edit.contentInput')"
            outlined
          ></v-textarea>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" text @click="$router.go(-1)"
          >{{ $t("dashboard.actions.cancel") }}
        </v-btn>
        <v-btn color="primary" @click.prevent="editPost"
          >{{ $t("dashboard.providers.posts.edit.submit") }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    postId: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    title: null,
    content: null,
    publishing: false,
  }),
  methods: {
    editPost() {
      this.publishing = true;
      this.$store
        .dispatch("editPost", {
          postId: this.postId,
          title: this.title,
          content: this.content,
        })
        .then(() => {
          this.publishing = false;
          this.$store.dispatch("getProviderPosts");
          this.$router.push({ name: "posts" });
        })
        .catch(() => {
          this.publishing = false;
        });
    },
  },
  async mounted() {
    console.log(this.$store.state.posts.providerPosts);
    const post = this.$store.state.posts.providerPosts.find(
        (post) => post._id === this.postId
    );
    if (!post) {
      await this.$router.go(-1);
    }
    this.title = post.title;
    this.content = post.content;
  },
};
</script>
