<template>
    <div class="container">
        <h1>Inscription</h1>
        <div class="col-md-offset-4 col-md-4">
            <div class="form-group">
                <p>Inscrivez-vous :</p>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="username" placeholder="Nom d'utilisateur">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="password" placeholder="Mot de passe">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="conf_password" placeholder="Confirmez le mot de passe">
            </div>
            <div class="form-group">
                <button class="btn btn-default" name="validate" type="button">Valider</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'inscription'
    }
</script>