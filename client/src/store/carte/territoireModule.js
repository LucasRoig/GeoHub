import Vuex from 'vuex';
import Vue from 'vue';

import * as TerritoireTypes from './territoireTypes'
import CommuneService from '../../api/communeService'
export default{
    state:{
        territoire: [],
    },
    getters:{
        [TerritoireTypes.GET_COMMUNES]: (state) => state.territoire,
    },
    actions:{
        [TerritoireTypes.ADD_COMMUNE]: (context, ter) =>{
            context.commit(TerritoireTypes.ADD_COMMUNE,ter)
        },
        [TerritoireTypes.REMOVE_COMMUNE]: (context, ter) =>{
            context.commit(TerritoireTypes.REMOVE_COMMUNE, ter);
        },
    },
    mutations:{
        [TerritoireTypes.ADD_COMMUNE]: (state, commune) => {
            state.territoire.push(commune);
        },
        [TerritoireTypes.REMOVE_COMMUNE]: (state, ter) => {
            state.territoire = state.territoire.filter(t => t.id != ter.id);
        },
    }
}