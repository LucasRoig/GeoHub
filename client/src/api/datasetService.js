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
        console.log("send DELETE " + baseRoute + '/dataset' + id);
        return Vue.http.delete(baseRoute + '/dataset/' + id);
    },
    createDataset: (dataset) => {
        return Vue.http.post(baseRoute + '/dataset',dataset);
    },
    deleteVariable: (variableid) => {
        console.log("send DELETE " + baseRoute + '/variable/' + variableid);
        return Vue.http.delete(baseRoute + '/variable/' + variableid);
    },
    createVariable: (variable, datasetId) => {
        return Vue.http.post(baseRoute + '/dataset/' + datasetId + '/variable',variable);
    },
    createMultipleVariable: (variables, datasetId) =>{
        return Vue.http.post(baseRoute + '/dataset/' + datasetId + '/createMultipleVariables',variables);
    },
    deleteDonnee: (donneeid) => {
        console.log("send DELETE " + baseRoute + '/donnee/' + donneeid);
        return Vue.http.delete(baseRoute + '/donnee/' + donneeid);
    },
}