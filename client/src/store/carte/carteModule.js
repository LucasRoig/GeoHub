import Vuex from 'vuex';
import Vue from 'vue';

import * as CarteTypes from './carteTypes'
import * as TerritoireTypes from './territoireTypes'
import CommuneService from '../../api/communeService'
export default{
    state:{      
        palette : ["#FFEDA0", "#FC4E2A", "#E31A1C", "#BD0026", "#800026"],
        variable: { },
        quintiles: [10, 20, 30, 40]
    },
    getters:{
        [CarteTypes.GET_VARIABLE]: (state) => state.variable,
        [CarteTypes.GET_QUINTILES]: (state) => state.quintiles,
        [CarteTypes.GET_PALETTE]: (state) => state.palette
    },
    actions:{
        [CarteTypes.SET_VARIABLE]: (context, v) => {
            context.commit(CarteTypes.SET_VARIABLE, v);
        },
        [CarteTypes.REMOVE_VARIABLE]: (context, v) => {
            context.commit(CarteTypes.REMOVE_VARIABLE, v);
        },
        [CarteTypes.SET_PALETTE]: (context, p) => {
            context.commit(CarteTypes.SET_PALETTE, p);
        },
    },
    mutations:{
        [CarteTypes.SET_VARIABLE]: (state, v) => {
            state.variable = v;
            let donnees = v.donnees.sort((a, b) => {
                if (a.valeur > b.valeur)
                    return 1;
                if (a.valeur < b.valeur)
                    return -1;
                return 0;
            });
            for (var i=1; i<5; i++){
                state.quintiles[i-1] = donnees[Math.floor((donnees.length / 5) * i)].valeur;
            }
        },
        [CarteTypes.REMOVE_VARIABLE]: (state, v) => {
            state.variable = {};
        },
        [CarteTypes.SET_PALETTE]: (state, p) => {
          state.palette = p;
        },
    }
}