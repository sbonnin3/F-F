const AxiosService = require("./axios.service");

async function setLocale(userId, locale) {
    const result = await AxiosService.patchRequest("/users/" + userId + "/locale", { locale });
    return result;
}

async function updateUser(userObject) {
    const result = await AxiosService.putRequest("/users/" + userObject._id, userObject);
    return result;
}

module.exports = {
    setLocale,
    updateUser
};
