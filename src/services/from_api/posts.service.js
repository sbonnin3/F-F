const AxiosService = require("@/services/from_api/axios.service");

async function getPosts(providerId) {
    const posts = await AxiosService.getRequest("/posts")
    return posts.data.filter((post) => post.providerId === providerId);
}

async function createPost(payload) {
    return AxiosService.postRequest("/posts", {
        providerId: payload.providerId,
        origin: "fastandfabulous",
        title: payload.title,
        content: payload.content
    });
}

async function editPost(payload) {
    return AxiosService.putRequest(`/posts/${payload.postId}`, {
        title: payload.title,
        content: payload.content,
    });
}

async function deletePost(postId) {
    return AxiosService.deleteRequest(`/posts/${postId}`);
}

module.exports = {getPosts, createPost, editPost, deletePost};
