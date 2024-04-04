import LivreDor from "@/services/from_api/livredor.service"

const reviewStore = {
    state: {
        providerReviews: [],
    },
    mutations: {
        setProviderReviews(state, reviews) {
            state.providerReviews = reviews;
        }
    },
    actions: {
        async getProviderReviews(store) {
            const posts = await LivreDor.getComments(store.rootState.auth.user.providerId);
            store.commit("setProviderReviews", posts);
        },
        async deleteReview(store, reviewId) {
            await LivreDor.deleteReview(reviewId);
            store.dispatch("getProviderReviews");
        }
    }
}

export default reviewStore;