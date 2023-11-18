<script>
export default {
    name: 'Card',
    data() {
        return {
            base_url: 'http://127.0.0.1:8000',
            project_api: '/api/projects',
            projects: [],
        }
    },
    props: {
        project: Object,
        cover_image: String
    },
}
</script>

<template>
    <div class="col">
        <div class="card h-100">
            <div class="card-img-top text-center py-2">

                <!-- Imposto le immagini se NULL da loremPicsum, se no dò il percorso dal DB -->
                <img v-if="cover_image != null" width="100" :src="base_url + '/storage/' + cover_image" alt="">
                <img v-else width="100" :src="'https://picsum.photos/100/100?random=' + project.id" alt="">

            </div>
            <div class="card-body">
                <div class="card-title">
                    Title: {{ project.title }}
                </div>
                <div class="card-text">
                    Description: {{ project.description }}
                </div>

            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    Type: {{ project.type }}
                </li>
                <li class="list-group-item">
                    Technology: {{ project.technology }}
                </li>
            </ul>


        </div>
    </div>
</template>

<style></style>
