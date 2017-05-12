<template>
    <div class="container-fluid">
        <div class="row" id="head">
            <div class="col-md-2">
                <router-link to="/dataset" class="btn btn-default btn-lg">
                    Retour Dataset
                </router-link>
            </div>
            <div class="col-md-10">
                <h1>Édition</h1>
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
                                <button class="btn btn-primary pull-right">
                                    <span class ="glyphicon glyphicon-plus"></span>
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="row">
                            <td class="col-md-5">
                                <p>aaaaaaaaaaaaaa</p>
                            </td>
                            <td class="col-md-5">
                                <p>bbbbbbbbbbbbbb</p>
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
                       <tr class="row">
                            <td class="col-md-5">
                                <p>aaaaaaaaaaaaaa</p>
                            </td>
                            <td class="col-md-5">
                                <p>bbbbbbbbbbbbbb</p>
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
    export default{
        name:'editdataset'
    }
</script>