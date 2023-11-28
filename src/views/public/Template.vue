<template>
  <div>
    <PublicNav :links="publicNavLinks" :userRole="userRole" @open-login-form="showLogin" @confirm-logout="confirmLogout"/>
    <LoginForm :show="showLoginForm" @close-form="closeLoginForm" @login-success="handleLogin" />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import PublicNav from "@/components/public/NavBar.vue";
import LoginForm from "@/components/public/LoginForm.vue";
import Swal from "sweetalert2";

export default {
  created() {
    const savedUserRole = localStorage.getItem('userRole');
    if (savedUserRole) {
      this.userRole = savedUserRole; // Restaurez l'état de connexion à partir de LocalStorage
    }
  },

  name: "PublicTemplate",
  components: {
    LoginForm,
    PublicNav,
  },

  methods: {
    showLogin() {
      this.showLoginForm = true;
    },
    closeLoginForm() {
      this.showLoginForm = false;
    },
    handleLogin(role) {
      this.userRole = role;
    },
    confirmLogout() {
      Swal.fire({
        title: this.$t('public.loginForms.logoutAsk'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: this.$t('public.loginForms.logoutConfirm'),
        cancelButtonText: this.$t('public.loginForms.closeWindow')
      }).then((result) => {
        if (result.isConfirmed) {
          this.logout();
        }
      });
    },
    logout() {
      this.userRole = null; // Réinitialiser l'état de userRole
      localStorage.removeItem('userRole'); // Supprimer le rôle de l'utilisateur de LocalStorage
    }
  },

  data() {
    return {
      showLoginForm: false,
      userRole: null,

      publicNavLinks: [
        {
          title: "public.navigation.home",
          to: { name: "home" },
          exact: true
        },
        {
          title: "public.navigation.about",
          to: { name: "about" },
        },
        {
            title: "public.navigation.map",
            to: { name: "map" },
        },
        {
          title: "public.navigation.activities",
          to: { name: "activities" },
        },
        {
          title: "public.navigation.planning",
          to: { name: "planning" },
        },
        {
          title: "public.navigation.providers",
          to: { name: "providers" },
        },
      ],
    };
  },
};
</script>

<style lang="scss">
main {
  /* To avoid the navbar to hide the content */
  margin-top: 90px;

  .container {
    padding: 0 5%;

    @media screen and (max-width: 768px) {
      padding: 0;
    }
  }
}
</style>
