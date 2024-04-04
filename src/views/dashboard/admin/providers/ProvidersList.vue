<template>
  <v-container>
    <v-data-table
        :headers="headers"
        :items="providers"
        :items-per-page="10"
        class="elevation-1"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon class="mr-2" small @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
    </v-data-table>
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h6">Vous êtes sûr de vouloir supprimé ce provider ?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="editDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" md="6" sm="6">
                <v-text-field v-model="editedItem.name" label="Nom du prestataire"></v-text-field>
              </v-col>
              <v-col cols="12" md="6" sm="6">
                <v-text-field v-model="editedItem.category" label="Categorie"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea v-model="editedItem.description" label="Description"></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="editedItem.logo" label="URL du logo"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select
                    label="Nom réseau social"
                    v-model="selectedSN"
                    :items="listSocialLinks"
                    item-text="name"
                    item-value="name"
                    return-object
                    @change="onSocialNetworkChange"
                ></v-select>
                <v-text-field v-model="selectedSNLink" label="Lien du profil"></v-text-field>
              </v-col>
              <v-col cols="12">
                <div class="text-h6">Services disponibles</div>
              </v-col>
              <v-col cols="12" v-for="service in services" :key="service.id" class="my-0 py-0">
                <v-checkbox :label="service.name" v-model="serviceStates[service.nameOfService]"
                            class="my-0 py-0"></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'ProvidersList',
  data: () => ({
    selectedSN: '',
    editDialog: false,
    dialogDelete: false,
    selectedSNLink: '',
    editedIndex: -1,
    headers: [
      {text: 'Nom', value: 'name'},
      {text: 'Catégorie', value: 'category'},
      {text: 'Actions', value: 'actions', sortable: false}
    ],
    editedItem: {
      name: '',
      category: '',
      description: '',
      logo: '',
      profileLinks: '{}',
      services: '{}'
    },
    services: [
      {name: "Livre d'or", id: "1", nameOfService:"livredor"},
      {name: "Postes", id: "2", nameOfService:"posts"},
      {name: "Emplacement sur carte", id: "3",nameOfService: "mapPlacement"},
      {name: "Billetterie", id: "4", nameOfService: "ticketing"},
    ],
    serviceStates: {
      posts: false,
      ticketing: false,
      goodies: false,
      mapPlacement: false,
      livredor: false,
    },
  }),
  computed: mapState({
    providers: state => state.providers.providers,
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Modifié un prestataire'
    },
    listSocialLinks() {
      let listSocialLinks = []
      for (var i = 0 ; i < this.editedItem.profileLinks.length ; i++) {
        let obj = {}
        obj["name"] = this.editedItem.profileLinks[i].name
        obj["to"] = this.editedItem.profileLinks[i].to
        listSocialLinks.push(obj)
       }
      console.log("Tab",listSocialLinks)
      return listSocialLinks
    },
  }),
  methods: {
    editItem(item) {
      this.editedIndex = this.providers.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.editDialog = true
      this.initializeServiceStates();
    },
    deleteItem(item) {
      console.log(item)
      this.editedIndex = this.providers.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    closeDelete() {
      this.dialogDelete = false
    },
    deleteItemConfirm() {
      this.$store.dispatch('deleteProvider', this.editedItem._id)
      this.closeDelete()
    },
    close() {
      this.editDialog = false
    },
    onSocialNetworkChange(selectedItem) {
      this.selectedSNLink = selectedItem ? selectedItem.to : '';
    },
    test() {
      const services = Object.entries(this.editedItem.services).map(([key, value]) => {
        return { nameOfService: key, enable: value };
      });
      console.log("Services:", services);
      return services;
    },
    initializeServiceStates() {
      this.serviceStates = {};

      const serviceObj = this.editedItem.services && typeof this.editedItem.services === 'object'
          ? this.editedItem.services
          : JSON.parse(this.editedItem.services || '{}');

      Object.keys(serviceObj).forEach((key) => {
        // Assigner la valeur de chaque clé dans `serviceObj` à `serviceStates`
        this.serviceStates[key] = serviceObj[key];
      });

      this.services.forEach((service) => {
        if (!(service.nameOfService in this.serviceStates)) {
          this.serviceStates[service.nameOfService] = false;
        }
      });
    },
    save() {
      if (this.selectedSN && this.selectedSNLink) {
        const existingLinkIndex = this.editedItem.profileLinks.findIndex(link => link.name === this.selectedSN.name);
        if (existingLinkIndex !== -1) {
          this.editedItem.profileLinks[existingLinkIndex].to = this.selectedSNLink;
        } else {
          this.editedItem.profileLinks.push({
            name: this.selectedSN.name,
            to: this.selectedSNLink,
          });
        }
      }
      this.editedItem.services = { ...this.serviceStates };
      console.log("Saving provider:", this.editedItem);
      // APPEL API
      this.$store.dispatch('updateProviderProfile', this.editedItem)
      this.editDialog = false
      window.location.reload();
    },
  },
  async mounted() {
    await this.$store.dispatch('getProviders')
    console.log("Mounted log",this.editedItem.services);
    this.initializeServiceStates();
  }

}

</script>