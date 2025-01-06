import {GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'

export default function useFirebaseAuth() {
    const {$auth, $store} = useNuxtApp()

    // Handle sign-in
    const loginUser = async (email, password) => {
        if (email && password) {
            try {
                const userCreds = await signInWithEmailAndPassword($auth, email, password);
                if (userCreds) {
                    const user = userCreds?.user
                    $store.commit('auth/setUser',user)
                    return true
                }
            } catch (error) {

                return false;
            }
        } else {
            return false;
        }
    };
    const registerUser = async (email, password) => {
        try {
            const userCreds = await createUserWithEmailAndPassword($auth, email, password)
            if (userCreds) {
                const user = userCreds?.user
                $store.commit('auth/setUser',user)
                return true
            }
        } catch (error) {
            if (error instanceof Error) {
                // handle error
            }
            return false
        }
        return false
    }

    return {
        registerUser,
        loginUser
    }
}