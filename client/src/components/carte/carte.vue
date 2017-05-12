<template>
<div class="container-fluid">
        <div class="row">
            <sidebar class="col-md-1"></sidebar>
            <div class="col-md-11">
                <v-map :style="{height: mapSize}" :zoom="zoom" :center="center" :maxZoom="maxzoom" :minZoom="minzoom">
                    <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
                    <!--<v-geojson-layer :geojson="geojson" :options="options"></v-geojson-layer>
                    <v-marker :lat-lng="marker"></v-marker>-->
                </v-map>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue2Leaflet from 'vue2-leaflet';
    import sidebar from './sidebar.vue';
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
            return {
              maxzoom:9,
              minzoom:6,
              zoom:6,
              center:[48, -1.219482],
              options: {
                style: function () {
                  return {
                    weight: 2,
                    color: '#ECEFF1',
                    opacity: 1,
                    fillColor: '#e4ce7f',
                    fillOpacity: 1
                  }
                }
              },
              url:'https://api.mapbox.com/styles/v1/drazcro/cj2kn8xad00272rnz8g80d8ei/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZHJhemNybyIsImEiOiJjajJsbTR5ZzIwMDBpMnFvN25qZ3B5Nzh4In0._BLUaFg4dTSlYyf-zqpM4g',
              //url:'https://api.mapbox.com/styles/v1/drazcro/cj2lp0czs000x2smtyc241wxo/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZHJhemNybyIsImEiOiJjajJsbTR5ZzIwMDBpMnFvN25qZ3B5Nzh4In0._BLUaFg4dTSlYyf-zqpM4g',
              attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
              marker: L.latLng(47.413220, -1.219482),
            }
          },
        computed:{
            mapSize(){
                console.log($(window).height());
                return ($(window).height() - 80)+'px';
            }
        }
    }
</script>