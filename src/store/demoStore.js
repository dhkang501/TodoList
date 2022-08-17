import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        price: 100
    },
    getters:{
        originPrice(state){
            return state.price;
        },
        dublePrice(state){
            return state.price*2
        },
        triplePrice(state){
            return state.price*3
        }
    }

})