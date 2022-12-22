import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let URL_POSTS = 'https://63643e927b209ece0f4372e0.mockapi.io/usuariosTP7'

export default new Vuex.Store({
    state: {
        usuarios: []
    },
    actions: {
        async getUsuarios({commit}) {
            let {data:posts} = await axios(URL_POSTS)
            commit('setPosts', posts)
        },
        async postUsuarios({commit}, usuarioNew) {
            await axios.post(URL_POSTS, usuarioNew, { 'content-type' : 'application/json' })
            commit('pushUsuario', usuarioNew)
        }        
    },
    mutations: {
        setPosts(state, usuario) {
            state.usuarios = usuario
        },
        pushUsuario(state, usuario){
            state.usuarios.push(usuario)
        }
    }
})