<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import Loader from '../components/Loader.vue';
import { state } from '../state.js';

export default {
    name: 'ProjectsView',
    data() {
        return {
            state,
            /* base_url: 'http://127.0.0.1:8000',
            project_api: '/api/projects', */
            projects: [],
            links: [],
            currentPage: 1,
            lastPage: null,
            loading: true,
        }
    },

    components: {
        ProjectCard,
        Loader
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
                    this.loading = false;

                    //this.loading = false;
                    //this.loading = false
                })
                .catch(err => {
                    console.error(err);
                })
        },

    },
    mounted() {
        this.getProjects(state.base_url + state.project_api);

    }
}
</script>
<template>
    <div>


        <div class="container">
            <h1 class="mb-5">My Projects</h1>
            <div v-if="!loading">


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
            <div class="my-3" v-else>
                <Loader></Loader>
            </div>

        </div>




    </div>
</template>


<style></style>
