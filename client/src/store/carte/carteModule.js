import Vuex from 'vuex';
import Vue from 'vue';

import * as CarteTypes from './carteTypes'
import * as TerritoireTypes from './territoireTypes'
import CommuneService from '../../api/communeService'
export default{
    state:{
        polygonsList: {
            type: "FeatureCollection",
            features:[]
        },
        variable: {
            
        },
        quintiles: [10, 20, 30, 40]
    },
    getters:{
        [CarteTypes.GET_POLYGONS]: (state) => state.polygonsList,
        [CarteTypes.GET_VARIABLE]: (state) => state.variable,
        [CarteTypes.GET_QUINTILES]: (state) => state.quintiles
    },
    actions:{
        [TerritoireTypes.ADD_COMMUNE]: (context, ter) =>{
            if(ter.type == 'DEP'){

            }else{
                CommuneService.getGeom(ter.id)
                    .then(response => {
                        context.commit(CarteTypes.ADD_POLYGON,response.body);
                    })
            }
        },
        [TerritoireTypes.REMOVE_COMMUNE]: (context, ter) => {
            context.commit(CarteTypes.REMOVE_POLYGON, ter);
        },
        [CarteTypes.SET_VARIABLE]: (context, v) => {
            context.commit(CarteTypes.SET_VARIABLE, v);
        },
        [CarteTypes.REMOVE_VARIABLE]: (context, v) => {
            context.commit(CarteTypes.REMOVE_VARIABLE, v);
        },
    },
    mutations:{
        [CarteTypes.ADD_POLYGON]: (state, polygon) => {
            let newGeo = Object.assign({},state.polygonsList);
            newGeo.features.push(polygon);
            state.polygonsList = newGeo;
        },
        [CarteTypes.REMOVE_POLYGON]: (state, ter) => {
            let newGeo = Object.assign({},state.polygonsList);
            newGeo.features = newGeo.features.filter(t => ter.id != t.id);
            state.polygonsList = newGeo;
        },
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
    }
}