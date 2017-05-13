import Vuex from 'vuex';
import Vue from 'vue';

import * as DatasetTypes from './datasetTypes'
import DatasetService from '../../api/datasetService'

export default {
    state:{
        datasetList:[]
    },
    getters:{
        [DatasetTypes.GET_DATASET_LIST]: state =>{
            return state.datasetList;
        }
    },
    actions:{
        [DatasetTypes.FETCH_DATASET]: context =>{
            DatasetService.getAllDataset()
            .then(response => {
                context.commit(DatasetTypes.SET_DATASET_LIST,response.body);
            });
        },
        [DatasetTypes.DELETE_DATASET]:(context,id) =>{
            DatasetService.deleteDataset(id)
            .then(response => {
                context.dispatch(DatasetTypes.FETCH_DATASET);
            })
        } 
    },
    mutations:{
        [DatasetTypes.SET_DATASET_LIST]:(state,list) => {
            state.datasetList = list;
        }
    }
}