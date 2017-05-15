import Vuex from 'vuex';
import Vue from 'vue';

import * as DatasetTypes from './datasetTypes'
import * as CreateDatasetFormTypes from './createDatasetFormTypes'
import * as GlobalTypes from '../globalTypes'
import DatasetService from '../../api/datasetService'

export default{
    actions:{
        [CreateDatasetFormTypes.CREATE_DATASET]:(context,dataset)  =>{
            DatasetService.createDataset(dataset)
            .then(response => {
                context.dispatch(DatasetTypes.FETCH_DATASET)
                context.dispatch(GlobalTypes.NAVIGATE,{path:'/dataset'})
            })
        }
    }
}