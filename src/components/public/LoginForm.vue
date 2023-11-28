<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center">
    <!-- Overlay Background -->
    <div class="absolute inset-0 bg-black opacity-50"></div>

    <!-- Login Form Pop-up -->
    <div class="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg shadow-lg z-10">
      <h2 class="text-xl font-bold text-gray-900 mb-4">Se connecter</h2>
      <form @submit.prevent="login" class="w-full">
        <div class="mb-4">
          <input type="email" placeholder="E-mail" v-model="username" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700">
        </div>
        <div class="mb-6">
          <input type="password" placeholder="Mot de passe" v-model="password" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3">
        </div>
        <div class="flex items-center justify-between">
          <button type="submit" class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">Connexion</button>
          <button @click.prevent="closePopup" class="text-black hover:text-yellow-600 font-semibold">Fermer</button>
        </div>
      </form>
    </div>
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
