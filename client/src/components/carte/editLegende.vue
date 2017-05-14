<template>
    <div class="container-fluid" id="legende">
        <div class="row">
            <div class="col-md-2">
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
            <div class="col-md-10">
                <div id="slider">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import * as CarteTypes from '../../store/carte/carteTypes'
    import noUiSlider from 'nouislider'
    export default{
        name:'editLegende',
        data () {
            let component = this;
            return {
                palette1 : ["#FFEDA0", "#FC4E2A", "#E31A1C", "#BD0026", "#800026"],
                palette2 : ["#FFEDA0", "#C0F97A", "#28D10E", "#0B9346", "#006047"],
                palette3 : ["#E2BFF2", "#C27DE0", "#9361A8", "#5F3172", "#462255"],
                palette4 : ["#EDE8CE", "#DDD292", "#CEBA48", "#998721", "#474016"],
            }
        },
        methods:{
            getNewQuintiles() {
                var tooltips = $('.noUi-tooltip');
                var nq = [];
                for (var i = 0; i < tooltips.length; ++i) {
                    nq.push(parseInt($(tooltips[i]).text()));
                }
                return nq;
            },
            setQuintiles(q) {
                this.$store.dispatch(CarteTypes.SET_QUINTILES, q);
            },
            selectPalette(p) {
                this.$store.dispatch(CarteTypes.SET_PALETTE, p);
                this.$emit('s-change-palette',p);
            },
            getMaxValue() {
                var donnees = this.variable.donnees;
                if(!donnees) {
                    return -1;
                }
                var max = 0;
                for(var i = 0; i < donnees.length; i++) {
                    if(donnees[i].valeur > max) {
                        max = donnees[i].valeur
                    }
                }
                return max;
            },
            createSlider() {
                var slider =  document.getElementById('slider');
                var couleurs = this.palette;
                var max = this.getMaxValue();
                if(!(max >= 0))
                    max = this.quintiles[3];
                var format = {
                    to: v => parseInt(v),
                    from: v => parseInt(v)
                };
                noUiSlider.create(slider, {
                    start: this.quintiles,
                    step: 1,
                    connect: [true, true, true, true, true],
                    tooltips: [format, format, format, format],
                    range: {
                        'min':  0,
                        '20%': this.quintiles[0],
                        '40%': this.quintiles[1],
                        '60%': this.quintiles[2],
                        '80%': this.quintiles[3],
                        'max':  max,
                    }
                });
                var connect = slider.querySelectorAll('.noUi-connect');
                //var classes = ['c-1-color', 'c-2-color', 'c-3-color', 'c-4-color', 'c-5-color'];
                for (var i = 0; i < connect.length; i++) {
                    $(connect[i]).css('background', couleurs[i]);
                   // connect[i].classList.add(classes[i]);
                    //$('.'+classes[i]).css('background', couleurs[i]);
                }
            },
            updateSlider(){
                var couleurs = this.palette;
                var connect = slider.querySelectorAll('.noUi-connect');
                //var classes = ['c-1-color', 'c-2-color', 'c-3-color', 'c-4-color', 'c-5-color'];
                for (var i = 0; i < connect.length; i++) {
                    $(connect[i]).css('background', couleurs[i]);
                    // connect[i].classList.add(classes[i]);
                    //$('.'+classes[i]).css('background', couleurs[i]);
                }
            }
        },
        watch:{
            palette(newPalette){
                this.updateSlider();
            }
        },
        computed: {
            palette:function(){
                return this.$store.getters[CarteTypes.GET_PALETTE];

            },
            quintiles:function(){
                return this.$store.getters[CarteTypes.GET_QUINTILES];

            },
            variable(){
                return this.$store.getters[CarteTypes.GET_VARIABLE];
            },
        },
        mounted() {
            let component = this;
            this.createSlider();
            slider.noUiSlider.on('change', function() {
                var nq = component.getNewQuintiles();
                component.setQuintiles(nq);
                component.$emit('s-change');
            });
        },
    }
</script>
<style>
    .progress:hover{
        cursor:pointer;
    }

    #slider {
        margin-top: 3rem;
    }

    .dropdown {
        margin-top: 2rem;
    }

    #legende {
        margin-bottom: 2rem;
    }

    .dropdown-menu {
        padding: 0;
        z-index: 10000;
    }

    .progress {
        margin: 0;
    }
</style>