<template>
    <v-card style='z-index:20001'>
        <v-layout>
            <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

            <v-app-bar :color="bg" density='compact' flat=true fixed :class="txt">

                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"
                    class="hidden-sm-and-up"></v-app-bar-nav-icon>
                <v-toolbar-title>Portfolio</v-toolbar-title>
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
                        <v-icon left dark :icon="item.icon"></v-icon>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>


        </v-layout>
    </v-card>
</template>
<script>
export default {
    name: "nav-bar",
    data: () => ({
        drawer: false,
        group: null,
        is_transparent: true,
        bg: 'transparent',
        txt: 'text-blue-darken-3',
        items: [
            { title: 'Home', path: '/', icon: 'mdi-home-circle' },
            { title: 'About', path: '/about', icon: 'mdi-information' },
            { title: 'Contact', path: '/contact', icon: 'mdi-contacts' }
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
                this.bg = 'blue-darken-2';
                this.txt = 'text-white';
            } else {
                this.bg = 'transparent';
                this.txt = 'text-blue-darken-3';
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
  