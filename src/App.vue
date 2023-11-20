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

      currentPage: '',
      lastPage: '',
    }
  },
  components: {
    Card,
    Navbar
  },
  methods: {

    getProjects() {
      /* const url = this.base_url + this.project_api +; */

      axios
        .get(`${this.base_url}` + `${this.project_api}`, {
          params: {
            page: this.currentPage
          }
        })
        .then(response => {
          console.log(response);
          this.projects = response.data.result.data;
          this.currentPage = response.data.result.current_page;
          this.lastPage = response.data.result.last_page;
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
        <div class="my-4">
          <nav aria-label="Page navigation">
            <ul class="pagination    ">
              <li class="page-item disabled">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  </main>

  <footer>

  </footer>
</template>

<style></style>
