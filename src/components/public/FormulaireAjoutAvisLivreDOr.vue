<template>
  <v-container>
    <v-btn v-if="!isFormOpen" @click="isFormOpen = !isFormOpen">
      <v-icon>mdi-plus</v-icon>
      {{ $t('public.commentsForm.ajouter-un-avis') }}
    </v-btn>
    <v-card
        v-if="isFormOpen"
        :loading="isPublishing"
        max-width="1000px"
        style="margin: auto"
    >
      <v-card-title>
        <h3>{{ $t('public.commentsForm.ajouter-un-avis') }}</h3>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                  v-model="author"
                  dense
                  filled
                  :label="$t('public.commentsForm.your-name')"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="text-center">
              <v-rating
                  v-model="rating"
                  hover
                  large
              />
            </v-col>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  {{ $t('public.commentsForm.addAMessage') }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-col cols="12">
                    <v-text-field
                        v-model="title"
                        dense
                        filled
                        :label="$t('public.commentsForm.titleInput')"
                        shaped
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                        v-model="content"
                        dense
                        :label="$t('public.commentsForm.contentInput')"
                        outlined
                    ></v-textarea>
                  </v-col>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="publishComment">{{ $t('public.commentsForm.submit') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import LivreDOrService from "@/services/from_api/livredor.service";

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
      rating: null,
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
        rate: this.rating,
        content: this.content,
        author: this.author
      };
      LivreDOrService.addComment(this.providerId, comment).then((result) => {
        this.isPublishing = false;
        this.isFormOpen = false;
        this.$emit("comment-published", result);
      });
    },
  },
};
</script>
