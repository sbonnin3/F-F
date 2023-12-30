const users = [
    {
        _id: 1,
        firstname: "John",
        lastname: "Doe",
        email: "admin@fastnfabulous.com",
        password: "admin",
        role: "ROLE_ADMIN"
    }
]

async function getUser(email, password)  {
    return new Promise((resolve, reject) => {
        const user = users.find(user => user.email === email && user.password === password)
        if (user) {
            setTimeout(() => resolve(user), 1000)
        } else {
            reject(new Error("User not found"))
        }
    })
}

module.exports = {
    getUser
}