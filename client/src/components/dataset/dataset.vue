<template>
    <div class="container">
        <h1>Dataset</h1>
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
                    <tr class="row" v-for="d in datasetList">
                        <td class="col-md-10">
                            <p>{{d.nom}}</p>
                        </td>
                        <td class="col-md-2">
                            <div class="input-group-btn">
                                <router-link class="btn btn-info" :to="'/dataset/' + d.id">
                                    <span class ="glyphicon glyphicon-pencil"></span>
                                </router-link>
                                <button class="btn btn-danger" v-on:click='deleteDataset(d.id)'>
                                    <span class ="glyphicon glyphicon-remove"></span>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import * as DatasetTypes from '../../store/dataset/datasetTypes'
    export default{
        name:'dataset',
        methods:{
            deleteDataset(id){
                this.$store.dispatch(DatasetTypes.DELETE_DATASET,id);
            },
        },
        computed:{
            datasetList(){
                return this.$store.getters[DatasetTypes.GET_DATASET_LIST]
            }
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