<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: 'ProjectsView',
    data() {
        return {
            base_url: 'http://127.0.0.1:8000',
            project_api: '/api/projects',
            projects: [],
            links: [],
            currentPage: 1,
            lastPage: null,
        }
    },

    components: {
        ProjectCard,

    },
    methods: {

        getProjects(url) {

            //const url = this.base_url + this.project_api;

            axios
                .get(url)
                /* .get(`${this.base_url}` + `${this.project_api}`, {
                    params: {
                        page: projectApiPage
                    }
                }) */
                .then(response => {
                    console.log(response);
                    //tutti i risultati
                    //this.projects = response.data.result;

                    console.log(response.data.result);
                    this.projects = response.data.result.data;
                    this.links = response.data.result.links;
                    this.lastPage = response.data.result.last_page;

                    //this.loading = false;
                    //this.loading = false
                })
                .catch(err => {
                    console.error(err);
                })
        },

    },
    mounted() {
        this.getProjects(this.base_url + this.project_api);

    }
}
</script>
<template>
    <div>

        <section class="projects" v-if="projects">
            <div class="container">
                <h1 class="mb-5">ProjectsPage</h1>

                <div class="my-4">
                    <nav aria-label="Page navigation">
                        <ul class="pagination my-4">
                            <li class="page-item" v-for="link in this.links" :class="link.active ? 'active' : ''">
                                <!-- use v-for and v-bind on html to paginate the results -->
                                <a class="page-link" role="button" aria-label="Previous" v-html="link.label"
                                    @click="getProjects(link.url)">

                                </a>
                            </li>

                        </ul>
                    </nav>
                </div>

                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-5">

                    <div class="col" v-for="project in projects">
                        <ProjectCard :project="project"></ProjectCard>
                    </div>
                </div>



                <div class="my-4">
                    <nav aria-label="Page navigation">
                        <ul class="pagination my-4">
                            <li class="page-item" v-for="link in this.links" :class="link.active ? 'active' : ''">
                                <!-- use v-for and v-bind on html to paginate the results -->
                                <a class="page-link" role="button" aria-label="Previous" v-html="link.label"
                                    @click="getProjects(link.url)">

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
                <path
                    d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
            </svg>
        </div>

    </div>
</template>


<style></style>
