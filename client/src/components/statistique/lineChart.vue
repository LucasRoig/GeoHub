<template>
    <canvas>{{data}}</canvas>
</template>
<script>
    import Chart from 'chart.js'
export default {
    props:['data','options'],
    name:'line-chart',
    data () {
        return {

        }
    },
    methods:{
        renderChart(){
            this.myChart = new Chart(this.$el, {
                type: 'line',
                data: this.data,
                options: this.options
            });
        }
    },
    mounted () {
        this.renderChart();
    },
    updated(){
        this.myChart.update();
    }
}
</script>