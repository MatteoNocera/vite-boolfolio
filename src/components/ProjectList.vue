<script>
import axios from 'axios';
import Card from './Card.vue'
export default {
  name: 'ProjectList',
  data() {
    return {
      base_url: 'http://127.0.0.1:8000',
      project_api: '/api/projects',
      projects: null,


      currentPage: '',
      lastPage: '',
    }
  },
  components: {
    Card
  },
  methods: {

    getProjects(projectApiPage) {
      this.loading = true;
      /* const url = this.base_url + this.project_api; */

      axios
        /* .get(url) */
        .get(`${this.base_url}` + `${this.project_api}`, {
          params: {
            page: projectApiPage
          }
        })
        .then(response => {
          console.log(response);
          //tutti i risultati
          //this.projects = response.data.result;

          console.log(response.data.result);
          this.projects = response.data.result.data;
          this.currentPage = response.data.result.current_page;
          this.lastPage = response.data.result.last_page;

          this.loading = false;
          /* this.loading = false */
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
  <section class="projects" v-if="projects">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-5">

        <Card v-for="project in projects.data" :project="project"></Card>

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
  <div class="my-3" v-else>
    Loading <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
      class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
      <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
    </svg>
  </div>
</template>

<style></style>
