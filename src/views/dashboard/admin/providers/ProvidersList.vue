<template>
  <v-container>
    <v-btn class="mb-4" color="yellow darken-1" rounded @click="addPresta2">
      Ajouté un prestataire
    </v-btn>

    <!-- Tableau des prestataires -->
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
    <!-- Fin tableau des prestataires -->

    <!-- Dialog pour ajouté un prestataire -->
    <v-dialog v-model="dialogAdd" max-width="500px">
      <v-card>
        <v-card-title class="text-h6">Ajouté un prestataire</v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" md="6" sm="6">
                <v-text-field v-model="addItem.name" label="Nom du prestataire"></v-text-field>
              </v-col>
              <v-col cols="12" md="6" sm="6">
                <v-text-field v-model="addItem.category" label="Categorie"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea v-model="addItem.description" label="Description"></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="addItem.logo" label="URL du logo"></v-text-field>
              </v-col>
              <v-col cols="12">
                <div class="text-h6">Réseaux sociaux</div>
              </v-col>
              <v-col v-for="sn in socialNetwork" :key="sn.name" class="my-0 py-0" cols="12">
                <v-checkbox v-model="sn.checked" :label="sn.name" class="my-0 py-0"></v-checkbox>
              </v-col>
              <v-col cols="12">
                <div class="text-h6">Services disponibles</div>
              </v-col>
              <v-col v-for="service in services" :key="service.id" class="my-0 py-0" cols="12">
                <v-checkbox v-model="serviceStates[service.nameOfService]" :label="service.name"
                            class="my-0 py-0"></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeAddPresta">Annulé</v-btn>
          <v-btn color="blue darken-1" text @click="savePresta">Ajouté</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Fin dialog pour ajouté un prestataire -->

    <!-- Dialog pour ajouté un utilisateur -->
    <v-dialog v-model="dialogAddUser" max-width="500px">
      <v-card>
        <v-card-title class="text-h6">Ajouté un utilisateur</v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" md="6" sm="6">
                <v-text-field v-model="addUser.firstname" label="Prénom"></v-text-field>
              </v-col>
              <v-col cols="12" md="6" sm="6">
                <v-text-field v-model="addUser.lastname" label="Nom"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="addUser.email" label="Email"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="addUser.password" label="Mot de passe"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select
                    v-model="addUser.providerId"
                    :items="providers"
                    item-text="name"
                    item-value="_id"
                    label="Prestataire"
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeAddUser">Annulé</v-btn>
          <v-btn color="blue darken-1" text @click="saveUser">Ajouté</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Fin dialog pour ajouté un utilisateur -->

    <!-- Dialog pour supprimer un prestataire -->
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h6">Vous êtes sûr de vouloir supprimé ce provider ?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Annulé</v-btn>
          <v-btn color="blue darken-1" text @click="deleteItemConfirm">Ok</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Fin dialog pour supprimer un prestataire -->

    <!-- Dialog pour modifier un prestataire -->
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
                    v-model="selectedSN"
                    :items="listSocialLinks"
                    item-text="name"
                    item-value="name"
                    label="Nom réseau social"
                    return-object
                    @change="onSocialNetworkChange"
                ></v-select>
                <v-text-field v-model="selectedSNLink" label="Lien du profil"></v-text-field>
              </v-col>
              <v-col cols="12">
                <div class="text-h6">Services disponibles</div>
              </v-col>
              <v-col v-for="service in services" :key="service.id" class="my-0 py-0" cols="12">
                <v-checkbox v-model="serviceStates[service.nameOfService]" :label="service.name"
                            class="my-0 py-0"></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">Annulé</v-btn>
          <v-btn color="blue darken-1" text @click="save">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Fin dialog pour modifier un prestataire -->

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
    dialogAdd: false,
    dialogAddUser: false,
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
    addItem: {
      name: '',
      category: '',
      description: '',
      logo: '',
      profileLinks: '{}',
      services: '{}',
      objet: "NULL"
    },
    addUser: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      role: 'ROLE_PROVIDER',
      providerId: ''
    },
    services: [
      {name: "Livre d'or", id: "1", nameOfService: "livredor"},
      {name: "Postes", id: "2", nameOfService: "posts"},
      {name: "Emplacement sur carte", id: "3", nameOfService: "mapPlacement"},
      {name: "Billetterie", id: "4", nameOfService: "ticketing"},
    ],
    socialNetwork: [
      {name: "Facebook", to: ""},
      {name: "Instagram", to: ""},
      {name: "Twitter", to: ""},
      {name: "LinkedIn", to: ""},
      {name: "Youtube", to: ""},
      {name: "Discord", to: ""},
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
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Modifié un prestataire'
    },
    listSocialLinks() {
      let listSocialLinks = []
      for (var i = 0; i < this.editedItem.profileLinks.length; i++) {
        let obj = {}
        obj["name"] = this.editedItem.profileLinks[i].name
        obj["to"] = this.editedItem.profileLinks[i].to
        listSocialLinks.push(obj)
      }
      console.log("Tab", listSocialLinks)
      return listSocialLinks
    },
  }),
  methods: {
    /*
    - AJOUTÉ PRESTATAIRE
    */
    closeAddPresta() {
      this.dialogAdd = false;
    },
    addPresta2() {
      this.dialogAdd = true;
    },
    async savePresta() {
      this.addItem.services = {...this.serviceStates};
      const selectedSocialNetworks = this.socialNetwork.filter(sn => sn.checked);
      this.addItem.profileLinks = selectedSocialNetworks.map(sn => ({name: sn.name, to: ''}));
      await this.$store.dispatch('addProvider', this.addItem);
      this.dialogAdd = false;
      await this.$store.dispatch('getProviders');
      this.showAddUserForm();
    },

    /*
    - AJOUTÉ UTILISATEUR
    */
    closeAddUser() {
      this.dialogAddUser = false;
    },

    showAddUserForm() {
      this.dialogAddUser = true;
    },

    saveUser() {
      console.log("Add user", this.addUser);
      this.$store.dispatch('addAccount', this.addUser);
      this.dialogAddUser = false;
    },

    /*
    - MODIFIER PRESTATAIRE
    */

    close() {
      this.editDialog = false
    },

    editItem(item) {
      this.editedIndex = this.providers.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.editDialog = true
      this.initializeServiceStates();
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
      this.editedItem.services = {...this.serviceStates};
      console.log("Saving provider:", this.editedItem);
      // APPEL API
      this.$store.dispatch('updateProviderProfile', this.editedItem)
      this.editDialog = false
      window.location.reload();
    },

    /*
    - SUPPRIMER PRESTATAIRE
    */

    deleteItem(item) {
      console.log(item)
      this.editedIndex = this.providers.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    closeDelete() {
      this.dialogDelete = false
    },

    async deleteItemConfirm() {
      const id = this.editedItem._id;
      try {
        await this.$store.dispatch('deleteProvider', id);
        this.dialogDelete = false;
        await this.$store.dispatch('getProviders');
      } catch (error) {
        console.error('Erreur lors de la suppression du provider:', error);
      }
    },

    /*
    - AUTRES
     */

    onSocialNetworkChange(selectedItem) {
      this.selectedSNLink = selectedItem ? selectedItem.to : '';
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
  },

  async mounted() {
    await this.$store.dispatch('getProviders')
    console.log("Mounted log", this.editedItem.services);
    this.initializeServiceStates();
  }
}
</script>