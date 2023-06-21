<template>
    <v-card id="feature">
        <div class="d-flex  flex-column align-center ma-2 ma-md-16 pa-md-10">
            <h2 class="text-blue-darken-4 mt-14">All the Functions your HR Team needs, and more!</h2>
            <v-container>
                <v-row class=" align-center justify-center ">
                    <v-col cols="12" sm="6">
                        <v-lazy :min-height="200" :options="{ 'threshold': 0.2 }" transition="slide-x-transition">
                            <v-card class=" align-center justify-center ma-md-16" flat>
                                <v-list lines="two" class=" ma-md-4  ">

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
                        <v-lazy :min-height="200" :options="{ 'threshold': 0.9 }" transition="slide-x-reverse-transition">
                            <v-carousel v-model="model" hide-delimiters :show-arrows="false">
                                <v-carousel-item v-for="(item, i) in slides" :key="item" :value="i"
                                    reverse-transition="fade-transition" transition="fade-transition">
                                    <v-sheet color="transparent" tile height="100%">
                                        <div class="d-flex flex-column fill-height justify-center align-center text-center">
                                            <v-img :src="require('../assets/' + item.src)"></v-img>

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
            { text: 'Attendance Management', icon: 'mdi-account-check', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 0, src: 'Attendance.png' },
            { text: 'Payroll Management', icon: 'mdi-cash', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 1, src: 'Payroll.png' },
            { text: 'Leave Management', icon: 'mdi-calendar-check', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 2, src: 'Attendance.png' },
            { text: 'Onboarding & Offboarding', icon: 'mdi-account-multiple-check', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 3, src: 'Attendance.png' },
            { text: 'HR Intelligence', icon: 'mdi-brain', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 4, src: 'Attendance.png' },
            { text: 'Task Management', icon: 'mdi-format-list-checkbox', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 5, src: 'Attendance.png' },
            { text: 'Performance Appraisal', icon: 'mdi-finance', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 6, src: 'Attendance.png' },

        ],
        model: 0,

    }),

}
</script>