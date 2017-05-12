import Vue from 'vue';
import VueResource from 'vue-resource';
import Server from './server'

var baseRoute = Server.address;
Vue.use(VueResource);

export default{
    getAllCommune: () =>{
        return Vue.http.get(baseRoute + '/commune');
    }
}