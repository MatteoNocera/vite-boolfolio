<script>
export default {
    name: 'NotFoundView'
}
</script>
<template>
    <div class="container">
        <h1 class="py-4">Sorry, page not found</h1>
        <router-link class="btn btn-outline-primary me-3" :to="{ name: 'home' }">Return to Home Page</router-link>
        <router-link class="btn btn-outline-primary" :to="{ name: 'projects' }">Return to Projects Page</router-link>
    </div>
</template>


<style></style>