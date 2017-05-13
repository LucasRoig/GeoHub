<template>
    <div class="container-fluid">
        <div class="row" id="head">
            <div class="col-md-2">
                <router-link to="/carte" class="btn btn-default btn-lg">
                    Retour carte
                </router-link>
            </div>
            <div class="col-md-10">
                <h1>Selection variables</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true" v-show="dataset.length > 0">
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingOne">
                            <div class="panel-title">
                                <a role="button" v-for="d, i in dataset" data-toggle="collapse" data-parent="#accordion" :href="'#'+d.id" aria-expanded="true" aria-controls="collapseOne">
                                    {{ d.nom }}
                                </a>
                            </div>
                        </div>
                        <div v-for="d, i in dataset" :id="d.id" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <table class="table table-bordered table-responsive text-center">
                                            <tbody>
                                                <tr class="row" v-for="v in d.variables">
                                                    <td class="col-md-7">
                                                        <p>{{ v.nom }}</p>
                                                    </td>
                                                    <td class="col-md-4">
                                                        <p>{{ v.codeVar }}</p>
                                                    </td>
                                                    <td class="col-md-2" v-if="v.id == variable.id">
                                                        <button class="btn btn-danger" v-on:click='changeEtatVariable(v, "masquer")'>
                                                            <span class ="glyphicon glyphicon-flag"></span> Masquer
                                                        </button>
                                                    </td>
                                                    <td class="col-md-2" v-else>
                                                        <button class="btn btn-info" v-on:click='changeEtatVariable(v, "afficher")'>
                                                            <span class ="glyphicon glyphicon-flag"></span> Afficher
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-md-offset-2" v-show="dataset.length <= 0">
                    <p>Pas de dataset enregistrés !</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import * as DatasetTypes from '../../store/dataset/datasetTypes'
    import * as CarteTypes from '../../store/carte/carteTypes'
    export default{
        name:'dataset',
        data (){
            return{
            }
        },
        methods:{
            changeEtatVariable(v, c){
                if (c == "afficher")
                    this.$store.dispatch(CarteTypes.SET_VARIABLE,v);
                else
                    this.$store.dispatch(CarteTypes.REMOVE_VARIABLE,v);
            },
        },
        computed:{
            dataset: function() {
                return this.$store.getters[DatasetTypes.GET_DATASET_LIST]
            },
            variable: function () {
                return this.$store.getters[CarteTypes.GET_VARIABLE]
            }
        },
        beforeCreate:function(){
            if(this.dataset = [])
                this.$store.dispatch(DatasetTypes.FETCH_DATASET);
        },
        
    }
</script>
<style>
    #head {
        margin-bottom: 2rem;
    }

    h1 {
        margin: 0;
    }

    td {
        height: 30px;
        line-height: 30px !important;
    }

    .table {
        margin: 0;
    }

    .table-bordered {
        border-left: 0;
        border-right: 0;
    }

    p {
        margin: 0;
    }
</style>