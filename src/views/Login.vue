<template>
    <div class="content">
      <h1>Connexion</h1>
      <form @submit.prevent="login">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required>
        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model="password" required>
        <button type="submit">Se connecter</button>
      </form>
    </div>
</template>
  
<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Login',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        this.$store.dispatch('login', {
          email: this.email,
          password: this.password,
        })
          .then(() => {
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
            console.error(error);
          });
      },
    },
  }

</script>
  