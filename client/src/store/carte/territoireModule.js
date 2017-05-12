import Vuex from 'vuex';
import Vue from 'vue';

import * as TerritoireTypes from './territoireTypes'
import CommuneService from '../../api/communeService'
export default{
    state:{
        territoire: [],
        resultatRecherche: []
    },
    getters:{
        [TerritoireTypes.GET_COMMUNES]: (state) => state.territoire,
        [TerritoireTypes.GET_RESULT_RECHERCHE]: (state) => state.resultatRecherche,
    },
    actions:{
        [TerritoireTypes.ADD_COMMUNE]: (context, ter) =>{
            context.commit(TerritoireTypes.ADD_COMMUNE,ter);
            context.commit(TerritoireTypes.SET_RESULT_RECHERCHE, []);
        },
        [TerritoireTypes.RECHERCHE_TERRITOIRE]: (context, query) =>{
            CommuneService.search(query)
                .then(response => {
                    context.commit(TerritoireTypes.SET_RESULT_RECHERCHE,response.body);
                })
        },
        [TerritoireTypes.REMOVE_COMMUNE]: (context, ter) =>{
            context.commit(TerritoireTypes.REMOVE_COMMUNE, ter);
        },
    },
    mutations:{
        [TerritoireTypes.ADD_COMMUNE]: (state, commune) => {
            state.territoire.push(commune);
        },
        [TerritoireTypes.SET_RESULT_RECHERCHE]: (state, result) => {
            state.resultatRecherche = result;
        },
        [TerritoireTypes.REMOVE_COMMUNE]: (state, ter) => {
            state.territoire = state.territoire.filter(t => t.id != ter.id);
        },
    }
}