import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from './components/formulario-component.vue'
import Tabla from './components/tabla-component.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/tablaUsuarios' },
        { path: '/formulario', component: Formulario },
        { path: '/tablaUsuarios', component: Tabla },
    ]
})

