<template>
    <div class="container-fluid">
        <div class="row" id="head">
            <div class="col-md-2">
                <router-link to="/carte" class="btn btn-default btn-lg">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    Retour
                </router-link>
            </div>
            <div class="col-md-10">
                <h1>Datasets</h1>
            </div>
        </div>
        <div class="col-md-offset-2 col-md-8">
            <table class="table table-bordered table-responsive text-center">
                <thead>
                    <tr class="row">
                        <th class="col-md-10">
                            Nom
                        </th>
                        <th class="col-md-2">
                            <router-link to="/dataset/ajouter" class="btn btn-primary pull-right">
                                <span class ="glyphicon glyphicon-plus"></span> Créer un dataset
                            </router-link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="row" v-for="d,i in datasetList">
                        <td class="col-md-10">
                            <p>{{d.nom}}</p>
                        </td>
                        <td class="col-md-2">
                            <div class="input-group-btn">
                                <router-link class="btn btn-info" :to="'/dataset/' + d.id">
                                    <span class ="glyphicon glyphicon-pencil"></span>
                                </router-link>
                                <button class="btn btn-danger"  v-on:click="showModal(i)">
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
                            Etes-vous sûr de vouloir supprimer le dataset ?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
                            <button type="button" class="btn btn-danger" v-on:click='deleteDataset(id)'>Supprimer</button>
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
        name:'dataset',
        data (){
            return{
                id: 0
            }
        },
        methods:{
            deleteDataset(id) {
                this.$store.dispatch(DatasetTypes.DELETE_DATASET,id);
                $('#myModal').modal('hide');
            },
            showModal(i) {
                this.id = this.datasetList[i].id;
                $('#myModal').modal('show');
            }
        },
        computed:{
            datasetList(){
                return this.$store.getters[DatasetTypes.GET_DATASET_LIST]
            }
        },
        mounted() {
            $('#myModal').on('shown.bs.modal', function () {
                $('body').focus()
            });
        },
        beforeCreate:function(){
            this.$store.dispatch(DatasetTypes.FETCH_DATASET)
        }
    }
</script>
<style>
    th {
        height: 30px;
        line-height: 30px !important;
    }

    td {
        height: 30px;
        line-height: 30px !important;
    }

    p {
        margin: 0;
    }

    .table-bordered {
        border-left: 0;
        border-right: 0;
    }
</style>