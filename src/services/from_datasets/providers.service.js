const providers = [
    {
      "id": 1,
      "name": "Provider 1",
      "description": "Provider 1 description",
      "logo": "https://via.placeholder.com/150",
      "profileLinks": [
        {
          "name": "Facebook",
          "to": "https://www.facebook.com"
        },
        {
          "name": "Twitter",
          "to": "https://www.twitter.com"
        },
        {
          "name": "Instagram",
          "to": "https://www.instagram.com"
        }
      ],
      "services": [
        { "name": "Ticketing", "to": { "name": "planning" } },
        { "name": "Goodies Shop", "to": { "path": "/goodies" } }
      ],
      "posts": [
        {
          "title": "Retrouvez nous sur Facebook",
          "date": "2020-05-12",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
        },
        {
          "title": "Des nouveautés sur notre boutique",
          "date": "2020-03-08",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
        }
      ]
    },
    {
      "id": 2,
      "name": "Provider 2",
      "description": "Provider 2 description",
      "logo": "https://via.placeholder.com/150",
      "profileLinks": [
        {
          "name": "LinkedIn",
          "to": "https://www.linkedin.com"
        },
        {
          "name": "YouTube",
          "to": "https://www.youtube.com"
        }
      ],
      "services": [
        { "name": "Streaming", "to": { "name": "live" } },
        { "name": "E-commerce", "to": { "path": "/shop" } }
      ],
      "posts": [
        {
          "title": "Découvrez nos dernières vidéos",
          "date": "2021-01-20",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
        },
        {
          "title": "Profitez de nos offres spéciales",
          "date": "2021-02-15",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
        }
      ]
    },
    {
      "id": 3,
      "name": "Provider 3",
      "description": "Provider 3 description",
      "logo": "https://via.placeholder.com/150",
      "profileLinks": [
        {
          "name": "Facebook",
          "to": "https://www.facebook.com"
        },
        {
          "name": "Twitter",
          "to": "https://www.twitter.com"
        },
        {
          "name": "Instagram",
          "to": "https://www.instagram.com"
        }
      ],
      "services": [
        { "name": "Ticketing", "to": { "name": "planning" } },
        { "name": "Goodies Shop", "to": { "path": "/goodies" } }
      ],
      "posts": [
        {
          "title": "Retrouvez nous sur Facebook",
          "date": "2020-05-12",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
        },
        {
          "title": "Des nouveautés sur notre boutique",
          "date": "2020-03-08",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
        }
      ]
    },
    {
      "id": 4,
      "name": "Provider 4",
      "description": "Provider 4 description",
      "logo": "https://via.placeholder.com/150",
      "profileLinks": [
        {
          "name": "LinkedIn",
          "to": "https://www.linkedin.com"
        },
        {
          "name": "YouTube",
          "to": "https://www.youtube.com"
        }
      ],
      "services": [
        { "name": "Streaming", "to": { "name": "live" } },
        { "name": "E-commerce", "to": { "path": "/shop" } }
      ],
      "posts": [
        {
          "title": "Découvrez nos dernières vidéos",
          "date": "2021-01-20",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
        },
        {
          "title": "Profitez de nos offres spéciales",
          "date": "2021-02-15",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
        }
      ]
    }
  ]  


exports.getProviders = () => {
    return providers;
}

exports.getProvider = (id) => {
    return providers.find(provider => provider.id === id);
}