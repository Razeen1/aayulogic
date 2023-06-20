<template>
    <v-card style='z-index:20001'>
        <v-layout>
            <v-app-bar :color="bg" flat=true fixed :class="txt">

                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"
                    class="hidden-sm-and-up"></v-app-bar-nav-icon>
                <v-toolbar-title class="ml-6">RealHRsoft
                    <!-- <v-img src="../assets/logo.png" height="100%" width="30%"></v-img> -->
                </v-toolbar-title>
                <v-spacer></v-spacer>

                <v-toolbar-items class="d-none d-sm-flex mx-6">
                    <v-btn flat v-for="item in items" :key="item.title" :to="item.path" variant="plain" :ripple="false">
                        {{ item.title }}
                    </v-btn>
                </v-toolbar-items>

            </v-app-bar>
            <v-navigation-drawer location="left" v-model="drawer" temporary style="height: 100%" color="blue-darken-1">
                <v-list v-model="drawer" temporary>
                    <v-list-item v-for="(item, index) in items" :key="index" :to="item.path">
                        <v-icon left dark></v-icon>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
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
        items: [
            { title: 'Home', path: '/' },
            { title: 'Feature', path: '/#feature' },
            { title: 'About', path: '/#about' },
            { title: 'Contact', path: '/#contact' },
            { title: 'Blog', path: '/#blog' },
            { title: 'FAQ', path: '/#faq' }
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
            } else {
                this.bg = 'transparent';
                this.txt = 'text-white';
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
  