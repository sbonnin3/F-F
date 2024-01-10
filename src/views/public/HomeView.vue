<template class="page">
  <div class="content">
    <div class="background">
      <div class="titre-ff">
        <span class="display-2 font-weight-bold"> FAST & FABULOUS </span>
        <br />
        <span class="display-1">{{ $t("public.home.header") }}</span>
      </div>
    </div>

    <v-container>
      <div class="titre text-center mt-12 mb-10">
        <h2 class="display-1">{{ $t("public.home.secondHeader") }}</h2>
      </div>
      <v-container>
        <p class="body-1">
          {{ $t("public.home.leCircuitPaulRicardEstRaviDaccueillir") }}
        </p>
      </v-container>

      <div class="titre text-center mt-12 mb-10">
        <h2
          class="display-1"
        >
          {{ $t("public.home.pointsForts.header") }}
        </h2>
      </div>
      <v-container>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <template v-slot:actions>
                <v-icon color="error"> mdi-star-four-points</v-icon>
              </template>
              {{ $t("public.home.pointsForts.grandPrixTitle") }}
            </v-expansion-panel-header>
            <template v-slot:actions>
              <v-icon color="error"> mdi-star-four-points</v-icon>
            </template>
            <v-expansion-panel-content
              >{{ $t("public.home.pointsForts.grandPrix") }}
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              <template v-slot:actions>
                <v-icon color="error"> mdi-star-four-points</v-icon>
              </template>
              {{ $t("public.home.pointsForts.kartingForAllTitle") }}
            </v-expansion-panel-header>
            <template v-slot:actions>
              <v-icon color="error"> mdi-star-four-points</v-icon>
            </template>
            <v-expansion-panel-content
              >{{ $t("public.home.pointsForts.kartingForAll") }}
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              <template v-slot:actions>
                <v-icon color="error"> mdi-star-four-points</v-icon>
              </template>
              {{ $t("public.home.pointsForts.batemeTitle") }}
            </v-expansion-panel-header>
            <template v-slot:actions>
              <v-icon color="error"> mdi-star-four-points</v-icon>
            </template>
            <v-expansion-panel-content
              >{{ $t("public.home.pointsForts.bateme") }}
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              <template v-slot:actions>
                <v-icon color="error"> mdi-star-four-points</v-icon>
              </template>
              {{ $t("public.home.pointsForts.animationsTitle") }}
            </v-expansion-panel-header>
            <template v-slot:actions>
              <v-icon color="error"> mdi-star-four-points</v-icon>
            </template>
            <v-expansion-panel-content
              >{{ $t("public.home.pointsForts.animations") }}
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <template v-slot:actions>
                <v-icon color="error"> mdi-star-four-points</v-icon>
              </template>
              {{ $t("public.home.pointsForts.restaurationTitle") }}
            </v-expansion-panel-header>
            <template v-slot:actions>
              <v-icon color="error"> mdi-star-four-points</v-icon>
            </template>
            <v-expansion-panel-content
              >{{ $t("public.home.pointsForts.restauration") }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>

      <p class="text-center body-1">
        {{ $t("public.home.endOfPage") }}
      </p>
    </v-container>
    <v-container>
      <!-- Section 1 -->
      <div class="titre text-center mt-12 mb-10">
        <h2
          class="display-1"
        >
          {{ $t('public.home.more-info') }}
        </h2>
      </div>

      <v-row class="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Left side: Text and button -->
        <v-col class="flex-1">
          <h2 class="text-4xl font-bold text-gray-800 mb-3">
            {{ $t('public.home.about-gp-paul-ricard') }}
          </h2>
          <p class="text-lg leading-relaxed text-gray-600">
            {{ $t('public.home.about-gp-paul-ricard-long') }}
          </p>
          <v-btn class="mt-4" color="blue" dark @click="enSavoirPlus"
            >{{ $t('public.home.en-savoir-plus') }}
          </v-btn>
        </v-col>

        <!-- Right side: Image -->
        <v-col class="flex-1">
          <img
            alt="Circuit Paul Ricard"
            class="rounded shadow-lg"
            src="@/assets/images/dessus_paul_ricard.jpg"
          />
        </v-col>
      </v-row>

      <!-- Section 2 -->
      <v-row class="mt-10 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Left side: Image -->
        <v-col class="flex-1">
          <img
            alt="Circuit Paul Ricard"
            class="rounded shadow-lg"
            src="@/assets/images/voitures.webp"
          />
        </v-col>

        <!-- Right side: Text -->
        <v-col class="flex-1">
          <h2 class="text-4xl font-bold text-gray-800 mb-3">
            {{ $t('public.home.our-philosophy') }}
          </h2>
          <p class="text-lg leading-relaxed text-gray-600">
            {{ $t('public.home.our-philosophy-long') }}
          </p>
        </v-col>
      </v-row>

      <!-- Section 3 -->
      <v-row class="mt-10 mb-10 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Left side: Text -->
        <v-col class="flex-1">
          <h2 class="text-4xl font-bold text-gray-800 mb-3">
            {{ $t('public.home.a-day') }}
          </h2>
          <p class="text-lg leading-relaxed text-gray-600">
            {{ $t('public.home.a-day-long') }}
          </p>
        </v-col>

        <!-- Right side: Image -->
        <v-col class="flex-1">
          <img
            alt="Circuit Paul Ricard"
            class="rounded shadow-lg"
            src="@/assets/images/photo3.png"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
body {
  margin: 0;
}

.titre-ff {
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
}

.background {
  position: relative;
  height: calc(100dvh - 90px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/images/84328.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
