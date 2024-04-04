import Providers from "@/services/from_api/providers.service.js";
import User from "@/services/from_api/users.service.js";
const providersStore = {
    state: {
        providers: [],
    },
    mutations: {
        setProviders(state, providers2) {
            state.providers = providers2;
        }
    },
    actions: {
        async getProviders(store) {
            console.log("getProviders")
            const providers = await Providers.getProviders();
            console.log(providers)
            store.commit("setProviders", providers);
        },

        /*
        async getProvider(store, id) {
            const provider = await Providers.getProvider(id);
            store.commit("setProviders", provider);
        },

         */
        async updateProviderProfile(store, payload) {
            console.log("ID : " + payload._id)
            console.log("Payload : " + payload)
            await Providers.updateProviderProfile(payload._id, payload);
        },
        async deleteProvider(store,payload) {
            console.log(payload)
            const id = payload;
            const userId = await Providers.getProviderIdByUserId(id);
            console.log("deleteProvider with userID : ", userId)
            await User.deleteUser(userId);
            console.log("deleteProvider with id : ", id)
            await Providers.deleteProvider(id);
        }
    }
}

export default providersStore;