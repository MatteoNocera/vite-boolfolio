<script>
import axios from 'axios';

export default {
    name: 'SingleProjectView',
    data() {
        return {
            project: {},
            base_url: 'http://127.0.0.1:8000',
            project_api: '/api/project/',
        }
    },
    mounted() {
        const url = this.base_url + this.project_api + this.$route.params.slug;
        axios.get(url)
            .then(resp => {
                console.log(resp.data.result);
                this.project = resp.data.result
            })
            .catch(err => {
                console.log(err.message);
            })

    }
}
</script>

<template>
    <div>
        <h1>SingleProject</h1>
    </div>
</template>



<style></style>