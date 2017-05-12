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
        }
    },
    getters:{
        [CarteTypes.GET_POLYGONS]: (state) => state.polygonsList
    },
    actions:{
        [TerritoireTypes.ADD_COMMUNE]: (context, ter) =>{
            CommuneService.getGeom(ter.id)
                .then(response => {
                    context.commit(CarteTypes.ADD_POLYGON,response.body);
                })
        },
        [TerritoireTypes.REMOVE_COMMUNE]: (context, ter) => {
            context.commit(CarteTypes.REMOVE_POLYGON, ter);
        }
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
        }
    }
}