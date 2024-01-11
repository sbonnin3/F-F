<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex md4 sm8 xs12>
        <v-card shaped>
          <v-card-title>
            <h1 class="title">
              {{ $t("public.loginForms.login") }}
            </h1>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" @submit.prevent="login">
              <v-text-field
                v-model="email"
                :label="$t('public.loginForms.email')"
                :rules="emailRules"
                outlined
              ></v-text-field>
              <v-text-field
                v-model="password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :label="$t('public.loginForms.password')"
                :rules="passwordRules"
                :type="showPassword ? 'text' : 'password'"
                outlined
                @click:append="showPassword = !showPassword"
              ></v-text-field>
              <v-btn :loading="loading" color="primary" type="submit">
                {{ $t("public.loginForms.loginSubmit") }}
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-alert
      outlined
      shaped
      style="position: absolute; top: 10px; right: 10px; min-width: 500px"
      type="error"
    >
      <span class="font-weight-bold">Comptes pour se connecter :</span>
      <v-divider></v-divider>
      <span>
        ROLE_ADMIN <br />
        admin@fastnfabulous.com - admin
      </span>
      <v-divider></v-divider>
      <span>
        ROLE_PROVIDER <br />
        jdoe@provider.com - jdoe
      </span>
      <v-divider></v-divider>
    </v-alert>
  </v-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      email: "",
      emailRules: [
        (v) =>
          !!v ||
          this.$t("public.loginForms.required", {
            field: this.$t("public.loginForms.email"),
          }),
        (v) =>
          /.+@.+\..+/.test(v) ||
          this.$t("public.loginForms.invalid", {
            field: this.$t("public.loginForms.email"),
          }),
      ],
      password: "",
      passwordRules: [
        (v) =>
          !!v ||
          this.$t("public.loginForms.required", {
            field: this.$t("public.loginForms.password"),
          }),
      ],
      showPassword: false,
      loading: false,
    };
  },
  methods: {
    login() {
      this.$refs.form.validate();
      this.loading = true;
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.loading = false;
          if (this.$store.state.auth.user) {
            switch (this.$store.state.auth.user.role) {
              case "ROLE_ADMIN":
                this.$router.push({ name: "dashboard.ROLE_ADMIN" });
                break;
              case "ROLE_PROVIDER":
                this.$router.push({ name: "dashboard.ROLE_PROVIDER" });
                break;
              default:
                this.$router.push("/");
            }
          }
        })
        .catch((error) => {
          this.loading = false;
          console.error(error);
        });
    },
  },
};
</script>
