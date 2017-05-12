import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

import store from './store/store'

import Connexion from './components/connexion/connexion.vue'
import Inscription from './components/inscription/inscription.vue'
import Carte from './components/carte/carte.vue'
import Dataset from './components/dataset/dataset.vue'
import TerritoireForm from './components/carte/territoire.vue'

Vue.use(VueRouter);
Vue.use(VueResource);

export const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path: '/carte', component:Carte},
    {path: '/connexion', component:Connexion},
    {path: '/inscription', component:Inscription},
    {path: '/dataset', component:Dataset},
    {path: '/carte/territoire', component: TerritoireForm}
  ]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
