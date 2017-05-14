<template>
    <div class="container">
        <div class="row" id="head">
            <div class="col-md-2">
                <router-link to="/carte" class="btn btn-default btn-lg">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    Retour carte
                </router-link>
            </div>
            <div class="col-md-10">
                <h1>Définir un territoire</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-md-offset-2">
                    <v-select
                            :debounce="250"
                            :on-search="search"
                            :options="options"
                            v-model="selected"
                            placeholder="Chercher une commune"
                            label="nom"
                    >
                    </v-select>
            </div>
            <div class="col-md-2">
                <button class="btn btn-default " type="button" v-on:click="addCommune">
                    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Ajouter au territoire
                </button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h2 class="col-md-offset-2">Communes ajoutées</h2>
            </div>
            <div class="col-md-8 col-md-offset-2">
                <div class="alert alert-info chargement alert-ajout" role="alert">
                    <p>Chargement des données ...</p>
                </div>
                <table class="table table-bordered table-responsive text-center">
                    <tbody>
                    <tr class="row" v-for="com, i in territoire">
                        <td class="col-md-8">
                            {{com.nom}}
                        </td>
                        <td class="col-md-2">
                            {{com.id}}
                        </td>
                        <td class="col-md-2">
                            <button class="btn btn-sm" type="button" v-on:click="removeCommune(i)">Supprimer</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-md-8 col-md-offset-2" v-show="territoire.length <= 0">
                <div class="alert alert-warning" role="alert">
                    <p>Pas de territoires ajoutés !</p>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    import vSelect from "vue-select"
    import CommuneService from '../../api/communeService'
    import * as TerritoireTypes from '../../store/carte/territoireTypes'
    export default{
        name:'territoire',
        components: {vSelect},
        data(){
            return{
                options:[],
                selected:null,
            }
        },
        methods:{
            search(query,loading){
                loading(true);
                CommuneService.search(query)
                    .then(resp => {
                        this.options = resp.body;
                        loading(false);
                    })

            },
            addCommune() {
                if(this.selected) {
                    $('.alert-ajout').fadeIn(50);
                    this.$store.dispatch(TerritoireTypes.ADD_COMMUNE, this.selected);
                }
            },
            removeCommune(i) {
                if(this.territoire[i])
                    this.$store.dispatch(TerritoireTypes.REMOVE_COMMUNE,this.territoire[i]);
            },
        },
        computed:{
            territoire:function(){
                $('.alert-ajout').fadeOut(50);
                return this.$store.getters[TerritoireTypes.GET_COMMUNES];
            },
        }

    }
</script>