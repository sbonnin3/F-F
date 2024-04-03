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
 * @param idProvider - The id of the provider
 * @param comment - The comment to add
 * @returns {Promise<void>} - A promise that resolves when the comment is added
 */
async function addComment(idProvider, comment) {
    const review = await AxiosService.postRequest("/reviews", {providerId: idProvider, review: comment});
    return review.data
}

module.exports = {
  getComments,
  addComment,
};
