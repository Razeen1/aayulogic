<template>
    <v-lazy :min-height="200" :options="{ 'threshold': 0.5 }" transition="fade-transition">
        <v-card width="500px " class="ma-6 " flat>
            <form @submit.prevent="submit">
                <v-text-field label="Name" variant="outlined" class="mt-2 mb-3" hint="Enter Your Full Name"></v-text-field>


                <v-text-field label="E-mail" variant="outlined" hint="Enter your Email" class="mb-3"></v-text-field>


                <v-textarea label="Message" variant="outlined" class="mb-3" hint="Leave me a message"></v-textarea>
                <v-btn class="me-4 mb-4" color="blue-darken-2" type="submit" @click="dialog = true"> Submit </v-btn>
                <v-fade-transition hide-on-leave>
                    <v-alert v-model="dialog" type="success" color="blue-darken-2" title="Message Recieved"
                        text="Thank You for your message" closable close-label="Close Alert"
                        v-click-outside="onClickOutside">

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
    },
}



// import { useField, useForm } from 'vee-validate'

// const { handleSubmit, handleReset } = useForm({
//     validationSchema: {
//         name(value) {
//             if (value?.length >= 2) return true

//             return 'Name needs to be at least 2 characters.'
//         },
//         // phone(value) {
//         //     if (value?.length > 9 && /[0-9-]+/.test(value)) return true

//         //     return 'Phone number needs to be at least 9 digits.'
//         // },
//         email(value) {
//             if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

//             return 'Must be a valid e-mail.'
//         },


//     },
// })
// const name = useField('name')
// // const phone = useField('phone')
// const email = useField('email')
// // const select = useField('select')
// // const checkbox = useField('checkbox')

// // const items = ref(['Item 1', 'Item 2', 'Item 3', 'Item 4'])

// const submit = handleSubmit(values => {
//     alert(JSON.stringify(values, null, 2))
// })
</script>
 
  