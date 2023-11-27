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

                    if (success) {
                        console.log(response);
                        console.log(response.data.message);

                        this.name = '';
                        this.email = '';
                        this.phone = '';
                        this.message = '';

                        this.success = response.data.message;

                    } else {
                        console.log(response);
                        console.log(response.data.errors);
                        this.errors = response.data.errors;

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
                <button class="btn btn-primary btn-lg" type="button">Find out more</button>
            </div>
        </div>


        <div class="container py-4">
            <form action="" v-on:submit.prevent="sendForm()">
                <div v-if="!loading">
                    <div class="mb-3">
                        <label for="name" class="form-label text-uppercase">Name</label>
                        <input type="text" name="name" id="name" class="form-control" placeholder="YourName"
                            aria-describedby="nameHelper" v-model="name">
                        <small id="nameHelper" class="text-muted">Type your name</small>

                    </div>

                    <div class="mb-3">
                        <label for="phone" class="form-label  text-uppercase">phone</label>
                        <input type="tel" name="phone" id="phone" class="form-control" placeholder="33333333333"
                            aria-describedby="phoneHelper" v-model="phone">
                        <small id="phoneHelper" class="text-muted">Type your phone</small>

                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label text-uppercase">email</label>
                        <input type="text" name="email" id="email" class="form-control" placeholder="name@example.com"
                            aria-describedby="emailHelper" v-model="email">
                        <small id="emailHelper" class="text-muted">Type your email</small>

                    </div>

                    <div class="mb-3">
                        <label for="message" class="form-label">Message</label>
                        <textarea class="form-control" name="message" id="message" rows="3"
                            placeholder="Your message here..." v-model="message"></textarea>

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
    </div>
</template>
  
  
  
<style lang="scss" scoped></style>