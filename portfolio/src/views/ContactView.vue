<template>
    <v-parallax src="../assets/contact.jpg" height="700px">
        <div class="d-flex flex-column fill-height justify-center align-center text-blue-darken-2">
            <h1 class="text-h1 font-weight-light mb-4">Contact</h1>
            <h4 class="text-h4 font-weight-thin">Get in touch with me</h4>
        </div>
    </v-parallax>
    <v-card>
        <div
            class="d-flex flex-column justify-center fill-height align-center text-blue-darken-4 mt-16 mr-16 ml-16 mb-16 text-justify ">
            <h1 class="text-h2 font-weight-light">Leave A Message</h1>
            <ContactCard></ContactCard>

        </div>

    </v-card>
</template>
<script>
import ContactCard from '@/components/ContactCard.vue';

export default {
    name: "ContactView",
    components: { ContactCard }
}
</script>