<template>
    <v-card style='z-index:111'>
        <v-layout>
            <v-app-bar :color="bg" flat=true fixed :class="txt">


                <v-toolbar-title class="ml-1 ml-md-6">
                    <router-link to="/"><v-img :src="require('../assets/' + srclink)" height="auto"
                            class="pa-1  pa-md-5 pa-lg-16 "></v-img></router-link>
                </v-toolbar-title>
                <v-spacer></v-spacer>

                <v-toolbar-items class="d-none d-sm-flex mx-md-6">
                    <v-btn flat v-for="item in items" :key="item.title" :to="item.path" variant="plain" :ripple="false">
                        {{ item.title }}
                    </v-btn>
                    <!-- <v-menu transition="slide-x-transition">
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props"> Features </v-btn>
                        </template>
                        <div class="d-flex felx-column w-100">
                            <v-list class="pa-6">
                                <v-list-item v-for="(item, i) in items" :key="i">
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                            <v-list class="pa-6">
                                <v-list-item v-for="(item, i) in items" :key="i">
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item></v-list>
                            <v-list class="pa-6">
                                <v-list-item v-for="(item, i) in items" :key="i">
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </div>
                    </v-menu> -->
                </v-toolbar-items>

                <v-hover>
                    <template v-slot:default="{ isHovering, props }">
                        <v-btn v-bind=props @click="this.$store.commit('changeState');" variant="flat"
                            :color="isHovering ? 'white' : '#0BB4AF'"
                            :class="isHovering ? 'text-blue-darken-3' : 'text-white'" class=" d-none d-sm-flex mr-5">
                            Request a Trial
                        </v-btn>

                    </template>
                </v-hover>
                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"
                    class="hidden-sm-and-up"></v-app-bar-nav-icon>

            </v-app-bar>

            <v-navigation-drawer location="right" v-model="drawer" temporary :style="bgdrawer" class=" elevation-0">
                <v-list v-model="drawer" temporary>
                    <v-list-item v-for="(item, index) in items" :key="index" :to="item.path" variant="plain ">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="">
                        <v-list-item-title @click="this.$store.commit('changeState');">Request a
                            Demo </v-list-item-title>
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
        bgdrawer: 'background: linear-gradient(60deg, #0F4EA5 0%, #0FA597 100%); color:white;',
        items: [
            { title: 'Home', path: '/' },
            { title: 'About', path: '/#feature' },
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
                this.bgdrawer = 'background: white; color:#0D47A1;';

            } else {
                this.bg = 'transparent';
                this.txt = 'text-white';
                this.srclink = 'logoWhite.png';
                this.bgdrawer = 'background: linear-gradient(60deg, #0F4EA5 0%, #0FA597 100%); color:white;';
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
