import { createStore } from "vuex";
import  mutations  from "./mutations";
import actions from "./actions"
import getters from "./getters"
import modules from "./modules"

const store = createStore({
    state:{
        count:0,
    },
    mutations,
    actions,
    getters,
    modules,
})


export default store