import Vue from 'vue';
import VueResource from 'vue-resource';
import Server from './server';

let baseRoute = Server.address;
Vue.use(VueResource);

export default{
    getAllCommune: () =>{
        return Vue.http.get(baseRoute + '/commune');
    },
    getGeom: (id) =>{
        return Vue.http.get(baseRoute + '/commune/' + id + '/geom');
    },
    getCommune: (id) => {
        return Vue.http.get(baseRoute + '/commune/' + id);
    },
    search: (str) => {
        return Vue.http.get(baseRoute + '/recherche/territoire/' + str);
    }
}