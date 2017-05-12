<template>
    <div class="container-fluid">
        <div class="row" id="head">
            <div class="col-md-2">
                <router-link to="/carte" class="btn btn-default btn-lg"></router-link>
            </div>
            <div class="col-md-10">
                <h1>Territoire</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="input-group input-group-lg">
                    <span class="input-group-addon">Rechercher un territoire</span>
                    <input type="text" class="form-control" placeholder="Nom de la ville">
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button">Allons y !</button>
                    </span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-10 col-md-offset-2">
                <h2>Resultat</h2>
            </div>
            <div class="col-md-8 col-md-offset-2">
                <table class="table table-bordered table-responsive text-center">
                    <tbody>
                    <tr class="row">
                        <td class="col-md-5">
                            <p>bbrgreve</p>
                        </td>
                        <td class="col-md-5">
                            <p>qsdssdq</p>
                        </td>
                        <td class="col-md-2">
                            <button class="btn btn-sm" type="button">Ajouter</button>
                        </td>
                    </tr>
                    <tr class="row">
                        <td class="col-md-5">
                            <p>bbrgreve</p>
                        </td>
                        <td class="col-md-5">
                            <p>qsdssdq</p>
                        </td>
                        <td class="col-md-2">
                            <button class="btn btn-sm" type="button">Ajouter</button>
                        </td>
                    </tr>
                    <tr class="row">
                        <td class="col-md-5">
                            <p>bbrgreve</p>
                        </td>
                        <td class="col-md-5">
                            <p>qsdssdq</p>
                        </td>
                        <td class="col-md-2">
                            <button class="btn btn-sm" type="button">Ajouter</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h2 class="col-md-offset-2">Communes ajoutées</h2>
            </div>
            <div class="col-md-8 col-md-offset-2">
                <table class="table table-bordered table-responsive text-center">
                    <tbody>
                        <tr class="row">
                            <td class="col-md-10">
                                machin
                            </td>
                            <td class="col-md-2">
                                <button class="btn btn-sm" type="button">Supprimer</button>
                            </td>
                        </tr>
                        <tr class="row">
                            <td class="col-md-10">
                                machin
                            </td>
                            <td class="col-md-2">
                                <button class="btn btn-sm" type="button">Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'territoire'
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