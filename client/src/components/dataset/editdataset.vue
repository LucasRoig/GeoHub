<template>
    <div class="container-fluid">
        <div class="row" id="head">
            <div class="col-md-2">
                <router-link to="/dataset" class="btn btn-default btn-lg">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    Retour
                </router-link>
            </div>
            <div class="col-md-10">
                <h1>{{dataset.nom}}</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <table class="table table-bordered table-responsive text-center">
                    <thead>
                        <tr class="row">
                            <th class="col-md-5">
                                Nom
                            </th>
                            <th class="col-md-5">
                                Code
                            </th>
                            <th class="col-md-2">
                                <router-link class="btn btn-primary pull-right" :to="'/dataset/' + dataset.id + '/importVariables'">
                                    <span class ="glyphicon glyphicon-plus"></span> Importer des variables
                                </router-link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="row" v-for="v in dataset.variables">
                            <td class="col-md-5">
                                <p>{{v.nom}}</p>
                            </td>
                            <td class="col-md-5">
                                <p>{{v.codeVar}}</p>
                            </td>
                            <td class="col-md-2">
                                <div class="input-group-btn">
                                    <router-link :to="dataset.id + '/' + v.id" class="btn btn-info">
                                        <span class ="glyphicon glyphicon-pencil"></span>
                                    </router-link>
                                    <button class="btn btn-danger" v-on:click='showModal(v.id)'>
                                        <span class ="glyphicon glyphicon-remove"></span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- Modal -->
                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h2 class="modal-title" id="myModalLabel">Confirmez votre choix</h2>
                            </div>
                            <div class="modal-body">
                                Etes-vous sûr de vouloir supprimer la variable ?
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
                                <button type="button" class="btn btn-danger" v-on:click='deleteVariable(id)'>Supprimer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import * as DatasetTypes from '../../store/dataset/datasetTypes'
    export default{
        name:'editdataset',
        data() {
            return {
                id: 0,
            }
        },
        methods:{
            deleteVariable(varid){
                this.$store.dispatch(DatasetTypes.DELETE_VARIABLE, varid);
                $('#myModal').modal('hide');
            },
            showModal(i) {
                this.id = i;
                $('#myModal').modal('show');
            },
        },
        computed:{
            dataset(){
                return this.$store.getters[DatasetTypes.GET_DATASET_LIST].find(d => d.id == this.$route.params.id)
            }
        },
        created:function(){
        }
    }
</script>