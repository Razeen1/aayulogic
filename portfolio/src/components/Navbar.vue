<template>
    <v-card style='z-index:20001'>
        <v-layout>
            <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

            <v-app-bar color="blue-darken-1" density='compact' flat=true fixed  >

                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"
                    class="hidden-sm-and-up"></v-app-bar-nav-icon>
                <v-toolbar-title>Portfolio</v-toolbar-title>
                <v-spacer></v-spacer>

                <v-toolbar-items class="d-none d-sm-flex mx-6">
                    <v-btn flat v-for="item in items" :key="item.title" :to="item.path">
                        {{ item.title }}
                    </v-btn>
                </v-toolbar-items>
               
            </v-app-bar>
            <v-navigation-drawer location="left" v-model="drawer" temporary style="height: 50%" color="blue-darken-1">
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
        items: [
            { title: 'Home', path: '/', icon: 'mdi-home-circle' },
            { title: 'About', path: '/about', icon: 'mdi-information' },
            { title: 'Contact', path: '/contact', icon: 'mdi-contacts' }
        ],
    }),

    watch: {
        group() {
            this.drawer = false
        },
    },
}
</script>
  