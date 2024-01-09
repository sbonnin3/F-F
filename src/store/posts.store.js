import Posts from "@/services/from_datasets/posts.service"

const postsStore = {
    state: {
        providersPosts: [],
    },
    mutations: {
        setProvidersPosts(state, posts) {
            state.providersPosts = posts;
        }
    },
    actions: {
        async getProvidersPosts(store) {
            const posts = await Posts.getPosts(store.rootState.auth.user.providerId);
            store.commit("setProvidersPosts", posts);
        },
        async createPost(store, payload) {
            await Posts.createPost(payload);
        },
    }
}

export default postsStore;