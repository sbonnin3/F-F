<template>
    <div>
        <PublicNav />
        <router-view></router-view>
    </div>
</template>

<script>
import PublicNav from "@/components/public/NavBar.vue";

export default {
    name: "PublicTemplate",
    components: { PublicNav }
}
</script>