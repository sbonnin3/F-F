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

<style>
  /* Reset du style par défaut et ajout de styles de base */
  body, h1, h2, h3, p, ul, li {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
  }


  /* Material Symbols */
  @font-face {
    font-family: 'Material Symbols';
    font-style: normal;
    font-weight: 400;
    src: url(@/assets/fonts/MaterialSymbolsRounded.woff2) format('woff2');
  }

  .material-symbols {
  font-family: 'Material Symbols';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
}
</style>
