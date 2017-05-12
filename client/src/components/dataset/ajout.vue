<template>
    <div class="container">
        <div class="row"  id="head">
            <h1>Ajouter un dataset</h1>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="input-group input-group-lg">
                    <span class="input-group-addon">Créer un dataset</span>
                    <input type="text" class="form-control" placeholder="Nom de votre dataset">
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button" v-on:change="">Créer !</button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'dataset'
    }
</script>
<style>
    #head {
        margin-bottom: 2rem;
    }
</style>