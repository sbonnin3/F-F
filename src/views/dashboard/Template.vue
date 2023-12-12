<template>
  <div>
    <SideBar
      :links="links"
    />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import SideBar from '@/components/dashboard/SideBar.vue'
export default {
  name: 'DashboardTemplate',
  components: {
    SideBar
  },
  data() {
    return {
      links: [
        { title: "dashboard.navigation.dashboard", to: { name: "dashboard" }, icon: "dashboard" },
        { title: "dashboard.navigation.stats", to: { name: "fre" }, icon: "monitoring" },
        { title: "dashboard.navigation.notifications", to: { name: "fre" } },
        { title: "dashboard.navigation.myAccount", to: { name: "fre" } }
      ]
    }
  }
}
</script>