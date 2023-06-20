<template>
    <v-card style='z-index:111'>
        <v-layout>
            <v-app-bar :color="bg" flat=true fixed :class="txt">

                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"
                    class="hidden-sm-and-up"></v-app-bar-nav-icon>
                <v-toolbar-title class="ml-6">
                    <router-link to="/"><v-img :src="require('../assets/' + srclink)" height="auto" width="60%"
                            class="pa-4"></v-img></router-link>
                </v-toolbar-title>
                <v-spacer></v-spacer>

                <v-toolbar-items class="d-none d-sm-flex mx-6">
                    <v-btn flat v-for="item in items" :key="item.title" :to="item.path" variant="plain" :ripple="false">
                        {{ item.title }}
                    </v-btn>
                </v-toolbar-items>



                <v-btn @click="this.$store.commit('changeState');" variant="outlined" color="teal-accent-3"
                    class="text-white d-none d-sm-flex">
                    Request a Demo
                </v-btn>

            </v-app-bar>

            <v-navigation-drawer location="left" v-model="drawer" temporary style="height: 100%" color="blue-darken-1">
                <v-list v-model="drawer" temporary>
                    <v-list-item v-for="(item, index) in items" :key="index" :to="item.path">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title @click="this.$store.commit('changeState');">Request a
                            Demo</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>


        </v-layout>
    </v-card>
</template>
<script>
export default {
    name: "Nav-Bar",
    data: () => ({
        drawer: false,
        group: null,
        is_transparent: true,
        bg: 'transparent',
        txt: 'text-white ',
        srclink: 'logoWhite.png',
        items: [
            { title: 'Home', path: '/' },
            { title: 'Feature', path: '/#feature' },
            { title: 'About', path: '/#about' },
            { title: 'Contact', path: '/#contact' },
            { title: 'Blog', path: '/#blog' },
            { title: 'FAQ', path: '/#faq' },

        ],
    }),
    mounted() {
        window.onscroll = () => {
            this.changeColor();
        };
    },
    methods: {
        changeColor() {
            if (
                document.body.scrollTop > 100 ||
                document.documentElement.scrollTop > 100
            ) {
                this.bg = 'white';
                this.txt = 'text-blue-darken-4 elevation-4';
                this.srclink = 'logo.png';
            } else {
                this.bg = 'transparent';
                this.txt = 'text-white';
                this.srclink = 'logoWhite.png';
            }
        },
    },
    watch: {
        group() {
            this.drawer = false
        },
    },
}
</script>
  