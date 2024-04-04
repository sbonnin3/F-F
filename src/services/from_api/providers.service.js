const AxiosService = require('./axios.service');

/**
 * Get all providers
 * @author Nathan BOSCHI
 * @returns {Promise<unknown>} - The providers
 */
async function getProviders() {
    const providers = await AxiosService.getRequest('/providers');
    return providers.data;
}

/**
 * Get a provider by its id
 * @author Nathan BOSCHI
 * @param id - The id of the provider
 * @returns {Promise<unknown>} - The provider
 */
async function getProvider(id) {
    const provider = await AxiosService.getRequest(`/providers/${id}`);
    return provider.data;
}

/**
 * Update a provider's profile by its id
 * @author Nathan BOSCHI
 * @param id - The id of the provider
 * @param profile - The new profile parameters
 * @returns {Promise<unknown>} - The updated provider
 */
async function updateProviderProfile(id, profile) {
    console.log(id);
    console.log(profile);
    const provider = await AxiosService.putRequest(`/providers/${id}`, profile);
    return provider.data;
}

/**
 * Delete a provider's by its id
 * @author Théo GOUSSOT
 * @param id - The id of the provider
 * @returns {Promise<unknown>} - The updated provider
 */

async function deleteProvider(id) {
    const provider = await AxiosService.deleteRequest(`/providers/${id}`);
    return provider.data;
}


module.exports = {getProviders, getProvider, updateProviderProfile, deleteProvider};
