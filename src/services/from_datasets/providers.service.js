const providers = [
  {
    _id: 1,
    name: "Provider 1",
    category: "Restaurant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
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

async function getProviders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(providers);
    }, 1000);
  });
}

async function getProvider(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(providers.find((provider) => provider._id === id));
    }, 1000);
  });
}

module.exports = { getProviders, getProvider };
