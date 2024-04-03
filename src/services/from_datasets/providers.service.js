const providers = [
    {
        _id: 1,
        name: "La Saveur Épicée",
        category: "Restaurant",
        description: "\"La Saveur Épicée\" est bien plus qu'un simple restaurant, c'est un voyage culinaire où les saveurs exquises du monde se rencontrent dans un cadre chaleureux et élégant. Situé au cœur de la ville, notre établissement s'efforce de vous offrir une expérience gastronomique exceptionnelle qui éveillera vos sens.",
        logo: "https://picsum.photos/200/200",
        profileLinks: [
            {
                name: "Facebook",
                to: "https://www.facebook.com",
            },
            {
                name: "Twitter",
                to: "https://www.twitter.com",
            },
            {
                name: "Instagram",
                to: "https://www.instagram.com",
            },
        ],
        services: {
            posts: true,
            ticketing: true,
            goodies: true,
            mapPlacement: true,
            livredor: true,
        },
    },
    {
        _id: 2,
        name: "Provider 2",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
        logo: "https://picsum.photos/200/200",
        profileLinks: [
            {
                name: "LinkedIn",
                to: "https://www.linkedin.com",
            },
            {
                name: "YouTube",
                to: "https://www.youtube.com",
            },
        ],
        services: {
            posts: true,
        },
    },
    {
        _id: 3,
        name: "Provider 3",
        category: "Vente de produits dérivés",
        description: "Provider 3 description",
        logo: "https://picsum.photos/200/200",
        profileLinks: [
            {
                name: "Facebook",
                to: "https://www.facebook.com",
            },
            {
                name: "Twitter",
                to: "https://www.twitter.com",
            },
            {
                name: "Instagram",
                to: "https://www.instagram.com",
            },
        ],
        services: {
            posts: true,
        },
    },
    {
        _id: 4,
        name: "Provider 4",
        description: "Provider 4 description",
        logo: "https://picsum.photos/200/200",
        profileLinks: [
            {
                name: "LinkedIn",
                to: "https://www.linkedin.com",
            },
            {
                name: "YouTube",
                to: "https://www.youtube.com",
            },
        ],
        services: {
            posts: true,
        },
    },
];

/**
 * Get all providers
 * @author Nathan BOSCHI
 * @deprecated
 * @returns {Promise<unknown>} - The providers
 */
async function getProviders() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(providers);
        }, 200);
    });
}

/**
 * Get a provider by its id
 * @author Nathan BOSCHI
 * @deprecated
 * @param id - The id of the provider
 * @returns {Promise<unknown>} - The provider
 */
async function getProvider(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(providers.find((provider) => provider._id === id));
        }, 200);
    });
}

/**
 * Update a provider's profile by its id
 * @author Nathan BOSCHI
 * @deprecated
 * @param id - The id of the provider
 * @param profile - The new profile parameters
 * @returns {Promise<unknown>} - The updated provider
 */
async function updateProviderProfile(id, profile) {
    return new Promise((resolve) => {
        setTimeout(() => {
            providers.find((provider) => provider._id === id).profile = profile;
            resolve(providers.find((provider) => provider._id === id));
        }, 200);
    });
}

module.exports = {getProviders, getProvider, updateProviderProfile};
