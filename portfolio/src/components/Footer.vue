<template>
    <v-card style='z-index:20001;'>
        <v-layout>
            <v-footer color="blue-darken-2" class="d-flex flex-column align-center justify-center mt-6 pd-6">
                <div class=" md-1 text-center w-100 mt-6">
                    <v-btn v-for="link in links" :key="link" color="white" variant="plain" class="mx-2" :to="link.to">
                        {{ link.title }}
                    </v-btn>
                </div>
                <div class=" md-6 text-center w-100">
                    <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="plain" size="small"></v-btn>
                </div>
                <div class=" md-6 text-center w-100 ">
                    {{ new Date().getFullYear() }} - <strong>Rajin Bhuju</strong>
                </div>

            </v-footer>
        </v-layout>
    </v-card>
</template>
  
<script>
export default {
    name: "Footer-Bar",
    data: () => ({
        links: [
            { title: 'Home', to: '/' },
            { title: 'About', to: '/about' },
            { title: 'Contact', to: '/contact' }
        ],
        icons: ['mdi-facebook', 'mdi-email-outline', 'mdi-linkedin', 'mdi-instagram'],
    }),
}
</script>