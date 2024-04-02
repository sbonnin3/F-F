const posts = [
    {
        _id: 1,
        providerId: 1,
        origin: "fastandfabulous",
        title: "Retrouvez nous sur Facebook",
        datetime: "2020-05-12 12:00:00",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.",
    },
    {
        _id: 2,
        providerId: 1,
        origin: "facebook",
        title: "Des nouveautés sur notre boutique",
        datetime: "2020-06-08 12:00:00",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.",
        image: "https://picsum.photos/400/400",
    },
    {
        _id: 3,
        providerId: 2,
        origin: "twitter",
        title: "Tentez de gagner des places pour notre prochain événement",
        datetime: "2020-06-08 12:00:00",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.",
    },
];

/**
 * Get posts by provider id
 * @author Nathan BOSCHI
 * @deprecated
 * @param providerId - The id of the provider
 * @returns {Promise<unknown>} - A promise that resolves with the posts
 */
async function getPosts(providerId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(posts.filter((post) => post.providerId === providerId));
        }, 500);
    });
}

/**
 * Create a post
 * @author Nathan BOSCHI
 * @deprecated
 * @param payload - The post to create {providerId, title, content}
 * @returns {Promise<unknown>} - A promise that resolves with the created post
 */
async function createPost(payload) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(posts.push({
                _id: posts.length,
                providerId: payload.providerId,
                origin: "fastandfabulous",
                title: payload.title,
                datetime: new Date().toISOString(),
                content: payload.content,
            }))
        }, 500);
    });
}

/**
 * Edit a post
 * @author Nathan BOSCHI
 * @deprecated
 * @param payload - The post to edit {postId, title, content}
 * @returns {Promise<unknown>}
 */
async function editPost(payload) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const post = posts.find((post) => post._id === payload.postId)
            post.title = payload.title;
            post.content = payload.content;
            post.datetime = new Date().toISOString();
            resolve();
        }, 500);
    });
}

/**
 * Delete a post
 * @author Nathan BOSCHI
 * @deprecated
 * @param postId - The id of the post to delete
 * @returns {Promise<unknown>} - A promise that resolves when the post is deleted
 */
async function deletePost(postId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const index = posts.findIndex((post) => post._id === postId);
            posts.splice(index, 1);
            resolve();
        }, 500);
    });
}

module.exports = {getPosts, createPost, editPost, deletePost};
