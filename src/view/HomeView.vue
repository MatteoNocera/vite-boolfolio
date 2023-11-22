<script>
export default {
    name: 'HomeView'
}
</script>
<template>
    <div>
        <div class="container">
            <div class="p-5 mb-4 bg-light rounded-3">
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">Welcome on my Page</h1>
                    <p class="col fs-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis explicabo
                        vero beatae quo. Minima atque, quibusdam id blanditiis nobis minus architecto cum fugiat repellat.
                        Incidunt temporibus id sint exercitationem iure.
                    </p>
                    <button class="btn btn-primary btn-lg" type="button">
                        <router-link class="nav-link" to="/projects">
                            See my project
                        </router-link>
                    </button>
                </div>
            </div>

            <section id="latest_project"></section>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">

            </div>

        </div>
    </div>
</template>


<style></style>