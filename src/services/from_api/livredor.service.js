async function getComments(idProvider) {
    return comments.filter((comment) => comment.providerId === idProvider);
}

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
