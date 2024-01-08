<template>
  <div class="dashboard-container">
    <SideBar
      :links="navLinks"
    />
    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>
<script>
import SideBar from '@/components/dashboard/SideBar.vue'
import {mapState} from "vuex";
export default {
  name: 'DashboardTemplate',
  components: {
    SideBar
  },
  computed: {
    ...mapState(['navLinks'])
  }
}
</script>

<style scoped>
main {
  margin-left: 350px;
  margin-top: 0;
}
</style>