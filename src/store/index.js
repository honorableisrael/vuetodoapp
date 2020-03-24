import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        allTask:[
            {name:'Setup Github respository.', date:"19-10-2020" },
            {name:'Setup Server at Herokue.', date:"29-12-2020"},
            {name:'Investigate swift server options like kitura and vapor.', date:"5-12-2020"},
            {name:'Write basic server that authenticates users.',date:"18-12-2020"},
            {name:' Email questions to momenta B.V. on iOS app development.', date:"19-12-2020"}
        ],
        name:'No Name'  
    },
    //getters are like computed properties. simple funtions to get state
    getters:{

    },
    //actions are good spots to fetch data 
    actions:{

    },
    //mutations are good spots to mutate a state
    mutations:{
        changeName(state){
            state.name = 'Hilary Israel'
        }
    }
})
export default store;