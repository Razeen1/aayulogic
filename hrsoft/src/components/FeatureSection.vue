<template>
    <v-card id="feature">
        <div class="d-flex flex-column  align-center align-md-end ma-md-16 pa-md-10">
            <v-container>
                <v-row class="  elevation-5 align-center justify-center">
                    <v-col>
                        <v-card class=" align-center justify-center" width="80%" height="70%" flat>
                            <v-list lines="one" class=" ma-4  ">
                                <v-list-subheader>Features</v-list-subheader>
                                <v-list-item v-for="(item, i) in slides" :key="i" :value="item" color="blue-darken-3"
                                    @click="model = item.number">

                                    <template v-slot:prepend>
                                        <v-icon :icon="item.icon"></v-icon>
                                    </template>

                                    <v-list-item-title v-text="item.text"></v-list-item-title>
                                    <v-list-item-subtitle v-text="item.subtext"></v-list-item-subtitle>
                                    <v-divider class="mt-2 mb-2"></v-divider>
                                </v-list-item>

                            </v-list>
                        </v-card>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col>
                        <v-carousel v-model="model" hide-delimiters :show-arrows="false">
                            <v-carousel-item v-for="(item, i) in slides" :key="item" :value="i"
                                reverse-transition="fade-transition" transition="fade-transition">
                                <v-sheet color="transparent" tile height="100%">
                                    <div class="d-flex flex-column fill-height justify-center align-center text-center">
                                        <h2>{{ item.text }}</h2>
                                        <p>{{ item.subtext }}</p>
                                    </div>
                                </v-sheet>
                            </v-carousel-item>
                        </v-carousel>
                    </v-col>
                </v-row>
            </v-container>
        </div>


    </v-card>
</template>
<script>

export default {
    name: 'FeatureSection',

    data: () => ({

        slides: [
            { text: 'Real-Time', icon: 'mdi-clock', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 0 },
            { text: 'Audience', icon: 'mdi-account', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 1 },
            { text: 'Conversions', icon: 'mdi-home', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 2 },
            { text: 'Daily report', icon: 'mdi-airplane', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 3 },
            { text: 'Some things', icon: 'mdi-cellphone', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 4 },
            { text: 'Everythings', icon: 'mdi-headphones', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 5 },
        ],
        model: 0,

    }),

}
</script>