import Users from "@/services/from_datasets/users.service";


const userStore = {
    actions: {
        async updateAccount(store, user) {
            await Users.updateUser(user)
            store.commit("setUser", { user, token: store.state.token });
        }
    }
}

export default userStore;