<template>
    <nav class="navbar navbar-inverse">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Cartographie</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to='/carte' class="nav-link">Carte</router-link></li>
            <li><router-link to='/graphique' class="nav-link">Graphique</router-link></li>
            <li><router-link to='/dataset'>Datasets</router-link></li>
            <!--<li><router-link to='/connexion'>Connexion</router-link></li>-->
          </ul>
        </div>
    </nav>
</template>
<script>
    export default{
        name:'navbar'
    }
</script>
<style>
  
  .navbar{
    background-color: #353d47;
    padding: 0.2em 1em;
    border-radius: 0px;
  }
  .navbar-inverse .navbar-brand {
    color: #FFFFFF;
  }
  .navbar-inverse .navbar-nav .nav-link{
    color: rgba(255,255,255,.5);
    font-weight: 400;
  }
</style>