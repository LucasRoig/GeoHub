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
                <h1>Importer un dataset</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="input-group input-group-lg">
                    <span class="input-group-addon">Importer un dataset</span>
                    <input type="file" v-on:change="change" class="form-control">
                    <span class="input-group-btn">
                        <button class="btn btn-default" v-on:click="importer" type="button">Créer !</button>
                    </span>
                </div>
            </div>
        </div>
            
        <!--
        <div v-show="importedVariable.length != 0 && !isSending">
            <table class="table table-responsive table-striped">
                <thead>
                    <th>Nom Variable</th>
                    <th>Code Variable</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr v-for="v in importedVariable">
                        <td>{{v.nom}}</td>
                        <td>{{v.codeVar}}</td>
                    </tr>
                </tbody>
            </table>
            <button class="btn btn-primary" v-on:click='sendToServer'>Envoyer vers le serveur</button>
        </div>
        -->
        <div v-show="isSending">
            <div class="progress">
                <div class="progress-bar progress-bar-striped active" role="progressbar"
                aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" :style="{width: progress + '%'}">
                    {{progress + "%"}}
                </div>
            </div>
        </div>

        
    </div>
</template>
<script>
    import * as ImportVariableTypes from '../../store/variable/importVariableTypes'
    export default{
        name:'dataset',
        data() {
            return {
                files: {}
            }
        },
        methods: {
            importer(f) {
                this.$store.dispatch(ImportVariableTypes.PARSE_FILE,{file:this.files,datasetId:this.$route.params.id})
            },
            change(f) {
                this.files = f.target.files[0];
            },
            sendToServer(e){
                //this.$route.params.id est l'id du dataset dans lequel on veut ajouter les variables.
                this.$store.dispatch(ImportVariableTypes.SEND_TO_SERVER,this.$route.params.id)
            }
        },
        computed:{
            /*importedVariable(){
                return this.$store.getters[ImportVariableTypes.GET_IMPORTED_VARIABLES]
            },*/
            isSending(){
                return this.$store.getters[ImportVariableTypes.IS_SENDING]
            },
            progress(){
                return this.$store.getters[ImportVariableTypes.GET_PROGRESS]
            }
        }
    }
</script>
<style>
    #head {
        margin-bottom: 2rem;
    }
</style>