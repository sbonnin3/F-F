const comments = [
  {
    _id: 1,
    providerId: 1,
    author: "John Doe",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae",
    date: "2019-01-01T00:00:00.000Z",
  },
  {
    _id: 2,
    providerId: 1,
    author: "Jane Doe",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae",
    date: "2019-01-01T00:00:00.000Z",
  },
];

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
