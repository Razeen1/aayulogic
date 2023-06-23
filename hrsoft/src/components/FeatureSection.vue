<template>
    <v-card id="feature" flat>
        <div class="d-flex  flex-column align-center ma-2 ma-md-16 pa-md-10">
            <h2 class="text-blue-darken-4 mt-14">All the Functions your HR Team needs, and more!</h2>
            <v-container>
                <v-row class=" align-center justify-center ">
                    <v-col cols="12" sm="6">
                        <v-lazy :min-height="200" :options="{ 'threshold': 1 }" transition="slide-x-transition">
                            <v-card class=" align-center justify-center ma-md-16" flat>
                                <v-list lines="two" class=" ma-md-4" active-class="features">

                                    <v-list-item v-for="(item, i) in slides" :key="i" :value="item" color="blue-darken-3"
                                        class=" pa-2" @click="model = item.number">

                                        <template v-slot:prepend>
                                            <v-icon :icon="item.icon"></v-icon>
                                        </template>

                                        <v-list-item-title v-text="item.text"></v-list-item-title>
                                        <v-list-item-subtitle v-text="item.subtext"
                                            v-show="item.number == model"></v-list-item-subtitle>

                                    </v-list-item>
                                    <v-btn block color="#0BB4AF" class="text-white"
                                        @click="this.$store.commit('changeState');">Request a
                                        demo <v-icon icon="mdi-send" class="ml-2 "></v-icon></v-btn>
                                </v-list>

                            </v-card>
                        </v-lazy>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-lazy :min-height="200" :options="{ 'threshold': 1 }" transition="slide-x-reverse-transition">
                            <v-carousel v-model="model" hide-delimiters :show-arrows="false">
                                <v-carousel-item v-for="(item, i) in slides" :key="item" :value="i"
                                    reverse-transition="fade-transition" transition="fade-transition">
                                    <v-sheet color="transparent" tile height="100%">
                                        <div class="d-flex flex-column fill-height justify-center align-center text-center">
                                            <div class="container mx-auto ">
                                                <v-img :src="require('../assets/' + item.src + '/1.png')" class="image1"
                                                    transition="slide-x-transition" width=100%>
                                                </v-img>
                                                <v-img :src="require('../assets/' + item.src + '/2.png')" class="image2"
                                                    transition="slide-x-reverse-transition" width=100%>
                                                </v-img>
                                                <v-img :src="require('../assets/' + item.src + '/3.png')" class="image3"
                                                    transition="slide-y-transition" max-width=100%>
                                                </v-img>
                                                <v-img :src="require('../assets/' + item.src + '/4.png')" class="image4"
                                                    transition="slide-y-reverse-transition" width=100%>
                                                </v-img>
                                            </div>
                                        </div>
                                    </v-sheet>
                                </v-carousel-item>
                            </v-carousel>
                        </v-lazy>
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
            { text: 'Attendance Management', icon: 'mdi-account-check', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 0, src: 'animations' },
            { text: 'Payroll Management', icon: 'mdi-cash', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 1, src: 'animations2' },
            { text: 'Leave Management', icon: 'mdi-calendar-check', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 2, src: 'animations' },
            { text: 'Onboarding & Offboarding', icon: 'mdi-account-multiple-check', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 3, src: 'animations2' },
            { text: 'HR Intelligence', icon: 'mdi-brain', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 4, src: 'animations' },
            { text: 'Task Management', icon: 'mdi-format-list-checkbox', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 5, src: 'animations2' },
            { text: 'Performance Appraisal', icon: 'mdi-finance', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 6, src: 'animations' },

        ],
        model: 0,

    }),

}
</script>

<style scoped>
.container {
    position: relative;
    display: flex;
    align-items: center;
    width: 350px;
    height: 350px;
}

@media only screen and (max-width: 1300px) {
    .container {
        width: 250px;
        height: 250px;
    }

    .image2 {
        top: 50px !important;
        left: 50px !important;
    }

    .image3 {
        bottom: 0px !important;
        right: 50px !important;
    }

    .image4 {
        right: 50px !important;
        bottom: 50px !important;
    }
}

.image1 {
    position: absolute;
    z-index: 1;
    width: 100%;
    top: 0;
    left: 0;
}

.image2 {
    position: absolute;
    z-index: 2;
    /* Place this image in front of the img1 */
    width: 100%;
    top: 100px;
    left: 100px;
}

.image3 {
    position: absolute;
    z-index: 2;
    /* Place this image in front of the img1 */
    width: 100%;
    bottom: 0px;
    right: 100px;
}

.image4 {
    position: absolute;
    z-index: 2;
    /* Place this image in front of the img1 */
    width: 100%;
    right: 100px;
    bottom: 50px;
}

.features {
    background-color: rgba(201, 201, 201, 0.418) !important;
    color: rgb(59, 59, 59) !important;
}
</style>