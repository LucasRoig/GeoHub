import Vue from 'vue';
import VueResource from 'vue-resource';
import Server from './server';

let baseRoute = Server.address;
Vue.use(VueResource);

export default{
    getAllCommune: () =>{
        return Vue.http.get(baseRoute + '/commune');
    },
    getComuneOfDep:(depId) =>{
        return Vue.http.get(baseRoute + '/departement/' + depId +'/commune');
    },
    getGeom: (id) =>{
        return Vue.http.get(baseRoute + '/commune/' + id + '/geom');
    },
    getCommune: (id) => {
        return Vue.http.get(baseRoute + '/commune/' + id);
    },
    search: (str) => {
        return Vue.http.get(baseRoute + '/recherche/territoire/' + str);
    },
    getMultipleGeom: (communeList) => {
        let com = [];
        communeList.forEach(c => {
            com.push({type:"COM",codeGeo:c.id});
        });
        return Vue.http.post(baseRoute + '/geom/getGeom', com);
    },
    getGeomOfCommuneInDep: (depId) => {
        return Vue.http.get(baseRoute + '/geom/dep/' + depId + '/getGeomOfCommune');
    },
    getGeomOfCommuneFromList : (list) => {
        if(!list){
            list = [];
        }
        return Vue.http.post(baseRoute + '/geom/getCommunes',list);
    }
}