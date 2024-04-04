const AxiosService = require("./axios.service")

/**
 * Get comments by provider id
 * @author Nathan BOSCHI
 * @param {number} idProvider - The id of the provider
 * @returns {Promise<Array>} - Comments
 */
async function getComments(idProvider) {
    const reviews = await AxiosService.getRequest("/providers/" + idProvider + "/reviews");
    return reviews.data
}

/**
 * Add a comment
 * @todo
 * @author Nathan BOSCHI
 * @param providerId - The id of the provider
 * @param review - The comment to add
 * @returns {Promise<void>} - A promise that resolves when the comment is added
 */
async function addComment(providerId, review) {
    console.log({providerId, ...review})
    const result = await AxiosService.postRequest("/reviews", {providerId, ...review});
    return result.data
}

async function deleteReview(reviewId) {
    const result = await AxiosService.deleteRequest("/reviews/" + reviewId);
    return result.data
}

module.exports = {
    getComments,
    addComment,
    deleteReview
};
