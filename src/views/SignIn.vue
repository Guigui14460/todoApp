<template>
  <h1>Connectez-vous</h1>
  <form @submit.prevent="loginHandler()">
      <div v-if="message !== ''" style="color: red;">{{ message }}</div>
      <label for="email">Adresse email : </label>
      <input type="email" name="email" id="email" v-model="email" required />
      <br>
      <label for="password">Mot de passe :   </label>
      <input type="password" name="password" id="password" v-model="password" required />
      <br>
      <button type="submit">Se connecter</button>
  </form>
  <p>Pas encore de compte ? <router-link :to="{name: 'register'}">Crées en maintement !</router-link></p>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

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
h1 {
  margin-left: 1%;
  font-family: Arial, sans serif;
}

p {
  margin-left: 1%;
  margin-top: 1%;
  font-family: Arial, sans serif;
}

form {
  margin-left: 1%;
  margin-top: 1%;
  font-family: Arial, sans serif;
}
button {
  margin-top: 1%;
  font-family: Arial, sans serif;
  background-color: #838383;
  border: none;
}
input {
  background-color: #838383;
  border: none;
}

br {
  margin-top: 1%;
}

a {
  color: white;
}
a:hover {
  color: #838383
}

</style>