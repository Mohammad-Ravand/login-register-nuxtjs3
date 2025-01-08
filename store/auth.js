const authModule = {
    namespaced: true,

    state: () => ({
        user:JSON.parse(localStorage.getItem('user')),
        token: localStorage.getItem('token')
    }),
    mutations: {
        setUser(state, user) {
            localStorage.setItem('user', JSON.stringify(user))
            state.user = user
        },
        setToken(state, token) {
            localStorage.setItem('token', token)
            state.token = token
        },
        logout(state) {

            localStorage.removeItem('token');
            state.token = null;
            localStorage.removeItem('user')
            state.user = null
            console.log('logout mutation is running',state.user,state.token)
        },


    },
    actions: {  },
    getters: {
        getUser(state) {
            return state.user;
        },
        getToken(state) {
            return state.token
        },
        isLoggedIn(state) {
            return state.user !=null;
        }
    }
}

export default authModule;