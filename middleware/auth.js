// middleware/auth.ts
import useFirebaseAuth from "~/composeables/useFirebaseAuth.js";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const {$store } = useNuxtApp();
    const user =  $store.getters['auth/getUser'];
    console.log('user auth is ', {...user})
    if (!user) {
        return navigateTo({
            path: '/auth/login',
            query: {
                redirect: to.fullPath,
            },
        })
    }
})