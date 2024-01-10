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
          Plus d'information sur notre événement
        </h2>
      </div>

      <v-row class="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Left side: Text and button -->
        <v-col class="flex-1">
          <h2 class="text-4xl font-bold text-gray-800 mb-3">
            À propos du Grand Prix au Circuit Paul Ricard
          </h2>
          <p class="text-lg leading-relaxed text-gray-600">
            Le Grand Prix au Circuit Paul Ricard - un événement où la passion
            pour l'automobile et le désir de vivre des expériences uniques se
            rencontrent. Situé dans le sud de la France, le Circuit Paul Ricard
            est renommé pour sa piste impressionnante de 5,8 kilomètres, dotée
            de virages techniques et de longues lignes droites, offrant un
            terrain parfait pour les amateurs de vitesse. Notre événement
            s'adresse à tous : des passionnés de voitures classiques aux fans de
            technologie de pointe dans le sport automobile.
          </p>
          <v-btn class="mt-4" color="blue" dark @click="enSavoirPlus"
            >En savoir plus
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
            Notre Philosophie : Passion et Diversité
          </h2>
          <p class="text-lg leading-relaxed text-gray-600">
            La passion pour les voitures et le sport automobile est au cœur de
            notre événement. Nous croyons que chaque visiteur, qu'il soit un
            amateur ou un expert, mérite de vivre une expérience exceptionnelle.
            C'est pourquoi notre Grand Prix propose une variété d'activités - du
            karting au baptême de pilotage - pour que chacun puisse trouver son
            bonheur.
          </p>
        </v-col>
      </v-row>

      <!-- Section 3 -->
      <v-row class="mt-10 mb-10 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Left side: Text -->
        <v-col class="flex-1">
          <h2 class="text-4xl font-bold text-gray-800 mb-3">
            Une Journée Inoubliable Pour Tous
          </h2>
          <p class="text-lg leading-relaxed text-gray-600">
            Notre objectif est de créer une ambiance inoubliable, où le frisson
            de la vitesse se mêle à l'excitation de la compétition. Des courses
            époustouflantes, des activités interactives, et des moments de
            détente sont soigneusement planifiés pour garantir une expérience
            complète. Que vous veniez en famille, entre amis ou en solo, le
            Grand Prix au Circuit Paul Ricard est l'endroit idéal pour partager
            votre passion et créer des souvenirs mémorables.
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
