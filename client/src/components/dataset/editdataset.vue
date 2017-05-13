<template>
    <div class="container-fluid">
        <div class="row" id="head">
            <div class="col-md-2">
                <router-link to="/dataset" class="btn btn-default btn-lg">
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
                                    <router-link class="btn btn-info" to="">
                                        <span class ="glyphicon glyphicon-pencil"></span>
                                    </router-link>
                                    <button class="btn btn-danger">
                                        <span class ="glyphicon glyphicon-remove"></span>
                                    </button>
                                </div>
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
        name:'editdataset',
        computed:{
            dataset(){
                return this.$store.getters[DatasetTypes.GET_DATASET_LIST].filter(d => d.id == this.$route.params.id)[0]
            }
        },
        created:function(){
        }
    }
</script>