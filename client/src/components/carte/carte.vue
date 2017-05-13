<template>
<div class="container-fluid">
        <div class="row">
            <sidebar class="col-md-1"></sidebar>
            <div class="col-md-11">
                {{variable.nom}}
                <v-map v-on:l-ready="go" :style="{height: mapSize}" :bounds="bounds">
                    <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
                    <v-geojson-layer :geojson="geojson" :options="options"></v-geojson-layer>
                    <!--
                    <v-control :construct="legendControl.construct" :params="legendControl.params"></v-control>
                    <v-control :construct="infoControl.construct" :params="infoControl.params"></v-control>
                    <!--<v-marker :lat-lng="marker"></v-marker>-->
                </v-map>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue2Leaflet from 'vue2-leaflet';
    import VControl from './control.vue';
    import sidebar from './sidebar.vue';
    import CommuneService from '../../api/communeService'
    import * as CarteTypes from '../../store/carte/carteTypes'
    import * as TerritoireTypes from '../../store/carte/territoireTypes'
    import DatasetService from '../../api/datasetService'
    export default{
        name:'carte',
        components: {
                'v-map': Vue2Leaflet.Map,
                'v-tilelayer' :Vue2Leaflet.TileLayer,
                'v-geojson-layer' :Vue2Leaflet.GeoJSON,
                'v-marker': Vue2Leaflet.Marker,
                sidebar,
                'v-control':VControl
              },
        data () {
            let component = this;
            return {
                options: {
                    onEachFeature:function(feature, layer) {
                        layer.on({
                            mouseover: function (e) {
                                var layer = e.target;
                                layer.setStyle({
                                    weight: 5,
                                    color: '#666',
                                    opacity:'1',
                                    dashArray: '',
                                    fillOpacity: 0.7
                                });

                                if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                                    layer.bringToFront();
                                }
                                component.infoControl.update(feature)
                            },
                            mouseout: function(e) {
                                var layer = e.target;
                                layer.setStyle({
                                    weight: 1,
                                    opacity: 1,
                                    color: 'white',
                                    dashArray: '3',
                                    fillOpacity: 0.7,
                                })
                                component.infoControl.update();
                            }
                        });
                    },
                    style: function (feature) {
                        let couleur = '#FFFFFF';
                        if(component.variable.donnees){
                            let donnee = component.variable.donnees.filter(e => parseInt(e.codeGeo) == feature.id)[0];
                            if(donnee){
                                let val = donnee.valeur;
                                couleur = val > component.quintiles[3] ? '#800026':
                                        val > component.quintiles[2] ? '#BD0026':
                                        val > component.quintiles[1] ? '#E31A1C':
                                        val > component.quintiles[0] ? '#FC4E2A':
                                                                        '#FFEDA0';
                            }
                        };
                        return {
                            weight: 1,
                            opacity: 1,
                            color: 'white',
                            dashArray: '3',
                            fillOpacity: 0.7,
                            fillColor: couleur
                        };
                    }
                },


                url:'https://api.mapbox.com/styles/v1/drazcro/cj2kn8xad00272rnz8g80d8ei/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZHJhemNybyIsImEiOiJjajJsbTR5ZzIwMDBpMnFvN25qZ3B5Nzh4In0._BLUaFg4dTSlYyf-zqpM4g',
                //url:'https://api.mapbox.com/styles/v1/drazcro/cj2lp0czs000x2smtyc241wxo/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZHJhemNybyIsImEiOiJjajJsbTR5ZzIwMDBpMnFvN25qZ3B5Nzh4In0._BLUaFg4dTSlYyf-zqpM4g',
                attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                marker: L.latLng(47.413220, -1.219482),

                legendControl:L.control({position: 'bottomright'}),

                infoControl:L.control({position:'topright'}),
            }
        },
        methods:{
            go(e){
                let component = this;
                let map = this.$children[1].mapObject;
                this.legendControl.onAdd = function(map){
                            console.log(this)
                                var div = L.DomUtil.create('div', 'info legend'),
                                    grades = component.quintiles,
                                    labels = [],
                                    from, to;
                                labels.push(
                                        '<i style="background:' + 'red;' + '"></i> ' +
                                        0 + '&ndash;' + grades[0]);
                                for (var i = 0; i < grades.length; i++) {
                                    from = grades[i];
                                    to = grades[i + 1];

                                    labels.push(
                                        '<i style="background:' + 'red;' + '"></i> ' +
                                        from + (to ? '&ndash;' + to : '+'));
                                }
                                div.innerHTML = labels.join('<br>');
                                return div;
                        },
                this.legendControl.addTo(map);
                //Info
                this.infoControl.onAdd = function (map) {
                    this._div = L.DomUtil.create('div', 'info');
                    this.update();
                    return this._div;
                };
                this.infoControl.update = function(feature){
                    let valeur;
                    if(component.variable.donnees && feature){
                            let donnee = component.variable.donnees.filter(e => parseInt(e.codeGeo) == feature.id)[0];
                            if(donnee){
                                valeur = donnee.valeur;
                            }
                    }
                    this._div.innerHTML = '<h4>'+component.variable.nom +'</h4>' +  (feature ?
                        '<b>' + feature.properties.nom + '</b>'+ ':' + valeur:'Hover over a state') + '<br>';
                };
                this.infoControl.addTo(map);

            }
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
            },
            bounds(){
                let bounds = [];
                if(this.geoJson != {}){
                    //let geoCopy = Object.assign({},this.geojson);
                    //console.log(geoCopy)
                    this.geojson.features.forEach(feature => {
                        feature.geometry.coordinates.forEach(polygon => {
                            polygon.forEach(linearRing => {
                                linearRing.forEach(coordonnee=>{
                                    bounds.push([coordonnee[1],coordonnee[0]])
                                })
                            })
                        })
                    })
                }
                if(bounds.length == 0){
                    return L.latLngBounds([51,4],[42.5,-4])
                }else{
                    return L.latLngBounds(bounds)
                }
            },
        },
        beforeCreate:function () {
            /*DatasetService.getAllDataset().then(response => {
                this.$store.dispatch(CarteTypes.SET_VARIABLE, response.body[0].variables[0]);
            })*/
            
        }
    }
</script>