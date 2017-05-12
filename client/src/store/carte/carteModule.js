import Vuex from 'vuex';
import Vue from 'vue';

import * as CarteTypes from './carteTypes'

export default{
    state:{
        polygonsList: []
    },
    getters:{
        [CarteTypes.GET_POLYGONS_LIST]: (state) => state.polygonsList
    },
    actions:{
        [CarteTypes.SET_POLYGONS_LIST]: (context, polygonsList) => {
            context.commit(CarteTypes.SET_POLYGONS_LIST, polygonsList);
        }
    },
    mutations:{
        [CarteTypes.SET_POLYGONS_LIST]: (state, polygonsList) => {
            state.polygonsList = polygonsList;
        }
    }
}