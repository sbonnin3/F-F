<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex md4 sm8 xs12>
        <v-card
            shaped
        >
          <v-card-title>
            <h1 class="title">
              Login
            </h1>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" @submit.prevent="login">
              <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Email"
                  outlined
              ></v-text-field>
              <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  label="Password"
                  outlined
              ></v-text-field>
              <v-btn
                  :loading="loading"
                  color="primary"
                  type="submit"
              >
                Login
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
        (v) => !!v || 'Email is required',
        (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
      ],
      password: '',
      passwordRules: [
        (v) => !!v || 'Password is required',
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
            if (this.$store.state.user) {
              switch (this.$store.state.user.role) {
                case 'ROLE_ADMIN':
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
  