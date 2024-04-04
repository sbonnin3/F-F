const AxiosService = require("./axios.service");

async function logout() {
    const response = await AxiosService.postRequest("/auth/logout");
    return response.data;
}

async function login(email, password) {
    const response = await AxiosService.postRequest("/auth/login", {username: email, password});
    return response.data;
}

module.exports = {
    logout,
    login
};