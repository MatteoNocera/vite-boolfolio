<script>
import axios from 'axios';
export default {
  name: 'ProjectCard',
  props: { 'project': Object },
  data() {
    return {
      base_url: 'http://127.0.0.1:8000',


    }
  }


}
</script>

<template>
  <div class="card bg-dark text-white h-100 shadow">
    <div class="card-header">
      <div class="card-title">
        Title: <span class="fw-bold text-light text-decoration-underline">{{ project.title }}</span>
      </div>
  </div>
  <div class="card-img-top text-center py-2">

    <!-- Imposto le immagini se NULL da loremPicsum, se no dò il percorso dal DB -->
    <img v-if="project.cover_image != null" :src="base_url + '/storage/' + project.cover_image" class="img-fluid"
      alt="">
      <img v-else :src="'https://picsum.photos/200/200?random=' + project.id" class="img-fluid" alt="">

    </div>
  <div class="card-body d-flex align-items-end">


    <div class="card-text">
      Description: <span class="fw-bold text-light-emphasis">{{ project.description }}</span>

      <!-- TODO Stamp type -->
      <!--  <div class="type my-2" v-if="project.type = null">
          Type: <span class="fw-bold text-light-emphasis">None</span>

        </div>
        <div v-else>
          Type: <span class="fw-bold text-light-emphasis">{{ project.type.name }}</span>
              </div> -->

        <!-- TODO V-if no technology -->
        <!-- <div class="technologies mt-3" v-if="project.technologies.length !== 0">
                <div>

                  <p>Technologies:</p>
                  <div class="row row-cols-3 g-2 mt-1">


                    <div class="col px-0 text-center" v-for="technology in project.technologies">
                      <span class="badge bg-secondary">{{ technology.name }}</span>
                    </div>

                  </div>
                </div>
              </div> -->


      </div>


    </div>
    <div class="card-footer d-flex justify-content-end bg-secondary bg-gradient align-items-center gap-4">

      <router-link class="btn btn-outline-dark" :to="{ name: 'project', params: { slug: project.slug } }">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye"
          viewBox="0 0 16 16">
          <path
            d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
        </svg>
      </router-link>

      <a class="btn btn-outline-dark" :href="project.web_link" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg"
          viewBox="0 0 16 16">
          <path
            d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
          <path
            d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
        </svg>
      </a>

      <a class="btn btn-outline-dark" :href="project.git_link" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github"
          viewBox="0 0 16 16">
          <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </a>
    </div>


  </div>
</template>

<style></style>
