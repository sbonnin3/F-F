const posts = [
    {
        "_id": 1,
        "providerId": 1,
        "origin": "fastandfabulous",
        "title": "Retrouvez nous sur Facebook",
        "datetime": "2020-05-12 12:00:00",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec."
    },
    {
        "_id": 2,
        "providerId": 1,
        "origin": "facebook",
        "title": "Des nouveautés sur notre boutique",
        "datetime": "2020-06-08 12:00:00",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.",
        "image": "https://picsum.photos/400/400"
    },
    {
        "_id": 3,
        "providerId": 2,
        "origin": "twitter",
        "title": "Tentez de gagner des places pour notre prochain événement",
        "datetime": "2020-06-08 12:00:00",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.",
    }
];


exports.getPosts = (providerId) => {
    return posts.filter(post => post.providerId === providerId);
}

exports.getPost = (postId) => {
    return posts.find(post => post._id === postId);
}