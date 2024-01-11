<template>
  <v-container>
    <v-autocomplete
      v-model="seletedProvider"
      :items="providers"
      :label="$t('public.providers.searchAccroche')"
      :loading="loading"
      filled
      item-text="name"
      item-value="_id"
      shaped
    ></v-autocomplete>
  </v-container>
</template>

<script>
import { getProviders } from "@/services/from_datasets/providers.service";

export default {
  name: "SearchProvider",
  data() {
    return {
      seletedProvider: Number(this.$route.params.id) || null,
      providers: [],
      loading: false,
    };
  },
  async mounted() {
    this.loading = true;
    getProviders().then((providers) => {
      this.providers = providers;
      this.loading = false;
    });
  },
  watch: {
    seletedProvider(newVal) {
      if (newVal) {
        this.$router
          .push({ name: "provider", params: { id: newVal } })
          .catch(() => {});
      }
    },
  },
};
</script>
