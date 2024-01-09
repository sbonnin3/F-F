<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h3>{{ $t("dashboard.providers.posts.create.title") }}</h3>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field filled shaped :label="$t('dashboard.providers.posts.create.titleInput')" v-model="title"></v-text-field>

          <v-textarea outlined :label="$t('dashboard.providers.posts.create.contentInput')" v-model="content"></v-textarea>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" text @click="$router.go(-1)">{{ $t("dashboard.actions.cancel") }}</v-btn>
        <v-btn color="primary" @click.prevent="publishPost">{{ $t("dashboard.providers.posts.create.submit") }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: null,
    content: null,
    publishing: false
  }),
  methods: {
    publishPost() {
      this.publishing = true;
      this.$store
        .dispatch("createPost", {
          providerId: this.$store.state.auth.user.providerId,
          title: this.title,
          content: this.content
        })
        .then(() => {
          this.publishing = false;
          this.$store.dispatch("getProviderPosts")
          this.$router.push({ name: "posts" });
        })
        .catch(() => {
          this.publishing = false;
        });
    }
  }
};
</script>

