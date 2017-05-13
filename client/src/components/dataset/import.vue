<template>
    <div class="container">
        <div class="row"  id="head">
            <h1>Importer un dataset</h1>
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
    </div>
</template>
<script>
    export default{
        name:'dataset',
        data() {
            return {
                files: {}
            }
        },
        methods: {
            importer(f) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    console.log(reader.result);
                };
                reader.readAsText(this.files);
            },
            change(f) {
                this.files = f.target.files[0];
            }
        }
    }
</script>
<style>
    #head {
        margin-bottom: 2rem;
    }
</style>