import Providers from "@/services/from_api/providers.service.js";

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
        async updateProviderProfile(store, payload) {
            await Providers.updateProviderProfile(payload.id, payload.profile);
        },
        */
        async deleteProvider(store, id) {
            await Providers.deleteProvider(id);
        }
    }
}

export default providersStore;