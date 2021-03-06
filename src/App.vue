<template>
  <div id="root">
    <sidebar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar"

export default {
  name: 'App',
  components: {
      Sidebar
  }
}
</script>

<style scoped>
@import './components/app.css';

#root {
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: 100vh;

  /* margin-top: 20%; */
  /* grid-template-columns: 20% 80%; */
  /* grid-template-rows: 10% 90%; */
}
</style>
