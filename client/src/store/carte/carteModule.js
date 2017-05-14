import Vuex from 'vuex';
import Vue from 'vue';

import * as CarteTypes from './carteTypes'
import * as TerritoireTypes from './territoireTypes'
import CommuneService from '../../api/communeService'
export default{
    state:{      
        palette : ["#FFEDA0", "#FC4E2A", "#E31A1C", "#BD0026", "#800026"],
        variable: { },
        quintiles: [10, 20, 30, 40],
        pourcentage: false,
        referecePourcentage: {}
    },
    getters:{
        [CarteTypes.GET_VARIABLE]: (state) => state.variable,
        [CarteTypes.GET_QUINTILES]: (state) => state.quintiles,
        [CarteTypes.GET_PALETTE]: (state) => state.palette,
        [CarteTypes.GET_POURCENTAGE]: (state) => state.pourcentage,
        [CarteTypes.GET_REFERENCE_POURCENTAGE]: (state) => state.referecePourcentage,
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
        [CarteTypes.SET_QUINTILES]: (context, q) => {
            context.commit(CarteTypes.SET_QUINTILES, q);
        },
        [CarteTypes.SET_POURCENTAGE]:(context, p) => {
            context.commit(CarteTypes.SET_POURCENTAGE,p);
        },
        [CarteTypes.SET_REFERENCE_POURCENTAGE]:(context, p) => {
            context.commit(CarteTypes.SET_REFERENCE_POURCENTAGE,p);
        },
    },
    mutations:{
        [CarteTypes.SET_VARIABLE]: (state, v) => {
            state.variable = v;
            if(state.variable.id && state.referecePourcentage.id){
                let donnee = [];
                state.variable.donnees.forEach(d => {
                    let valeur = d.valeur;
                    let valRef = state.referecePourcentage.donnees.find(don => parseInt(d.codeGeo) == parseInt(don.codeGeo)).valeur;
                    valeur = (valeur/valRef) * 100
                    donnee.push(valeur);
                });
                donnee.sort((a, b) => {
                    if (a > b)
                        return 1;
                    if (a < b)
                        return -1;
                    return 0;
                });
                for (var i=1; i<5; i++){
                    state.quintiles[i-1] = parseInt(donnee[Math.floor((donnee.length / 5) * i)]);
                }
            }else{
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
            }
        },
        [CarteTypes.REMOVE_VARIABLE]: (state, v) => {
            state.variable = {};
        },
        [CarteTypes.SET_PALETTE]: (state, p) => {
          state.palette = p;
        },
        [CarteTypes.SET_QUINTILES]: (state, q) => {
          state.quintiles = q;
        },
        [CarteTypes.SET_POURCENTAGE]:(state, p) => {
            state.pourcentage = p;
            if(state.variable.id && state.referecePourcentage.id){
                let donnee = [];
                state.variable.donnees.forEach(d => {
                    let valeur = d.valeur;
                    let valRef = state.referecePourcentage.donnees.find(don => parseInt(d.codeGeo) == parseInt(don.codeGeo)).valeur;
                    valeur = (valeur/valRef) * 100
                    donnee.push(valeur);
                });
                donnee.sort((a, b) => {
                    if (a > b)
                        return 1;
                    if (a < b)
                        return -1;
                    return 0;
                });
                for (var i=1; i<5; i++){
                    state.quintiles[i-1] = Math.floor(donnee[Math.floor((donnee.length / 5) * i)]);
                }
            };
        },
        [CarteTypes.SET_REFERENCE_POURCENTAGE]:(state, p) => {
            state.referecePourcentage = p;
            if(state.variable.id && state.referecePourcentage.id){
                let donnee = [];
                state.variable.donnees.forEach(d => {
                    let valeur = d.valeur;
                    let valRef = state.referecePourcentage.donnees.find(don => parseInt(d.codeGeo) == parseInt(don.codeGeo)).valeur;
                    valeur = (valeur/valRef) * 100
                    donnee.push(valeur);
                });
                donnee.sort((a, b) => {
                    if (a > b)
                        return 1;
                    if (a < b)
                        return -1;
                    return 0;
                });
                for (var i=1; i<5; i++){
                    state.quintiles[i-1] = Math.floor(donnee[Math.floor((donnee.length / 5) * i)]);  
                }
            }
        }
    }
}