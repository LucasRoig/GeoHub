import Vuex from 'vuex';
import Vue from 'vue';

import * as DatasetTypes from './datasetTypes'
import * as CreateDatasetFormTypes from './createDatasetFormTypes'
import DatasetService from '../../api/datasetService'

export default{
    actions:{
        [CreateDatasetFormTypes.CREATE_DATASET]:(context,dataset)  =>{
            DatasetService.createDataset(dataset)
            .then(response => {
                context.dispatch(DatasetTypes.FETCH_DATASET)
            })
        }
    }
}