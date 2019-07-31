import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)
import axios from "axios"

const store = new Vuex.Store({
    state:{
        dat:[]
    },
    mutations:{
        datas(state,res){
            state.dat = res
            console.log(res)
            console.log(1)
        }
    },
    actions:{
        getdata(store,url){
            axios.get(url)
            .then(res=>{
                store.commit("datas",res.data)               
            })
        }
    }
})

export default store;