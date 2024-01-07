<template>
  <div>
    <SideBar
      :links="navLinks"
    />
    <main>
      <router-view></router-view>
    </main>
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