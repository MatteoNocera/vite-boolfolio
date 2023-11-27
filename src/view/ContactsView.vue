<script>
import axios from "axios";
import { state } from "../state.js";
import Sender from "../components/Sender.vue";

export default {
    name: 'ContactsView',
    components: {
        Sender
    },
    data() {
        return {
            state,
            loading: false,
            name: '',
            email: '',
            phone: '',
            message: '',
            errors: [],
            success: null
        }
    },
    methods: {
        sendForm() {

            this.loading = true;
            const payload = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                message: this.message
            };
            axios
                .post(state.base_url + '/api/contacts', payload)
                .then(response => {

                    const success = response.data.success;

                    if (!success) {

                        console.log(response);
                        console.log(response.data.errors);
                        this.errors = response.data.errors;

                    } else {
                        console.log(response);
                        console.log(response.data.message);

                        this.name = '';
                        this.email = '';
                        this.phone = '';
                        this.message = '';

                        this.success = response.data.message;
                    }

                    this.loading = false;


                })
                .catch(error => {
                    console.log(error.message);
                });

        }
    }


}
</script>
<template>
    <div class="bg-secondary">
        <div class="p-5 mb-4 jumbo shadow rounded-bottom-5">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">Get in touch</h1>
                <p class="col-md-8 fs-4">Find top news from top authors</p>
                <button class="btn btn-outline-secondary btn-lg" type="button">Find out more</button>
            </div>
        </div>


        <div class="container py-4">

            <div class="row row-cols-1 row-cols-md-2 g-3">

                <div class="col">
                    <div v-if="success">
                        <div class="alert alert-success" role="alert">
                            <strong>{{ success }}</strong>
                        </div>
                    </div>

                    <form action="" v-on:submit.prevent="sendForm()">
                        <div v-if="!loading">
                            <div class="mb-3">
                                <label for="name" class="form-label text-uppercase">Name</label>
                                <input type="text" name="name" id="name" class="form-control" placeholder="YourName"
                                    aria-describedby="nameHelper" v-model="name" :class="{ 'is-invalid': errors.name }">
                                <small id="nameHelper" class="text-muted">Type your name</small>

                                <div class="alert alert-danger" role="alert" v-if="errors.name">
                                    <strong>Errors</strong>
                                    <ul>
                                        <li v-for="message in errors.name">{{ message }}</li>
                                    </ul>
                                </div>


                            </div>

                            <div class="mb-3">
                                <label for="phone" class="form-label  text-uppercase">phone</label>
                                <input type="tel" name="phone" id="phone" class="form-control" placeholder="33333333333"
                                    aria-describedby="phoneHelper" v-model="phone" :class="{ 'is-invalid': errors.phone }">
                                <small id="phoneHelper" class="text-muted">Type your phone</small>

                                <div class="alert alert-danger" role="alert" v-if="errors.phone">
                                    <strong>Errors</strong>
                                    <ul>
                                        <li v-for="message in errors.phone">{{ message }}</li>
                                    </ul>
                                </div>

                            </div>

                            <div class="mb-3">
                                <label for="email" class="form-label text-uppercase">email</label>
                                <input type="text" name="email" id="email" class="form-control"
                                    placeholder="name@example.com" aria-describedby="emailHelper" v-model="email"
                                    :class="{ 'is-invalid': errors.email }">
                                <small id="emailHelper" class="text-muted">Type your email</small>

                                <div class="alert alert-danger" role="alert" v-if="errors.email">
                                    <strong>Errors</strong>
                                    <ul>
                                        <li v-for="message in errors.email">{{ message }}</li>
                                    </ul>
                                </div>

                            </div>

                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="form-control mb-4" name="message" id="message" rows="3"
                                    placeholder="Your message here..." v-model="message"
                                    :class="{ 'is-invalid': errors.message }"></textarea>

                                <div class="alert alert-danger" role="alert" v-if="errors.message">
                                    <strong>Errors</strong>
                                    <ul>
                                        <li v-for="message in errors.message">{{ message }}</li>
                                    </ul>
                                </div>

                            </div>

                            <button type="submit" class="btn btn-primary mb-3">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-send" viewBox="0 0 16 16">
                                        <path
                                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                    </svg>
                                </span>
                                <span>
                                    Send
                                </span>

                            </button>
                        </div>
                        <div class="container py-3" v-else>
                            <Sender></Sender>
                        </div>

                    </form>
                </div>

                <div class="col d-flex flex-column justify-content-center gap-3 text-center">
                    <h5>Contact me for any questions</h5>
                    <img class="img-fluid rounded-2 shadow"
                        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjBzZGJxZzNtbjdwN24wdjIyOGNkMWk1ZmtjZDk2azNmNWo4Zmg2cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HzPtbOKyBoBFsK4hyc/giphy.gif"
                        alt="">
                </div>
            </div>

        </div>
    </div>
</template>
  
  
  
<style lang="scss" scoped></style>