<template>
  <div class="content">
    <label for="provider-select">{{ $t('public.providers.searchAccroche') }}</label>
    <select v-model="seletedProvider" id="provider-select">
      <option
          v-for="provider in providers"
          :key="provider._id"
          :value="provider._id"
      >
        {{ provider.name }}
      </option>
    </select>
  </div>
</template>

<script>
import {getProviders} from "@/services/from_datasets/providers.service";

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
      this.$router.push({name: "provider", params: {id: newVal}});
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: firebrick;
  gap: 20px;

  label {
    color: white;
    font-weight: bold;
  }

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