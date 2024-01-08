<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex md4 sm8 xs12>
        <v-card
            shaped
        >
          <v-card-title>
            <h1 class="title">
              Logout
            </h1>
          </v-card-title>
          <v-card-text>
            <v-form>
              <p class="display-3 blue--text">{{ $store.state.auth.user.firstname }} {{ $store.state.auth.user.lastname }}</p>
              <p>{{ $store.state.auth.user.email }}</p>
              <v-btn
                  text
                  type="button"
                  @click="$router.go(-1)"
              >
                Cancel
              </v-btn>
              <v-btn
                  :loading="loading"
                  color="primary"
                  type="button"
                  @click="logout"
              >
                Ok, Logout
              </v-btn>

            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Logout",
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    logout() {
      this.loading = true;
      this.$store.dispatch("logout").then(() => {
        this.loading = false;
        this.$router.push({name: "home"});
      });
    },
  },
};
</script>
