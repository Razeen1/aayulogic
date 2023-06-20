<template>
    <v-card style="background: linear-gradient(to left, rgb(0, 209, 209), rgb(0, 118, 252));z-index:99" rounded="0"
        class="overflow-visible " flat>
        <v-container>
            <v-row>
                <v-col cols="12" md="6">
                    <div>
                        <div
                            class=" d-flex flex-column justify-center fill-height align-left  mt-16 mr-6 text-justify text-white ">
                            <h2 class=" text-h2 font-weight-bold mt-16">Nepal's #1<br />
                                HR Solution</h2>
                            <h5 class="text-subtitle-1 font-weight-regular">Build a successful team for your successful
                                tenure with our
                                multi-function HR Platform, built for HR Teams by HR Teams</h5>
                            <div>
                                <v-btn class="mt-6 mb-6 mr-6 text-white" @click="this.$store.commit('changeState');"
                                    color="teal-accent-3">Request a demo
                                </v-btn>
                                <v-btn class="mt-6 mb-6 text-blue-darken-4" to="/#feature">Learn More</v-btn>
                            </div>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="6">
                    <div class=" d-flex flex-column  align-center  mt-16  ">
                        <v-img src="../assets/herobanner.png" width="100%" class=""></v-img>
                    </div>
                </v-col>
            </v-row>
            <v-row class=" block justify-center  align-center">
                <v-card class="mb-n12 elevation-5" width="100%">
                    <v-item-group multiple>
                        <v-container>
                            <v-row>
                                <v-col v-for="item in count" :key="item.id" class=" align-center text-center " width="20%">
                                    <div>
                                        <h1 class="text-blue-darken-3"><vue3-autocounter ref='counter'
                                                :startAmount="item.start" :endAmount='item.end' :duration='2.5'
                                                separator=',' decimalSeparator='.' :autoinit='true' :prefix='item.prefix'
                                                :suffix='item.suffix' />
                                        </h1>
                                        <h5 class="font-weight-medium">{{ item.title }}</h5>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-item-group>
                </v-card>
            </v-row>
        </v-container>
    </v-card>
</template>
<script>

export default {
    name: 'HeroBanner',

    data: () => ({
        count: [
            { title: "Employees using RealHRsoft", start: 0, end: 3700, suffix: '+' },
            { title: "Clients using RealHRsoft", start: 0, end: 15, suffix: '+' },
            { title: "Client Support Satisfaction", start: 0, end: 100, suffix: '%' },
            { title: "Future Ready Technology Used", start: 15, end: 1, prefix: '#' },
        ],


    }),
}
</script>