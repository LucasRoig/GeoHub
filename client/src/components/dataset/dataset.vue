<template>
    <div class="container-fluid">
        <h1>Dataset</h1>
        <div class="col-md-offset-1 col-md-10">
            <table class="table table-bordered table-responsive text-center">
                <thead>
                    <tr class="row">
                        <th class="col-md-3">
                            Nom
                        </th>
                        <th class="col-md-3">
                            Utilisateur
                        </th>
                        <th class="col-md-3">
                            Variables
                        </th>
                        <th class="col-md-3">
                            ?
                        </th>
                        <th class="col-md-2">
                            <router-link to="/dataset/ajouter" class="btn btn-primary pull-right">
                                <span class ="glyphicon glyphicon-plus"></span>
                            </router-link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="row">
                        <td class="col-md-3">
                            <p>aaaaaaaaaaaaaa</p>
                        </td>
                        <td class="col-md-3">
                            <p>bbbbbbbbbbbbbb</p>
                        </td>
                        <td class="col-md-3">
                            <p>cccccccccccccc</p>
                        </td>
                        <td class="col-md-3">
                            <p>dddddddddddddd</p>
                        </td>
                        <td class="col-md-2">
                            <div class="input-group-btn">
                                <button class="btn btn-info">
                                    <span class ="glyphicon glyphicon-pencil"></span>
                                </button>
                                <button class="btn btn-danger">
                                    <span class ="glyphicon glyphicon-remove"></span>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr class="row">
                        <td class="col-md-3">
                            <p>aaaaaaaaaaaaaa</p>
                        </td>
                        <td class="col-md-3">
                            <p>bbbbbbbbbbbbbb</p>
                        </td>
                        <td class="col-md-3">
                            <p>cccccccccccccc</p>
                        </td>
                        <td class="col-md-3">
                            <p>dddddddddddddd</p>
                        </td>
                        <td class="col-md-2">
                            <div class="input-group-btn">
                                <button class="btn btn-info">
                                    <span class ="glyphicon glyphicon-pencil"></span>
                                </button>
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
</template>
<script>
    export default{
        name:'dataset'
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