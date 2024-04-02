const axios = require('axios');

const axiosService = axios.create({
    baseURL: "http://localhost:3000/api/",
    timeout: 1000,
})

function getRequest(path) {
    return axiosService.get(path);
}

function postRequest(path, data) {
    return axiosService.post(path, data);
}

function putRequest(path, data) {
    return axiosService.put(path, data);
}

function deleteRequest(path) {
    return axiosService.delete(path);
}

module.exports = {
    getRequest,
    postRequest,
    putRequest,
    deleteRequest
}