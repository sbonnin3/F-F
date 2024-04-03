<template>
  <v-container>
    <v-row>
      <v-col v-for="(comment, id) of comments" :key="id" cols="12" md="6" xl="4">
        <v-card class="mx-auto" color="#A83532" dark>
          <v-card-title>
            <v-icon large left>mdi-book</v-icon>
            <span class="text-h6 font-weight-light">{{ comment.title }}</span>
          </v-card-title>

          <v-card-text class="text-h5 font-weight-bold">
            <v-rating
                :value="comment.rate"
                readonly
                color="white"
                v-if="comment.rate"
            />
            "{{ comment.content }}"
          </v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar>
                <v-img
                    alt=""
                    class="elevation-6"
                    src="https://avataaars.io/?accessoriesType=Kurt&avatarStyle=Transparent&clotheColor=Blue01&clotheType=Hoodie&eyeType=Surprised&eyebrowType=AngryNatural&facialHairColor=Black&facialHairType=Blank&graphicType=Cumbia&hairColor=BlondeGolden&hatColor=Pink&mouthType=Eating&skinColor=Brown&topType=ShortHairShaggyMullet"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{ comment.author }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {getComments} from "@/services/from_api/livredor.service";

export default {
  data() {
    return {
      comments: [],
    };
  },
  computed: {
    commentsStats() {
      const rates = []
      this.comments.forEach((comment) => {
        if(comment.rate) rates.push(comment.rate)
      })
      return {

      }
    }
  },
  async mounted() {
    this.comments = await getComments(this.$store.state.auth.user.providerId);
  },
  methods: {
  }
};
</script>

<style scoped></style>
