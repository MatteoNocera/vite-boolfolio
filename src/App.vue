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
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">BoolFolio</a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link active" href="#" aria-current="page">Home <span
                  class="visually-hidden">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://127.0.0.1:8000/admin">Admin</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>

  </header>
  <main class="py-4">
    <section class="projects">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-5">
          <div class="col" v-for="project in projects">
            <div class="card h-100">
              <div class="card-image-top text-center py-2">
                <img width="100" :src="base_url + '/storage/' + project.cover_image" alt="">
              </div>
              <div class="card-body">
                <div class="card-title">
                  {{ project.title }}
                </div>
                <div class="card-text">
                  {{ project.description }}
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>

  </footer>
</template>

<style></style>
