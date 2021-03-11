<template>
  <main>
    <h1>A propos de ce projet</h1>
    <section>
      <h2>Liste de membres du groupe</h2>
      <div>
        <ul>
          <li>BOCAGE Arthur 21806332</li>
          <li>LETELLIER Guillaume 21804030</li>
          <li>PIERRE Corentin 21803752</li>
          <li>PIGNARD Alexandre 21701890</li>
        </ul>
      </div>
    </section>
    <section>
      <h2>But de ce projet</h2>
      <p>Le but de ce projet est de créer une application de gestion de tâches en Vue.js uniquement.</p>
    </section>
    <section>
      <h2>Cette aplication permet d'éffectuer les tâches suivantes :</h2>
      <div>
        <ul>
          <li>Créer un compte ou s’authentifier à l'API pour récupérer ses informations et un token de connexion (qui sera utiliser dans tous les autres appels API)</li>
          <li>Créer une liste</li>
          <li>Afficher les listes</li>
          <li>Afficher les todos d’une liste</li>
          <li>Créer, modifier, compléter des todos</li>
          <li>Filtrer l’affichage des todos</li>
          <li>Afficher le nombre de todos non faites</li>
        </ul>
      </div> 
    </section>
    <section>
      <h2>Sources utilisées pour créer cette application</h2>
      <ul>
        <li>Cours reçu en cours magistral</li>
        <li><a href="https://medium.com/@hasanparasteh/ready-to-use-vue-js-navbar-bf79c43af6da" target="_blank">Cet article Medium</a> pour nous aider à créer la barre de navigation du haut</li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
li {
  margin-left: 10px;
}
</style>