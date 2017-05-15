<template>
    <div>
        <div class="row">
                <div class="col-md-6">
                    <v-select
                        :options="dataset"
                        v-model="selectedDatasetX"
                        :on-change="datasetXChanged"
                        label="nom"
                    ></v-select>
                </div>
                <div class="col-md-6" v-if="selectedDatasetX">
                    <v-select
                        :options="selectedDatasetX.variables"
                        v-model="selectedVariableX"
                        :on-change="variableXChanged"
                        label="nom"
                    ></v-select>
                </div>
            </div>
            <div class="row" v-show="selectedVariableX">
                <div class="col-md-6">
                    <v-select
                        :options="dataset"
                        v-model="selectedDatasetY"
                        :on-change="datasetYChanged"
                        label="nom"
                    ></v-select>
                </div>
                <div class="col-md-6" v-if="selectedDatasetY">
                    <v-select
                        :options="selectedDatasetY.variables"
                        v-model="selectedVariableY"
                        :on-change="variableYChanged"
                        label="nom"
                    ></v-select>
                </div>
            </div>
            <line-chart :data="dataObject" :options="options"></line-chart>
    </div>
</template>
<script>
    import CommuneService from '../../api/communeService'
    import LineChart from'./lineChart.vue'
    import * as DatasetTypes from '../../store/dataset/datasetTypes'
    import * as TerritoireTypes from '../../store/carte/territoireTypes'
    import vSelect from "vue-select"
    export default{
        name:'ligne-chart-com',
        components:{
            LineChart,
            vSelect
        },
        data(){
            return{
                selectedDatasetX: null,
                selectedDatasetY: null,
                selectedVariableX:null,
                selectedVariableY:null,
                options:{
                    showLine:false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }],
                        xAxes: [{
                            type: 'linear',
                            position: 'bottom'
                        }]
                    }
                },
                dataObject:{
                    datasets:[
                        {   
                            fill : false,
                            data:[],
                            showLine:false
                        }
                    ]
                },
            }
        },
        computed:{
            dataset(){
                return this.$store.getters[DatasetTypes.GET_DATASET_LIST] 
            },
            territoire(){
                return this.$store.getters[TerritoireTypes.GET_COMMUNES]
            }
        },
        methods:{
            datasetXChanged(d){
                this.clearChart();
                this.selectedDatasetX = d;
                this.selectedVariableX = null;
            },
            datasetYChanged(d){
                this.clearChart();
                this.selectedDatasetY = d;
                this.selectedVariableY = null;
            },
            variableXChanged(d){
                this.clearChart();
                this.selectedVariableX = d;
                if(d && this.selectedVariableY){
                    this.updateChart();
                }
            },
            variableYChanged(d){
                this.clearChart();
                this.selectedVariableY = d;
                if(d && this.selectedVariableX){
                    this.updateChart();
                }
            },
            clearChart(){
                console.log('clear');
                this.dataObject.datasets = [{
                    data:[],
                    fill:false,
                    showLine:false
                }];
            },
            addCommuneToChart(commune){
                if(commune && this.selectedVariableX && this.selectedVariableY){
                    let valeurX = this.selectedVariableX.donnees.find(d => d.codeGeo == commune.id);
                    let valeurY = this.selectedVariableY.donnees.find(d => d.codeGeo == commune.id);
                    if(valeurX && valeurY){
                        this.dataObject.datasets[0].data.push({x:valeurX.valeur,y:valeurY.valeur});
                    }
                }
            },
            updateChart(){
                this.dataObject.datasets[0].label = "X : " + this.selectedVariableX.nom + " Y : " + this.selectedVariableY.nom
                this.territoire.forEach(t => {
                    if(t.type == "COM"){
                        this.addCommuneToChart(t);
                    }else if(t.type == "DEP"){
                        CommuneService.getComuneOfDep(t.id)
                        .then(res => {
                            res.body.forEach( com => {
                                this.addCommuneToChart(com);
                            })
                        })
                    }
                });
            }
        }
    }
</script>
