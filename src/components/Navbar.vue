<template>
  <nav>
    <router-link :to="{name: 'home'}" @click.passive="closeMobileNav()" style="text-decoration: none; font-size: 20px;">
      <span id="logo">Tout doux App</span>
    </router-link>
    <ul class="nav-links">
      <li v-if="isLoggedIn" class="nav-link">
        <router-link @click.passive="closeMobileNav()" :to="{name: 'home'}">Accueil</router-link>
      </li>
      <li class="nav-link">
        <router-link @click.passive="closeMobileNav()" :to="{name: 'about'}">A propos</router-link>
      </li>
      <li class="nav-link">
        <a v-if="isLoggedIn" @click.passive="closeMobileNav()" href="" @click="logout()">Déconnexion</a>
        <router-link v-else @click.passive="closeMobileNav()" :to="{name: 'login'}">Connexion</router-link>
      </li>
    </ul>
    <div v-on:click="toggleMobileNav()" id="burger">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  methods: {
    ...mapActions("account", ["getAccountData", "logout"]),
    toggleMobileNav() {
      if(document.body.clientWidth <= 768){
        document.getElementById('burger').classList.toggle('toggle');
        document.querySelector('.nav-links').classList.toggle('nav-active');
      }
    },
    closeMobileNav() {
      if(document.getElementById('burger').classList.contains("toggle")){
        document.getElementById('burger').classList.remove("toggle");
        document.querySelector('.nav-links').classList.remove('nav-active');
      }
    },
  },
  computed: {
    ...mapGetters("account", ['isLoggedIn']),
  },
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #c53737;
  height: 55px;
  padding: 0 20px;
}

.nav-links {
  display: flex;
  list-style: none;
}
.nav-links a {
  text-decoration: none;
  color: #fefefe;
  font-weight: 600;
  display: block;
  margin: 0;
  padding: 0;
}
.nav-links a.router-link-exact-active,
.nav-links a:hover,
.nav-links a:focus {
  color: #cccccc;
}

.nav-link {
  display: block;
}
.nav-link:not(:last-child) {
  margin-right: 10px;
}

#burger {
  display: none;
  cursor: pointer;
}
#burger div {
  width: 30px;
  height: 3px;
  margin: 8px;
  background-color: #fefefe;
  transition: all 0.3s ease-in;
}

.nav-active {
  transform: translateX(0) !important;
}
.toggle .line1 {
  transform: rotate(-45deg) translate(-9px, 10px);
}
.toggle .line2 {
  opacity: 0;
}
.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}

/* Mobile */
@media screen and (max-width: 768px) {
  nav {
    width: 100%;
    padding: 0;
    position: fixed;
    z-index: 10;
  }

  #logo {
    margin-left: 10px;
  }

  .nav-links {
    position: absolute;
    flex-direction: column;
    width: 100%;
    z-index: 3;
    top: 39px;
    left: 0;
    padding: 20px 0;
    align-items: center;
    background-color: #c53737;
    transform: translateY(-150%);
    transition: transform 0.3s ease-in-out;
  }
  .nav-link:not(:last-child) {
    margin-right: 0;
    margin-bottom: 30px;
  }
  .nav-link a {
    width: 100%;
  }

  #burger {
    display: block;
    margin-right: 10px;
  }
}
</style>