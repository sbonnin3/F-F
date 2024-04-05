import Users from "@/services/from_api/users.service";

const userStore = {
    actions: {
        async updateAccount(store, user) {
            await Users.updateUser(user)
            store.commit("setUser", {user, token: store.state.token});
        }, async deleteAccount(store, payload) {
            await Users.deleteUser(payload._id)
        }, async addAccount(store, payload) {
            await Users.addUser(payload)
                .then(() => {
                    console.log("User added")
                })
        }
    }
}

export default userStore;