const comments = [
  {
    _id: 1,
    providerId: 1,
    author: "Maryl Ine",
    title: "Super restaurant!",
    content:
      "La friture est délicieuse, le magret de canard cuit à la perfection avec ses sauces excellentes sont vraiment à déguster ! Je vous recommande ce resto et son large choix des plats réalisés à la perfection !!! Bravo  au chef",
    date: "2019-01-01T00:00:00.000Z",
  },
  {
    _id: 2,
    providerId: 1,
    author: "Jean Bon",
    title: "Très bon restaurant",
    content:
      "Très bon restaurant, les plats sont très bons et le service est rapide. Je recommande.",
    date: "2019-01-02T00:00:00.000Z",
  },
  {
    _id: 3,
    providerId: 1,
    author: "Bertrand DEGIEUX",
    title: "On y retournera, c'est sûr",
    content: "Super top. Patron et service nickel nous avons tout apprécié. Nous conseillons vivement",
    date: "2019-01-03T00:00:00.000Z",
  }
];

/**
 * Get comments by provider id
 * @deprecated
 * @param {number} idProvider - The id of the provider
 * @returns {Promise<Array>} comments
  */
async function getComments(idProvider) {
    return comments.filter((comment) => comment.providerId === idProvider);
}

/**
 * Add a comment
 * @deprecated
 * @param idProvider - The id of the provider
 * @param comment - The comment to add
 * @returns {Promise<void>} - A promise that resolves when the comment is added
 */
async function addComment(idProvider, comment) {
  comment._id = comments.length + 1;
  comment.providerId = idProvider;
  comment.date = new Date();
  comments.push(comment);
}

module.exports = {
  getComments,
  addComment,
};
