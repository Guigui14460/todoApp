<template>
  <main>
    <h1>Inscrivez-vous</h1>
    <form class="center" @submit.prevent="registerHandler()">
      <div class="form-field">
        <label for="name">Nom d'utilisateur : </label>
        <input type="text" name="name" id="name" v-model="name" required />
      </div>
      <div class="form-field">
        <label for="email">Adresse email : </label>
        <input type="email" name="email" id="email" v-model="email" required />
      </div>
      <div class="form-field">
        <label for="password">Mot de passe : </label>
        <input type="password" name="password" id="password" v-model="password" required />
      </div>
      <div class="form-field">
        <label for="confirmPassword">Confirmation du mot de passe : </label>
        <input type="password" name="confirmPassword" id="confirmPassword" v-model="confirmPassword" required />
      </div>
      <div v-if="message !== ''" class="message error-message">{{ message }}</div>
      <button type="submit" class="green">S'inscrire</button>
    </form>
    <p class="alternative-text">Déjà un compte ? <router-link :to="{name: 'login'}">Connectes-toi ici !</router-link></p>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "SignIn",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      message: "",
    };
  },
  methods: {
    ...mapActions("account", ["register"]),
    registerHandler() {
      if(this.password === this.confirmPassword){
        this.register({'name': this.name, 'email': this.email, 'password': this.password}).then(response => {
          if(response.status != 200){
            this.message = response.message;
          }
        });
      } else {
        this.message = "Les deux mots de passe sont différents";
      }
    },
  },
  computed: {
    ...mapGetters("account", ["isLoggedIn"]),
  },
  mounted() {
    if(this.isLoggedIn) {
      this.$router.replace("/");
    }
  },
}
</script>

<style scoped>
@import '../components/forms.css';
</style>