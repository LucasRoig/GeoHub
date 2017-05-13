import Vue from 'vue';
import VueResource from 'vue-resource';
import Server from './server';

let baseRoute = Server.address;
Vue.use(VueResource);

export default{
    getAllDataset: () => {
        console.log("send GET " + baseRoute + '/dataset');
        return Vue.http.get(baseRoute + '/dataset');
    },
    deleteDataset: (id) => {
        console.log("send DELETE " + baseRoute + '/dataset' + id)
        return Vue.http.delete(baseRoute + '/dataset/' + id);
    },
    createDataset: (dataset) => {
        return Vue.http.post(baseRoute + '/dataset',dataset);
    },
    createVariable: (variable, datasetId) => {
        return Vue.http.post(baseRoute + '/dataset/' + datasetId + '/variable',variable);
    },
    createMultipleVariable: (variables, datasetId) =>{
        return Vue.http.post(baseRoute + '/dataset/' + datasetId + '/createMultipleVariables',variables);
    }
}