// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from 'path'

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    alias: {
        '@': resolve(__dirname, '/'),
    },
    ssr: false,

    modules: [
      '@bootstrap-vue-next/nuxt',
      '@vueuse/nuxt',
      'nuxt-vue3-google-signin',
      'nuxt-svgo',
      '@nuxt/icon',
      '@vee-validate/nuxt',
    ],
    veeValidate: {
        // disable or enable auto imports
        autoImports: true,
    },

    css: [
        'bootstrap/dist/css/bootstrap.min.css',
        '~/assets/css/fonts.css',
        '~/assets/css/app.css',
        'vue3-toastify/dist/index.css'

    ],
    googleSignIn: {
        clientId: '441682558065-fdqupusgn1ekcpg688f3lk69i24222ro.apps.googleusercontent.com',
    },

})