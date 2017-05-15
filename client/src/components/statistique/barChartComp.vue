<template>
    <div class="row">
                <div class="col-md-6">
                    <v-select
                        :options="dataset"
                        v-model="selectedDataset"
                        :on-change="datasetChanged"
                        label="nom"
                    ></v-select>
                </div>
                <div class="col-md-6" v-if="selectedDataset">
                    <v-select
                        :options="selectedDataset.variables"
                        v-model="selectedVariable"
                        :on-change="variableChanged"
                        label="nom"
                    ></v-select>
                </div>
            <bar-chart :dataObject="dataObject" :options="options" style="width: 512px; height: 256px"></bar-chart>
    </div>
</template>
<script>
    import CommuneService from '../../api/communeService'
    import BarChart from'./barChart.vue'
    import * as DatasetTypes from '../../store/dataset/datasetTypes'
    import * as TerritoireTypes from '../../store/carte/territoireTypes'
    import vSelect from "vue-select"
export default{
    name:'bar-char-comp',
    components:{
        BarChart,
        vSelect
    },
    data(){
        return{
            options:{},
            dataObject:{
                labels:[],
                datasets:[{
                    label:"",
                    data:[],
                    borderWidth:1,
                }],

            },
            selectedDataset:null,
            selectedVariable:null
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
        clearChart(){
            console.log('clear');
            this.dataObject.labels = [];
            this.dataObject.datasets = [{
                label:"",
                data:[],
                borderWidth:1,
            }];
        },
        datasetChanged(d){
            this.selectedDataset = d
            this.selectedVariable = null
            this.clearChart();
        },
        variableChanged(d){
            console.log('variableChanged'); 
            this.selectedVariable = d;
            this.clearChart();
            if(d){
                this.dataObject.datasets[0].label = d.nom;
                this.updateChart();
            }
        },
        addCommuneToChart(commune){
            if(commune && this.selectedVariable){
                let valeur = this.selectedVariable.donnees.find(d => d.codeGeo == commune.id).valeur;
                if(valeur){
                    this.dataObject.labels.push(commune.nom);
                    this.dataObject.datasets[0].data.push(valeur);
                }
            }
        },
        updateChart(){
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
