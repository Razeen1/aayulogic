<template>
    <v-card width="500px " class="ma-6 " flat>
        <form @submit.prevent="submit">
            <v-text-field label="Name" variant="outlined" class="mt-2"></v-text-field>


            <v-text-field label="E-mail" variant="outlined"></v-text-field>



            <v-btn class="me-4" color="blue-darken-2" type="submit"> submit </v-btn>


        </form>
    </v-card>
</template>
  
<script setup>

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
 
  