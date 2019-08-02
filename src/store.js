import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)
import axios from "axios"

const store = new Vuex.Store({
    state:{
        dat:[],
        phones:[]
    },
    mutations:{
        datas(state,res){
            state.dat = res
            console.log(res)
            console.log(1)
        },
        phones(state,res){
            state.phones = res
            console.log(state.phones)
        }
    },
    actions:{
        getdata(store,url){
            axios.get(url)
            .then(res=>{
                store.commit("datas",res.data)               
            })
        },
        getphone(store,url){
            axios.get(url)
            .then(res=>{
                store.commit("phones",res.data.info)
            })
        }
    }
})

export default store;