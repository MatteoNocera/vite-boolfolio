<script>
import axios from 'axios';

export default {
    name: 'SingleProjectView',
    data() {
        return {
            project: {},
            base_url: 'http://127.0.0.1:8000',
            project_api: '/api/projects/',
            loading: true,
        }
    },
    mounted() {
        const url = this.base_url + this.project_api + this.$route.params.slug;
        axios.get(url)
            .then(resp => {

                if (resp.data.success) {
                    console.log(resp.data.result);
                    this.project = resp.data.result;
                    this.loading = false;
                } else {
                    console.log('Non trovata');
                }

            })
            .catch(err => {
                console.log(err.message);
            })

    }
}
</script>

<template>
    <div>
        <div class="container">
            <h1>SingleProject</h1>

            <!-- Imposto le immagini se NULL da loremPicsum, se no dò il percorso dal DB -->
            <!--  <img v-if="project.cover_image != null" :src="base_url + '/storage/' + project.cover_image" class="img-fluid"
                alt="">
            <img v-else :src="'https://picsum.photos/200/200?random=' + project.id" class="img-fluid" alt=""> -->

            <div class="card mb-3 shadow-lg bg-dark text-white" v-if="!loading">

                <div class="row g-0 p-4">
                    <div class="col-lg-5 text-center py-2">

                        <!-- Imposto le immagini se NULL da loremPicsum, se no dò il percorso dal DB -->
                        <img v-if="project.cover_image != null" :src="base_url + '/storage/' + project.cover_image"
                            class="img-fluid" alt="">
                        <img v-else :src="'https://picsum.photos/200/200?random=' + project.id" class="img-fluid" alt="">


                    </div>
                    <div class="col-lg-7">
                        <div class="card-body">
                            <h5 class="card-title fs-4 my-4"><span class="text-white-50">Title:
                                </span>{{ project.title }}
                            </h5>

                            <p class="card-text fs-5 py-4"><span class="text-white-50">Description:
                                </span>{{ project.description }}</p>

                            <p class="card-text fs-5 py-4 text-white-50">Type: <span class="badge bg-secondary p-2">
                                    {{ project.type ? project.type.name : 'None' }}
                                </span></p>

                            <div class="d-flex" v-if="project.technologies.lenght != 0">
                                <span class="text-white-50">Technologies: </span>
                                <ul class="d-flex list-untyled gap-1 ps-2">


                                    <li class="badge bg-secondary" v-for="technology in project.technologies">
                                        <i class="fas fa-tag fa-xs fa-fw"></i>
                                        {{ technology.name }}
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-footer d-flex justify-content-end bg-secondary bg-gradient align-items-center gap-4">

                    <div
                        class="card-footer d-flex justify-content-end bg-secondary bg-gradient align-items-center gap-4 border-top-0">


                        <a class="btn btn-outline-dark" :href="project.web_link" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-link-45deg" viewBox="0 0 16 16">
                                <path
                                    d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                <path
                                    d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                            </svg>
                        </a>

                        <a class="btn btn-outline-dark" :href="project.git_link" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-github" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
                    </div>






                </div>

            </div>

        </div>

    </div>
</template>



<style></style>