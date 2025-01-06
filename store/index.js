import {createStore} from "vuex";
import authModule from "~/store/auth.js";

const store = createStore({
    modules: {
        auth: authModule,
    }
})

export default store;