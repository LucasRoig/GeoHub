<template>
    <div class="container-fluid">
        <div class="row" id="head">
            <div class="col-md-2">
                <router-link to="/carte" class="btn btn-default btn-lg">
                    Retour carte
                </router-link>
            </div>
            <div class="col-md-10">
                <h1>Territoire</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="input-group input-group-lg">
                    <span class="input-group-addon">Rechercher un territoire</span>
                    <input v-model="query" type="text" class="form-control" placeholder="Nom de la ville">
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button" v-on:click="search">Allons y !</button>
                    </span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-10 col-md-offset-2">
                <h2>Resultat</h2>
            </div>
            <div class="col-md-8 col-md-offset-2" v-show="resultatRecherche.length > 0">
                <table class="table table-bordered table-responsive text-center">
                    <tbody>
                        <tr class="row" v-for="res,i in resultatRecherche">
                            <td class="col-md-5">
                                <p>{{res.nom}}</p>
                            </td>
                            <td class="col-md-5">
                                <p>{{res.id}}</p>
                            </td>
                            <td class="col-md-2">
                                <button class="btn btn-sm" type="button" v-on:click="addCommune(i)">Ajouter</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-md-8 col-md-offset-2" v-show="resultatRecherche.length <= 0">
                <p>Pas de résultats !</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h2 class="col-md-offset-2">Communes ajoutées</h2>
            </div>
            <div class="col-md-8 col-md-offset-2">
                <table class="table table-bordered table-responsive text-center">
                    <tbody>
                        <tr class="row" v-for="com, i in territoire">
                            <td class="col-md-10">
                                {{com.nom}}
                            </td>
                            <td class="col-md-2">
                                <button class="btn btn-sm" type="button"  v-on:click="removeCommune(i)">Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    import * as TerritoireTypes from '../../store/carte/territoireTypes'
    export default{
        name:'territoire',
        data (){
            return{
                query:""
            }
        },
        methods:{
          search(e){
              e.preventDefault();
              this.$store.dispatch(TerritoireTypes.RECHERCHE_TERRITOIRE,this.query);
          },
          addCommune(i){
              this.$store.dispatch(TerritoireTypes.ADD_COMMUNE,this.resultatRecherche[i]);
          },
          removeCommune(i) {
              this.$store.dispatch(TerritoireTypes.REMOVE_COMMUNE,this.territoire[i]);
          },
        },
        computed:{
          territoire:function(){
              return this.$store.getters[TerritoireTypes.GET_COMMUNES];
          },
          resultatRecherche:function () {
              return this.$store.getters[TerritoireTypes.GET_RESULT_RECHERCHE];
          }
        }
    }
</script>
<style>
    #searchResult {
        margin-top: 2rem;
    }

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

    .table-bordered {
        border-left: 0;
        border-right: 0;
    }

    p {
        margin: 0;
    }
</style>