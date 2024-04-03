const AxiosService = require('./axios.service');

async function getProviders() {
    const providers = await AxiosService.getRequest('/providers');
    return providers.data;
}

async function getProvider(id) {
    const provider = await AxiosService.getRequest(`/providers/${id}`);
    return provider.data;
}

async function updateProviderProfile(id, profile) {
    const provider = await AxiosService.putRequest(`/providers/${id}`, profile);
    return provider.data;
}

module.exports = {getProviders, getProvider, updateProviderProfile};
