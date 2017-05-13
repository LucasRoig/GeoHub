import Vuex from 'vuex';
import Vue from 'vue';

import * as InfoControlTypes from './infoControlTypes'
export default{
    state:{
        featureId: -1,
    },
    getters:{
        [InfoControlTypes.GET_FEATURE_ID]: (state) => state.featureId,
    },
    actions:{
        [InfoControlTypes.SET_FEATURE_ID]: (context,id) => {
            context.commit(InfoControlTypes.SET_FEATURE_ID,id);
        }
    },
    mutations:{
        [InfoControlTypes.SET_FEATURE_ID]: (state, id) => {
            state.featureId = id;
        }
    }
}