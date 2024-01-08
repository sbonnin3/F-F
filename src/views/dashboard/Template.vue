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
.dashboard-container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}
</style>