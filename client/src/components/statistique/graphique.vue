<template>
    <div class="container">
        <h2>
            Statisques
        </h2>
        <v-select
            :options="chartTypes"
            v-model="selectedChart"
        >
        </v-select>

        <div v-show="selectedChart == 'Histogramme'">
            <bar-chart-comp></bar-chart-comp>
        </div>

        <div v-show="selectedChart == 'Ligne'">
            <line-chart-comp></line-chart-comp>
        </div>
    </div>
</template>
<script>
    import * as DatasetTypes from '../../store/dataset/datasetTypes'
    import * as TerritoireTypes from '../../store/carte/territoireTypes'
    import BarChartComp from './barChartComp.vue'
    import LineChartComp from './lineChartComp.vue'
    import BarChart from './barChart.vue'
    import LineChart from './lineChart.vue'
    import vSelect from "vue-select"
export default{
    name:'graphique',
    components:{
        BarChartComp,
        LineChartComp,
        BarChart,
        LineChart,
        vSelect
    },
    data(){
        return{
            selectedChart:"Histogramme",
            chartTypes:["Histogramme","Ligne"],
            selectedDataset:null,
            selectedVariable:null,
            selectedDataset2:null,
            selectedVariable2:null,
            dataObject:{
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
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
            }
        }
    },
    methods:{
        updateBarChart(val){
            if(!val) return;
            let backgroundColor = 'rgba(255, 99, 132, 0.2)';
            let borderColor = 'rgba(255,99,132,1)';
            let backColorList = [];
            let borderColorList = [];
            let labelsVille = [];
            let label = val.nom;
            let data = [];
            let donnees = val.donnees;
            console.log("ici")
            this.territoire.forEach(v => {
                labelsVille.push(v.nom);
                let d = donnees.find(d => d.codeGeo == v.id);
                console.log(d)
                data.push(d.valeur);
                backColorList.push(backgroundColor);
                borderColorList.push(borderColor);
            })

            this.dataObject.labels = labelsVille;
            this.dataObject.datasets = [{
                label: label,
                data:data,
                backgroundColor: backColorList,
                borderColor: borderColorList,
                borderWidth: 1
            }]
            console.log(this.dataObject)
        },
        updateLineChart(val){
            if(!val) return;
            let label = val.nom,
                donneeX = val.donnees,
                donneeY = this.selectedVariable.donnees,
                data = [];
            this.territoire.forEach(v => {
                if(v.type == "DEP"){
                    
                }
                let x = donneeX.find(d => d.codeGeo == v.id).valeur;
                let y = donneeY.find(d => d.codeGeo == v.id).valeur;
                data.push({x:x,y:y});
            })
            this.dataObject.labels = [];
            this.dataObject.datasets = [{
                    label: label,
                    data: data
                }];
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
    created:function(){
        if(this.dataset.length == 0){
            this.$store.dispatch(DatasetTypes.FETCH_DATASET)
        }
        this.selectedDataset = this.dataset[0]
    }
}
</script>