<template>
  <v-container>
    <label for="provider-select">{{ $t('public.providers.searchAccroche') }}</label>
    <v-autocomplete
        v-model="seletedProvider"
        :items="providers"
        item-text="name"
        item-value="_id"
        label="Search"
        :loading="loading"
    ></v-autocomplete>
  </v-container>
</template>

<script>
import {getProviders} from "@/services/from_datasets/providers.service";

export default {
  name: "SearchProvider",
  data() {
    return {
      seletedProvider: this.$route.params.id || null,
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
        this.$router.push({name: "provider", params: {id: newVal}}).catch(() => {
        });
      }
    },
  },
};
</script>