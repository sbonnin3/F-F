import Posts from "@/services/from_datasets/posts.service"

const postsStore = {
    state: {
        providerPosts: [],
    },
    mutations: {
        setProviderPosts(state, posts) {
            state.providerPosts = posts;
        }
    },
    actions: {
        async getProviderPosts(store) {
            const posts = await Posts.getPosts(store.rootState.auth.user.providerId);
            store.commit("setProviderPosts", posts);
        },
        async createPost(store, payload) {
            await Posts.createPost(payload);
        },
        async editPost(store, payload) {
            await Posts.editPost(payload);
        },
        async deletePost(store, postId) {
            await Posts.deletePost(postId);
        }
    }
}

export default postsStore;