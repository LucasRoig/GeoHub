<template>
    <div class="container-fluid">
        <div class="row" id="head">
            <div class="col-md-2">
                <router-link :to="'/dataset/' + this.$route.params.datasetid" class="btn btn-default btn-lg">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    Retour
                </router-link>
            </div>
            <div class="col-md-6">
                <h1>{{variable.nom}}</h1>
            </div>
            <div class="col-md-2">
                <!-- //Tentative de modification du nom la variable//
                <div class="dropdown pull-right">
                    <button class="btn btn-default dropdown-toggle" type="button" id="renommer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Modifier le nom
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li>
                            <div class="input-group">
                                <input id="newname" type="text" class="form-control" placeholder="Nom"">
                                <span class="input-group-btn">
                                    <button v-on:click="renomme" class="btn btn-default" type="button">Ok</button>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>-->
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <table class="table table-bordered table-responsive text-center">
                    <thead>
                        <tr class="row">
                            <th class="col-md-5">
                                ID
                            </th>
                            <th class="col-md-5">
                                CodeGeo
                            </th>
                            <th class="col-md-5">
                                Valeur
                            </th>
                            <!--
                            <th class="col-md-2">
                                <button class="btn btn-primary pull-right">
                                    <span class ="glyphicon glyphicon-plus"></span>
                                </button>
                            </th>
                            -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="row" v-for="d in variable.donnees">
                            <td class="col-md-5">
                                <p>{{d.id}}</p>
                            </td>
                            <td class="col-md-5">
                                <p>{{d.codeGeo}}</p>
                            </td>
                            <td class="col-md-5">
                                <p>{{d.valeur}}</p>
                            </td>
                            <td class="col-md-2">
                                <button class="btn btn-danger pull-right" v-on:click='deleteDonnee(d.id)'>
                                    <span class ="glyphicon glyphicon-remove"></span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    import * as DatasetTypes from '../../store/dataset/datasetTypes'
    export default{
        name:'editvariable',
        methods:{
            /*renomme(){
                console.log($("input").val())
            },*/
            deleteDonnee(dataid){
                this.$store.dispatch(DatasetTypes.DELETE_DONNEE, dataid)
            }
        },
        computed:{
            variable(){
                return this.$store.getters[DatasetTypes.GET_DATASET_LIST].find(d => d.id == this.$route.params.datasetid).variables.find(v => v.id == this.$route.params.variableid)
            }
        },
        created:function(){
        }
    }
</script>
