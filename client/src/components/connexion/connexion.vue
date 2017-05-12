<template>
    <div class="container">
        <h1>Connexion</h1>
        <div class="col-md-offset-4 col-md-4">
            <div class="form-group">
                <p>Connectez-vous :</p>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="username" placeholder="Nom d'utilisateur">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="password" placeholder="Mot de passe"">
            </div>
            <div class="form-group">
                <button class="btn btn-default" name="submit" type="button">Se connecter</button>
            </div>
            <div class="form-group">
                <p>Vous êtes nouveau ?
                    <button class="btn btn-default" name="submit" type="button">S'inscrire</button>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'connexion'
    }
</script>