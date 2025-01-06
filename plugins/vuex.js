import store from "~/store/index.js";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('store', store)
});