<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex md4 sm8 xs12>
        <v-card
            shaped
        >
          <v-card-title>
            <h1 class="title">
              {{ $t('public.loginForms.login') }}
            </h1>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" @submit.prevent="login">
              <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  :label="$t('public.loginForms.email')"
                  outlined
              ></v-text-field>
              <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  :label="$t('public.loginForms.password')"
                  outlined
              ></v-text-field>
              <v-btn
                  :loading="loading"
                  color="primary"
                  type="submit"
              >
              {{ $t('public.loginForms.loginSubmit') }}
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
  name: 'Login',
  data() {
    return {
      email: '',
      emailRules: [
        (v) => !!v || this.$t('public.loginForms.required', { field: this.$t('public.loginForms.email') }),
        (v) => /.+@.+\..+/.test(v) || this.$t('public.loginForms.invalid', { field: this.$t('public.loginForms.email') }),
      ],
      password: '',
      passwordRules: [
        (v) => !!v || this.$t('public.loginForms.required', { field: this.$t('public.loginForms.password') }),
      ],
      showPassword: false,
      loading: false,
    };
  },
  methods: {
    login() {
      this.$refs.form.validate();
      this.loading = true;
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      })
          .then(() => {
            this.loading = false;
            if (this.$store.state.auth.user) {
              switch (this.$store.state.auth.user.role) {
                case 'ROLE_ADMIN':
                  this.$router.push('/dashboard');
                  break;
                case 'ROLE_PROVIDER':
                  this.$router.push('/dashboard');
                  break;
                default:
                  this.$router.push('/');
              }
            }
          })
          .catch((error) => {
            this.loading = false;
            console.error(error);
          });
    },
  },
}

</script>
