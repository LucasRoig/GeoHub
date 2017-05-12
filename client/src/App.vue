<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
export default {
  name: 'app',
  components:{
    Navbar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
body{
    font-size: 1.5em;
    font-weight: 400;
    line-height: 1.5;
    color: #292b2c;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    margin-bottom: .5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
}
h1, h2, h3, h4, h5 {
    font-weight: 300;
}
h2{
  font-size: 2em;
  padding-bottom: 1em;
}
h4{
  font-size: 1.5em;
}
</style>
