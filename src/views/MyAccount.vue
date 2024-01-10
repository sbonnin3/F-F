<template>
  <v-container>
    <v-card
      :loading="isUpdating"
      class="mx-auto"
      color="blue-grey-darken-1"
      max-width="600"
    >
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="green-lighten-3"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img cover height="200" src="https://picsum.photos/1800/1100"></v-img>

      <v-form>
        <v-container>
          <v-row dense>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="user.firstname"
                :disabled="isUpdating"
                :label="$t('public.accountForms.firstname')"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="user.lastname"
                :disabled="isUpdating"
                :label="$t('public.accountForms.lastname')"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="user.email"
                :disabled="isUpdating"
                :label="$t('public.accountForms.email-address')"
                type="email"
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field
                v-model="user.role"
                disabled
                :label="$t('public.accountForms.role')"
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-select
                v-model="$i18n.locale"
                :items="$i18n.availableLocales"
                :label="$t('public.accountForms.user-default-language')"
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
      </v-form>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn :loading="isUpdating" color="green" text @click="updateAccount"
          >{{ $t('public.accountForms.submit') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isUpdating: false,
      user: {},
    };
  },
  mounted() {
    this.user = this.$store.state.auth.user;
  },
  methods: {
    async updateAccount() {
      this.isUpdating = true;
      if (confirm(this.$t('public.accountForms.are-you-sure'))) {
        await this.$store.dispatch("updateAccount", this.user);
      }
      this.isUpdating = false;
    },
  },
};
</script>
