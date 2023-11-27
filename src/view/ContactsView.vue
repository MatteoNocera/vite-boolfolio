<script>

import { state } from "../state.js";

export default {
    name: 'ContactsView',
    data() {
        return {
            state,
            loading: false,
        }
    }

}
</script>
<template>
    <div class="p-5 mb-4 jumbo shadow rounded-bottom-5">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Get in touch</h1>
            <p class="col-md-8 fs-4">Find top news from top authors</p>
            <button class="btn btn-primary btn-lg" type="button">Find out more</button>
        </div>
    </div>


    <div class="container">
        <form action="">
            <div v-if="!loading">
                <div class="mb-3">
                    <label for="name" class="form-label text-uppercase">Name</label>
                    <input type="text" name="name" id="name" class="form-control" placeholder="YourName"
                        aria-describedby="nameHelper">
                    <small id="nameHelper" class="text-muted">Type your name</small>

                </div>

                <div class="mb-3">
                    <label for="phone" class="form-label  text-uppercase">phone</label>
                    <input type="tel" name="phone" id="phone" class="form-control" placeholder="123456"
                        aria-describedby="phoneHelper">
                    <small id="phoneHelper" class="text-muted">Type your phone</small>

                </div>

                <div class="mb-3">
                    <label for="email" class="form-label text-uppercase">email</label>
                    <input type="text" name="email" id="email" class="form-control" placeholder="name@example.com"
                        aria-describedby="emailHelper">
                    <small id="emailHelper" class="text-muted">Type your email</small>

                </div>

                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control" name="message" id="message" rows="3" placeholder="Your message here...">

                      </textarea>

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
            <div class="loader text-center py-5" v-else>

                <i class="fa-solid fa-spinner fa-spin-pulse fa-2xl"></i>
                <div class="mt-3">
                    Loading...
                </div>

            </div>

        </form>
    </div>
</template>
  
  
  
<style lang="scss" scoped></style>