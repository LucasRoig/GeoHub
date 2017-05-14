<template>
    <div class="btn-group-vertical" role="group" aria-label="...">
        <router-link to="/carte/territoire" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Selectionnez des territoires à afficher sur la carte :)"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></router-link>
        <router-link to="/carte/selection-variables" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Définissez des variables."><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></router-link>
        <button v-on:click="emitEvent" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Modifiez la légende."><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>
    </div>
</template>
<script>
    export default{
        name: "sidebar",
        mounted: function() {$('[data-toggle="tooltip"]').tooltip()},
        methods: {
            emitEvent() {
                console.log("emit");
                this.$emit('s-edit');
            }
        }
    }

</script>
<style>
    #sidebar {
        background-color: #353d47;
    }
</style>