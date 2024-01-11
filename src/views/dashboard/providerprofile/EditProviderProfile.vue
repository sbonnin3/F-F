<template>
  <v-container>
    <v-card
      :loading="isUpdating"
      class="mx-auto"
      color="blue-grey-darken-1"
      elevation="3"
      max-width="1000"
    >
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="green-lighten-3"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-card-title>
        <span class="headline">Edit Provider Profile</span>
      </v-card-title>

      <v-card-text>
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-row>
                  <v-col align="center" cols="12" md="3">
                    <v-img
                      :src="provider.logo"
                      height="150"
                      width="150"
                    ></v-img>
                  </v-col>
                  <v-col cols="12" md="9">
                    <v-text-field
                      v-model="provider.logo"
                      :disabled="isUpdating"
                      label="Provider Logo URL"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="provider.name"
                  :disabled="isUpdating"
                  filled
                  label="Provider Name"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="provider.category"
                  disabled
                  filled
                  label="Provider Category"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="provider.description"
                  label="Provider Description"
                  outlined
                ></v-textarea>
              </v-col>
              <v-col
                v-for="(link, id) of provider.profileLinks"
                :key="id"
                cols="4"
              >
                <v-card outlined>
                  <v-card-text>
                    <v-text-field
                      v-model="provider.profileLinks[id].name"
                      :disabled="isUpdating"
                      filled
                      label="Title"
                      shaped
                    ></v-text-field>
                    <v-text-field
                      v-model="provider.profileLinks[id].to"
                      :disabled="isUpdating"
                      label="URL"
                      outlined
                    ></v-text-field>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="error"
                      text
                      @click="provider.profileLinks.splice(id, 1)"
                    >
                      Remove Link
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
          :disabled="isUpdating"
          color="primary"
          @click="provider.profileLinks.push({ name: '', to: '' })"
        >
          Add Link to profile
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="isUpdating"
          color="error"
          @click="$router.push({ name: 'dashboard.ROLE_PROVIDER' })"
        >
          Cancel
        </v-btn>
        <v-btn
          :disabled="isUpdating"
          color="success"
          @click="updateProviderProfile"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import ProviderService from "@/services/from_datasets/providers.service";

export default {
  data: () => ({
    isUpdating: false,
  }),
  computed: {
    ...mapState({
      provider: (state) => state.auth.user.provider,
    }),
  },
  methods: {
    async updateProviderProfile() {
      this.isUpdating = true;
      console.log(this.provider);
      await ProviderService.updateProviderProfile(this.provider._id, this.provider);
      this.isUpdating = false;
    },
  },
};
</script>

<style scoped></style>
