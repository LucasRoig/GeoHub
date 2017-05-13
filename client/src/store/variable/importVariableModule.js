import Vuex from 'vuex';
import Vue from 'vue';

import * as ImportVariableTypes from './importVariableTypes'
import DatasetService from '../../api/datasetService'
import CsvParser from '../../util/csvParser'

export default{
    state:{
        importedVariables:[],
        progress:0,
        sending: false,
    },
    getters:{
        [ImportVariableTypes.GET_IMPORTED_VARIABLES]: state => state.importedVariables,
        [ImportVariableTypes.GET_PROGRESS]: state => state.progress,
        [ImportVariableTypes.IS_SENDING]: state => state.sending
    },
    actions:{
        [ImportVariableTypes.PARSE_FILE]: (context, params) => {
            let reader = new FileReader();
            reader.onload = (e) =>{
                let variables = CsvParser.parse(reader.result);
                //context.commit(ImportVariableTypes.SET_IMPORTED_VARIABLES,variables);
                DatasetService.createMultipleVariable(variables, params.datasetId).then(response => {console.log("c'est fini")})
                console.log('SENDING')
                context.commit(ImportVariableTypes.SET_SENDING,true);
            }
            reader.readAsText(params.file);
        },
        [ImportVariableTypes.SEND_TO_SERVER]: (context, datasetId) => {
            context.state.importedVariables.forEach(v => {
                
            })
            context.commit(ImportVariableTypes.SET_SENDING,true);
        }
    },
    mutations:{
        [ImportVariableTypes.SET_IMPORTED_VARIABLES]: (state, variables) => {
            console.log("debut")
            state.importedVariables = variables;
            console.log("fin")
        },
        [ImportVariableTypes.SET_SENDING]: (state, value) =>{
            state.sending = value;
        },
        [ImportVariableTypes.INCR_PROGRESS]: (state) =>{
            state.progress += 1;
        }
    }

}