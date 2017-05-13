<template>
<div class="container-fluid">
        <div class="row">
            <sidebar class="col-md-1"></sidebar>
            <div class="col-md-11">
                <v-map :style="{height: mapSize}" :zoom="zoom" :center="center" :maxZoom="maxzoom" :minZoom="minzoom">
                    <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
                    <v-geojson-layer :geojson="geojson" :options="options"></v-geojson-layer>
                    <!--<v-marker :lat-lng="marker"></v-marker>-->
                </v-map>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue2Leaflet from 'vue2-leaflet';
    import sidebar from './sidebar.vue';
    import CommuneService from '../../api/communeService'
    import * as CarteTypes from '../../store/carte/carteTypes'
    import DatasetService from '../../api/datasetService'
    export default{
        name:'carte',
        components: {
                'v-map': Vue2Leaflet.Map,
                'v-tilelayer' :Vue2Leaflet.TileLayer,
                'v-geojson-layer' :Vue2Leaflet.GeoJSON,
                'v-marker': Vue2Leaflet.Marker,
                sidebar
              },
        data () {
            let component = this;
            return {
                maxzoom:12,
                minzoom:6,
                zoom:6,
                center:[48, -1.219482],
                options: {
                    style: function (feature) {
                        console.log(component.variable)
                        let val = component.variable.donnees.filter(e => parseInt(e.codeGeo) == feature.id)[0].valeur;
                        let couleur = val > component.quintiles[3] ? '#800026':
                                      val > component.quintiles[2] ? '#BD0026':
                                      val > component.quintiles[1] ? '#E31A1C':
                                      val > component.quintiles[0] ? '#FC4E2A':
                                                                     '#FFEDA0';
                        console.log(couleur);
                        return {weight: 2,
                            color: '#000000',
                            opacity: 0.2,
                            fillColor: couleur,
                            //fillColor: '#000000',
                            fillOpacity: 0.5
                        }
                    }
                },
                url:'https://api.mapbox.com/styles/v1/drazcro/cj2kn8xad00272rnz8g80d8ei/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZHJhemNybyIsImEiOiJjajJsbTR5ZzIwMDBpMnFvN25qZ3B5Nzh4In0._BLUaFg4dTSlYyf-zqpM4g',
                //url:'https://api.mapbox.com/styles/v1/drazcro/cj2lp0czs000x2smtyc241wxo/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZHJhemNybyIsImEiOiJjajJsbTR5ZzIwMDBpMnFvN25qZ3B5Nzh4In0._BLUaFg4dTSlYyf-zqpM4g',
                attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                marker: L.latLng(47.413220, -1.219482)
            }
        },
        methods:{
            
        },
        computed:{
            mapSize(){
                console.log($(window).height());
                return ($(window).height() - 80)+'px';
            },
            geojson(){
                return this.$store.getters[CarteTypes.GET_POLYGONS];
            },
            variable(){
                return this.$store.getters[CarteTypes.GET_VARIABLE];
            },
            quintiles(){
                return this.$store.getters[CarteTypes.GET_QUINTILES];
            }
        },
        beforeCreate:function () {
            DatasetService.getAllDataset().then(response => {
                this.$store.dispatch(CarteTypes.SET_VARIABLE, response.body[0].variables[0]);
            })
        }
    }
</script>