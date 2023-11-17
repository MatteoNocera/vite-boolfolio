<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      base_url: 'http://127.0.0.1:8000',
      project_api: '/api/projects',
      projects: [],
    }
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
  <div>ciao</div>

  <section class="projects">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-5">
        <div class="col" v-for="project in projects">
          <div class="card">
            <h3>{{ project.title }}</h3>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
