const AxiosService = require("@/services/from_api/axios.service");

/**
 * Get posts by provider id
 * @author Nathan BOSCHI
 * @param providerId - The id of the provider
 * @returns {Promise<unknown>} - A promise that resolves with the posts
 */
async function getPosts(providerId) {
    const posts = await AxiosService.getRequest("/providers/" + providerId + "/posts");
    return posts.data;
}

/**
 * Create a post
 * @author Nathan BOSCHI
 * @param payload - The post to create {providerId, title, content}
 * @returns {Promise<unknown>} - A promise that resolves with the created post
 */
async function createPost(payload) {
    return AxiosService.postRequest("/posts", {
        providerId: payload.providerId,
        origin: "fastandfabulous",
        title: payload.title,
        content: payload.content
    });
}

/**
 * Edit a post
 * @author Nathan BOSCHI
 * @param payload - The post to edit {postId, title, content}
 * @returns {Promise<unknown>}
 */
async function editPost(payload) {
    return AxiosService.putRequest(`/posts/${payload.postId}`, {
        title: payload.title,
        content: payload.content,
    });
}

/**
 * Delete a post
 * @author Nathan BOSCHI
 * @param postId - The id of the post to delete
 * @returns {Promise<unknown>} - A promise that resolves when the post is deleted
 */
async function deletePost(postId) {
    return AxiosService.deleteRequest(`/posts/${postId}`);
}

module.exports = {getPosts, createPost, editPost, deletePost};
