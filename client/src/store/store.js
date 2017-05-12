import Vuex from 'vuex';
import Vue from 'vue';

import {router} from '../main'

import CarteModule from './carte/carteModule'
import TerritoireModule from './carte/territoireModule'
Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules:{
        CarteModule,
        TerritoireModule
    },
})