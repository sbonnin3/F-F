const AxiosService = require("./axios.service")

async function getComments(idProvider) {
    const reviews = await AxiosService.getRequest("/providers/" + idProvider + "/reviews");
    return reviews.data
}

async function addComment(idProvider, comment) {
  console.log(idProvider, comment);
  //TODO
}

module.exports = {
  getComments,
  addComment,
};
