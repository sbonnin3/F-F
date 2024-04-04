<template>
  <v-container>
    <v-rating
        :value="rateAvg"
        readonly
        half-increments
    />
    <v-divider/>
    <br>
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
                small
                dense
                color="white"
                v-if="comment.rate"
            />
            "{{ comment.content }}"
          </v-card-text>

          <v-card-actions>
            <v-list-item>
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
            <v-spacer/>
            <v-btn icon @click="$store.dispatch('deleteReview', comment._id)">
              <v-icon>
                mdi-eye-off
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapState} from "vuex";

export default {
  computed: {
    ...mapState({
      comments: state => state.livredor.providerReviews
    }),
    rateAvg() {
      return this.comments.reduce((acc, comment) => acc + comment.rate, 0) / this.comments.length
    }
  },
  mounted() {
    this.$store.dispatch('getProviderReviews')
  }
};
</script>

<style scoped></style>
