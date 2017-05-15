<template>
    <canvas>{{dataObject}}</canvas>
</template>
<script>
    import Chart from 'chart.js'
export default {
    props:['dataObject','options'],
    name:'bar-chart',
    data () {
        return {
            
        }
    },
    methods:{
        renderChart(){
            this.myChart = new Chart(this.$el, {
                type: 'bar',
                data: this.dataObject,
                options: this.options
            });
        },
    },
    mounted(){
        this.renderChart();
    },
    updated(){
        console.log(this.dataObject)
        this.myChart.update();
    }
}
</script>