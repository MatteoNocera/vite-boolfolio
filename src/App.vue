<script>
import axios from 'axios';
import Navbar from './components/Navbar.vue';


export default {
  name: 'App',
  data() {
    return {


      projects: [],


    }
  },
  components: {
    Navbar
  },

}
</script>

<template>
  <header>
    <Navbar></Navbar>

  </header>

  <main class="py-4">

    <router-view></router-view>

  </main>

  <footer>

  </footer>
</template>

<style></style>
