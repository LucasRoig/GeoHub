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
                <h1>Ajouter un dataset</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="input-group input-group-lg">
                    <span class="input-group-addon">Créer un dataset</span>
                    <input type="text" class="form-control" placeholder="Nom de votre dataset" v-model="form.nom">
                    <span class="input-group-btn" v-on:click="valider">
                        <button class="btn btn-default" type="button" >Créer !</button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import * as CreateDatasetFormTypes from '../../store/dataset/createDatasetFormTypes'
    export default{
        name:'dataset',
        data(){
            return{
                form:{
                    nom:""
                }
            }
        },
        methods:{
            valider(){
                this.$store.dispatch(CreateDatasetFormTypes.CREATE_DATASET,this.form)
            }
        }
    }
</script>
<style>
    #head {
        margin-bottom: 2rem;
    }
</style>