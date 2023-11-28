<script>
export default {
    name: 'AboutView'
}
</script>
<template>
    <div class="">

        <div class="p-5 jumbo shadow rounded-bottom-5">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">About Me</h1>

                <h4 class="my-3">Curious soul, aspiring Fullstack Developer, and your friendly neighborhood code wizard.
                    🧙‍♂️</h4>
                <p class="col fs-4">

                    Exploring the endless possibilities of technology, I'm on a mission to weave digital magic. From the
                    enchanting frontend spells to the powerful backend incantations, I'm here to create a digital
                    symphony of
                    innovation and usability.
                </p>
                <button class="btn btn-outline-secondary btn-lg" type="button">
                    <router-link class="nav-link" to="/contact">
                        Let's Connect
                    </router-link>
                </button>

            </div>
        </div>

        <div class="container">
            <section class="d-flex justify-content-center my-4 text-center text-white">

                <div class="col-6 bg-dark approach-card rounded-pill">
                    <h2 class="">My Approach</h2>

                    <p>
                        Embracing the magic of elegant code and user-centric design, I craft solutions that not only
                        stand strong
                        in the face of technical challenges but also sparkle with the joy of seamless user experiences.
                        Each project
                        is a spellbinding journey, woven with enthusiasm and meticulous attention to detail.
                    </p>

                </div>
            </section>
        </div>



    </div>
</template>


<style></style>
