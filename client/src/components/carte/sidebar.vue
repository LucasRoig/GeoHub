<template>
    <div class="btn-group-vertical" role="group" aria-label="...">
        <router-link to="/carte/territoire" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></router-link>
        <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
        <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>
    </div>
</template>
<script>
    export default{
        name: "sidebar",
        mounted: function() {$('[data-toggle="tooltip"]').tooltip()}
    }
</script>
<style>
    #sidebar {
        background-color: #353d47;
    }
</style>