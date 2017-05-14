<template>
    <div class="container-fluid">
        <div class="row">
            <div class="dropdown">
                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Palettes de couleurs
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li v-for="p in [palette1, palette2, palette3, palette4]">
                        <div v-on:click="selectPalette(p)" class="progress">
                            <div v-for="c in p" class="progress-bar" :style="'width: 20%; background:'+c+''">
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import * as CarteTypes from '../../store/carte/carteTypes'
    export default{
        name:'editLegende',
        data () {
            let component = this;
            return {
                palette1 : ["#FFEDA0", "#FC4E2A", "#E31A1C", "#BD0026", "#800026"],
                palette2 : ["#FFEDA0", "#C0F97A", "#28D10E", "#0B9346", "#006047"],
                palette3 : ["#E2BFF2", "#C27DE0", "#9361A8", "#5F3172", "#462255"],
                palette4 : ["#EDE8CE", "#DDD292", "#CEBA48", "#998721", "#474016"]
            }
        },
        methods:{
            selectPalette(p) {
                this.$store.dispatch(CarteTypes.SET_PALETTE, p);
            }
        }
    }
</script>
<style>
    .progress:hover{
        cursor:pointer;
    }
</style>