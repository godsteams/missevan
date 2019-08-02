import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)
import axios from "axios"

const store = new Vuex.Store({
    state:{
        dat:[],
        phones:[],
        search:[]
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
        },
        search(state,res){
            state.search = res
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
        },
        // 搜索的时候获取数据
        getsearch(store,url){
            axios.get(url)
            .then(res =>{
                store.commit("search",res.data.info)
            })
        }
    }
})

export default store;