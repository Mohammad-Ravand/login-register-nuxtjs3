import { initializeApp } from 'firebase/app'
import { getAuth,GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics"

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: "AIzaSyCKcz460YUv_WIPTkbz5aqCOhRONMZ_G9M",
        authDomain: "russian-project-d6c0d.firebaseapp.com",
        projectId: "russian-project-d6c0d",
        storageBucket: "russian-project-d6c0d.firebasestorage.app",
        messagingSenderId: "1033983346012",
        appId: "1:1033983346012:web:6e43dabf9e1f47541e2d99",
        measurementId: "G-1PZDM8XWT9"
        // there could be other properties depending on the project
    };

    const app = initializeApp(firebaseConfig)
    const provider = new GoogleAuthProvider();

    const analytics = getAnalytics(app)
    const auth = getAuth(app)
    const firestore = getFirestore(app)

    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)
    nuxtApp.provide('provider', provider);

    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)
})