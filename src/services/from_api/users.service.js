const AxiosService = require("./axios.service");

async function setLocale(userId, locale) {
    const result = await AxiosService.patchRequest("/users/" + userId + "/locale", { locale });
    return result;
}

async function updateUser(userObject) {
    const result = await AxiosService.putRequest("/users/" + userObject._id, userObject);
    return result;
}

async function deleteUser(userId) {
    const user = await AxiosService.deleteRequest("/user/" + userId);
    return user.data;
}

module.exports = {
    setLocale,
    updateUser,
    deleteUser
};
