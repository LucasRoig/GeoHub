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
import ImportVariables from './components/dataset/import.vue'
import AjoutDataset from './components/dataset/ajout.vue'
import EditDataset from './components/dataset/editdataset.vue'
import EditVariable from './components/dataset/editvariable.vue'
import TerritoireForm from './components/carte/territoire.vue'
import SelectionVariables from './components/carte/selectionVariables.vue'
import EditLegende from './components/carte/editLegende.vue'
import Graphique from './components/statistique/graphique.vue'

Vue.use(VueRouter);
Vue.use(VueResource);

export const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
      {path: '/', component:Carte},
    {path: '/carte', component:Carte},
    {path: '/connexion', component:Connexion},
    {path: '/inscription', component:Inscription},
    {path: '/dataset', component:Dataset},
    {path: '/carte/territoire', component: TerritoireForm},
    {path: '/dataset/ajouter', component: AjoutDataset},
    {path: '/dataset/:id/importVariables', component: ImportVariables},
    {path: '/dataset/:id', component:EditDataset},
    {path: '/dataset/:datasetid/:variableid', component: EditVariable},
    {path: '/carte/territoire', component: TerritoireForm},
    {path: '/carte/selection-variables', component: SelectionVariables},
    {path: '/carte/editLegende', component: EditLegende},
    {path: '/graphique', component: Graphique}
  ]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
