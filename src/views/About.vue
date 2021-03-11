<template>
<body>
  <h1>A propos</h1>
  <h2>Liste de membres du groupe</h2>
    <div>
        <ul>
            <li>LETELLIER Guillaume 21804030</li>
            <li>PIGNARD Alexandre 21701890</li>
            <li>PIERRE Corentin 21803752</li>
            <li>BOCAGE Arthur 21806332</li>
        </ul>
    </div>
    <h2>But de ce projet</h2>
    <p>Le but de ce projet est de créer une appliaction de gestion de tâches en Vue.js uniquement.</p>
      <h2>Cette aplication permet d'éffectuer les tâches suivantes :</h2>
    <div>
        <ul>
            <li>Créer un compte ou s’authentifier à l'API pour récupérer ses informations et un token de connexion (qui sera utiliser dans tous les autres appels API)</li>
            <li>Créer une liste</li>
            <li>Afficher les listes</li>
            <li>Afficher les todos d’une liste</li>
            <li>Créer, modifier, compléter, supprimer des todos</li>
            <li>Filtrer l’affichage des todos</li>
            <li>Afficher le nombre de todos non faites</li>
        </ul>
    </div> 
  </body>
</template>

<script>
export default {
    name: 'About',
    components: {},
};
</script>

<style scoped>
  
  body {
    background-color: rgb(44, 44, 44);
  }
  h1 {
    margin-left: 1%;
    font-family: Arial, sans serif;
  }
  h2 {
    margin-left: 1%;
    font-family: Arial, sans serif;
  }
  p {
    margin-left: 1%;
    font-family: Arial, sans serif;
  }

  li {
    font-family: Arial, sans serif;
  }

</style>