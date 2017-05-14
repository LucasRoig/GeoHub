<template>
    <div class="container-fluid" id="loader">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="alert alert-info alert-ajout" id="alert" role="alert">
                    <p>Chargement des données ...</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'loader',
        methods: {
            generateHeight() {
                var h = $(window).height();
                var hA = $('#alert').height();
                $('#loader').css('height', h+'px');
                $('#alert').css('margin-top', ((h-hA)/2)+'px');
            },
        },
        mounted() {
            this.generateHeight();
        }
    }
</script>
<style>
    #loader {
        z-index: 10000;
        width: 100%;
        position: absolute;
        background: black;
        opacity: 0.8;
        top: 0;
    }
     #loader #alert {
         z-index: 10001;
     }
</style>