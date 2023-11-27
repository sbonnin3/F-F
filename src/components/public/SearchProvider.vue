<template>
  <div class="content">
    <select v-model="seletedProvider">
      <option
        v-for="provider in providers"
        :key="provider.id"
        :value="provider.id"
      >
        {{ provider.name }}
      </option>
    </select>
  </div>
</template>

<script>
import { getProviders } from "@/services/from_datasets/providers.service";

export default {
  name: "SearchProvider",
  data() {
    return {
      seletedProvider: this.$route.params.id || null,
      providers: getProviders() || [],
    };
  },
  watch: {
    seletedProvider(newVal) {
      this.$router.push({ name: "provider", params: { id: newVal } });
    },
  },
};
</script>

<style scoped lang="scss">
.content {
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: firebrick;
    select {
      width: 100%;
      max-width: 400px;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
      font-size: 1.2rem;
      outline: none;
    }
}
</style>