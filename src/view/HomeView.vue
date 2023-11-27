<script>
import axios from 'axios';
import Loader from '../components/Loader.vue';
import ProjectCard from '../components/ProjectCard.vue';
import { state } from '../state.js';
export default {
    name: 'HomeView',
    components: {
        Loader,
        ProjectCard
    },
    data() {
        return {
            state,
            loading: true,
            projects: [],
        };
    },
    methods: {

        getProjects(url) {
            /* const url = state.base_url + state.project_api + '/latest'; */
            axios
                .get(url)
                .then(resp => {
                    console.log(resp);
                    console.log(resp.data.result.data);
                    this.projects = resp.data.result;

                    this.loading = false;

                })
                .catch(err => {
                    console.error(err);
                })
        }
    },

    mounted() {
        this.getProjects(state.base_url + '/api/latests');
    }
}
</script>
<template>
    <div class="bg-secondary">

        <div class="p-5 jumbo shadow rounded-bottom-5">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">Welcome to My Portfolio</h1>

                <h4 class="my-3">Hello and thank you for stopping by! I'm Matteo, a curious soul on a journey to become a
                    Fullstack
                    Developer. 🚀</h4>
                <p class="col fs-4">

                    In the vast world of technology, I find joy in the art of crafting digital experiences that not only
                    solve problems but also bring delight to users. My passion lies in mastering both the frontend and
                    backend realms, and every day is an exciting opportunity to learn and grow.
                </p>
                <button class="btn btn-outline-secondary btn-lg" type="button">
                    <router-link class="nav-link" to="/projects">
                        See All my project
                    </router-link>
                </button>



            </div>
        </div>

        <div class="container">
            <section class="d-flex justify-content-center my-4 text-center text-white">

                <div class="col-6 bg-dark approach-card rounded-pill">
                    <h2 class="">My Approach</h2>

                    <p>
                        I believe in the power of elegant code and user-centric design. My goal is to create solutions
                        that are not only technically robust but also a joy to interact with. Whether it's bringing a
                        beautiful UI to life or architecting a robust backend infrastructure, I approach each project
                        with enthusiasm and attention to detail.
                    </p>

                </div>
            </section>
        </div>

        <div class="py-4" v-if="!loading">
            <section class="latest_project" v-if="projects">
                <div class="container">
                    <h2>My Latest Projects</h2>
                    <div class="row row-cols-1 row-cols-sm-3">

                        <div class="col" v-for="project in projects">
                            <ProjectCard :project="project"></ProjectCard>
                        </div>

                    </div>
                </div>
            </section>
        </div>

        <div class="container py-3" v-else>
            <Loader></Loader>
        </div>



    </div>
</template>


<style>
.approach-card {
    cursor: pointer;
    padding: 15px;
    text-align: center;

}
</style>
