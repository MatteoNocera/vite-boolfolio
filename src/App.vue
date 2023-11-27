<script>
import axios from 'axios';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  data() {
    return {


      projects: [],


    }
  },
  components: {
    Navbar,
    Footer,
  },

}
</script>

<template>
  <header>
    <Navbar></Navbar>

  </header>

  <main class="min-vh-100 bg-secondary">

    <router-view></router-view>

  </main>

  <footer>
    <Footer></Footer>
  </footer>
</template>

<style></style>
