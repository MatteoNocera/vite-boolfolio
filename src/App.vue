<script>
import axios from 'axios';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  data() {
    return {
      base_url: 'http://127.0.0.1:8000',
      project_api: '/api/projects',

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
