<template>
    <v-lazy :min-height="200" :options="{ 'threshold': 0.5 }" transition="fade-transition">
        <v-card width="500px " class="ma-6 " flat>
            <form @submit.prevent="submit">
                <v-text-field label="Name" variant="outlined" class="mt-2 mb-3" hint="Enter Your Full Name"></v-text-field>


                <v-text-field label="E-mail" variant="outlined" hint="Enter your Email" class="mb-3"></v-text-field>


                <v-textarea label="Message" variant="outlined" class="mb-3" hint="Leave me a message"></v-textarea>
                <v-btn class="me-4 mb-4  included" color="blue-darken-2" type="submit" @click="dialog = true"> Submit
                </v-btn>
                <v-fade-transition hide-on-leave>
                    <v-alert v-model="dialog" type="success" color="blue-darken-2" title="Message Recieved"
                        text="Thank You for your message" closable close-label="Close Alert" v-click-outside="{
                            handler: onClickOutside,
                            include
                        }">

                    </v-alert>
                </v-fade-transition>

            </form>
        </v-card>
    </v-lazy>
</template>
  
<script >
export default {
    data: () => ({
        dialog: false,
    }),

    methods: {
        onClickOutside() {
            this.dialog = false
        },
        include() {
            return [document.querySelector('.included')]
        },
    },
}

</script>
 
  