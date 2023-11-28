<template>
  <div v-if="show" class="login-popup">
  <div class="login-form">
      <h2>{{ $t('public.loginForms.login') }}</h2>
      <form @submit.prevent="login">
        <input type="email" :placeholder="$t('public.loginForms.email')" v-model="username" required>
        <input type="password" :placeholder="$t('public.loginForms.password')" v-model="password" required>
        <button type="submit">{{ $t('public.loginForms.loginSubmit')}}</button>
      </form>
      <button @click.prevent="closePopup">{{ $t('public.loginForms.closeWindow') }}</button>
    </div>
    <div class="background-overlay"></div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  props: ['show'],
  data() {
    return {
      username: '',
      password: '',
      showLoginPopup: true
    };
  },
  methods: {
    login() {
      // Logique de connexion
      console.log("Connexion avec:", this.username, this.password);
      const userRoles = {
        'admin@gmail.com': { password: 'admin', role: 'Admin' },
        'romain.montti@gmail.com': { password: 'pilote', role: 'Pilote' },
        'theo.goussot@gmail.com': { password: 'client', role: 'Client' },
        'puissancekart@gmail.com': { password: 'prestataire', role: 'Prestataire' }
      };

      const userData = userRoles[this.username];
      if (userData && userData.password === this.password) {
        console.log("Utilisateur trouvé")
        this.$emit('login-success', userData.role);
        Swal.fire({
          title: this.$t('public.loginForms.loginSuccess'),
          text: this.$t('public.loginForms.welcome', {name: this.username}),
          icon: 'success',
          confirmButtonText: this.$t('public.loginForms.closeWindow')
        }).then(() => {
          // Actions à effectuer après la fermeture de l'alerte
          // Par exemple, fermer le formulaire de connexion
          this.$emit('login-success', userData.role);
          localStorage.setItem('userRole', userData.role)
          this.closePopup();
        })
      } else {
        Swal.fire({
          title: this.$t('public.loginForms.loginErrorTitle'),
          text: this.$t('public.loginForms.loginError'),
          icon: 'error',
          confirmButtonText: this.$t('public.loginForms.closeWindow')
        }).then(() => {
          // Optionnel : Réinitialiser le mot de passe (et/ou l'e-mail)
          this.username = '';
          this.password = '';
          // Ne pas fermer la pop-up pour permettre à l'utilisateur de réessayer
        });
      }
    },
    closePopup(){
      this.$emit('close-form');
    }
  }
};
</script>

<style scoped>
.login-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.background-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.login-form {
  position: relative;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.login-form h2 {
  margin-bottom: 20px;
}

.login-form input {
  width: 95%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-form button {
  width: 100%;
  padding: 10px;
  border: none;
  background: blue;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
}
</style>
