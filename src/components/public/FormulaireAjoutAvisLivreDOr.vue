<template>
  <v-container>
    <v-btn v-if="!isFormOpen" @click="isFormOpen = !isFormOpen">
      <v-icon>mdi-plus</v-icon>
      Ajouter un avis
    </v-btn>
    <v-card
      v-if="isFormOpen"
      :loading="isPublishing"
      max-width="1000px"
      style="margin: auto"
    >
      <v-card-title>
        <h3>Ajouter un avis</h3>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="title"
                dense
                filled
                label="Your name"
                shaped
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="author"
                dense
                filled
                label="Title"
                shaped
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="content"
                dense
                label="Content"
                outlined
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="publishComment">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import LivreDOrService from "@/services/from_datasets/livredor.service";

export default {
  props: {
    providerId: {
      required: true,
    },
  },
  data() {
    return {
      isFormOpen: false,
      isPublishing: false,
      title: null,
      author: null,
      content: null,
    };
  },
  methods: {
    async publishComment() {
      this.isPublishing = true;
      const comment = {
        title: this.title,
        author: this.author,
        content: this.content,
      };
      LivreDOrService.addComment(this.providerId, comment).then(() => {
        this.isPublishing = false;
        this.isFormOpen = false;
        this.$emit("comment-published", comment);
      });
    },
  },
};
</script>
