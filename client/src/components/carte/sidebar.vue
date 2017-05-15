<template>
    <div class="btn-group-vertical" role="group" aria-label="...">
        <router-link to="/carte/territoire" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Selectionner des territoires à afficher sur la carte :)"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></router-link>
        <router-link to="/carte/selection-variables" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Sélectionner des variables."><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></router-link>
        <button v-on:click="emitEvent('s-edit')" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Modifier la légende."><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>
        <button v-on:click="emitEvent('s-center')" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Centrer sur le territoire"><span class="glyphicon glyphicon-screenshot" aria-hidden="true"></span></button>
    </div>
</template>
<script>
    export default{
        name: "sidebar",
        mounted: function() {$('[data-toggle="tooltip"]').tooltip({trigger:'hover'})},
        methods: {
            emitEvent(e) {
                this.$emit(e);
            }
        }
    }

</script>
<style>
    #sidebar {
        background-color: #353d47;
    }
</style>