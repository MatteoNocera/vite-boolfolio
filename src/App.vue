<script>
import axios from 'axios';
import Card from './components/Card.vue';
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
    Card,
    Navbar
  },
  methods: {

    getProjects() {
      const url = this.base_url + this.project_api;

      axios
        .get(url)
        .then(response => {
          console.log(response);
          this.projects = response.data.result;
        })
        .catch(err => {
          console.error(err);
        })
    },

  },
  mounted() {
    this.getProjects();

  }
}
</script>

<template>
  <header>
    <Navbar></Navbar>

  </header>
  <main class="py-4">
    <section class="projects">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-5">


          <Card v-for="project in projects" :project="project"></Card>


        </div>
      </div>
    </section>
  </main>

  <footer>

  </footer>
</template>

<style></style>
