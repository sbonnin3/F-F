<template>
  <div class="content">
    <SearchProvider />
    <router-view></router-view>
  </div>
</template>

<script>
import SearchProvider from "@/components/public/SearchProvider.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Prestataire",
  components: { SearchProvider },
};
</script>
