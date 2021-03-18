<template>
  <main>
    <h1>Connectez-vous</h1>
    <form class="center" @submit.prevent="loginHandler()">
      <div class="form-field">
        <label for="email">Adresse email : </label>
        <input type="email" name="email" id="email" v-model="email" required />
      </div>
      <div class="form-field">
        <label for="password">Mot de passe :   </label>
        <input type="password" name="password" id="password" v-model="password" required />
      </div>
      <div v-if="message !== ''" class="message error-message">{{ message }}</div>
      <button type="submit" class="blue">Se connecter</button>
    </form>
    <p class="alternative-text">Pas encore de compte ? <router-link :to="{name: 'register'}">Crées en maintement !</router-link></p>
  </main>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      message: "",
    };
  },
  methods: {
    ...mapActions("account", ["login"]),
    loginHandler() {
      this.login({'email': this.email, 'password': this.password}).then(response => {
        if(response.status != 200){
          this.message = response.message;
        }
      });
    },
  },
}
</script>

<style scoped>
@import '../components/forms.css';
@import '../components/buttons.css';
</style>
