<template>
    <v-card style="background: linear-gradient(60deg, #0F4EA5 0%, #0FA597 100%); ;z-index:99" rounded="0"
        class="overflow-visible " flat>
        <v-container>
            <v-row class="mb-md-16">
                <v-col cols="12" md="6" class="ma-0">
                    <v-lazy :min-height="200" :options="{ 'threshold': 0.2 }" transition="slide-x-transition">
                        <div>
                            <div
                                class=" d-flex flex-column justify-center fill-height align-left  mt-16 mr-6 text-justify text-white ">
                                <h2 class=" text-h2 font-weight-bold mt-16 heroTitle">Nepal's #1<br />
                                    HR Solution</h2>
                                <h5 class="text-subtitle-1 font-weight-regular">Build a successful team for your successful
                                    tenure with our
                                    multi-function HR Platform, built for HR Teams by HR Teams</h5>
                                <div>
                                    <v-hover>
                                        <template v-slot:default="{ isHovering, props }">

                                            <v-btn class="mt-md-6 mr-2 mb-2 mt-2 mb-md-6 mr-md-6 "
                                                @click="this.$store.commit('changeState');" v-bind="props"
                                                :color="isHovering ? 'white' : '#0BB4AF'"
                                                :class="isHovering ? 'text-blue-darken-3' : 'text-white'">Request a demo
                                            </v-btn>
                                        </template>
                                    </v-hover>

                                    <v-btn class="mt-md-6 mb-md-6 text-blue-darken-4" to="/#feature">Learn More</v-btn>
                                </div>
                            </div>
                        </div>
                    </v-lazy>
                </v-col>
                <v-col cols="12" md="6" class="pa-0 ">
                    <v-lazy :min-height="200" :options="{ 'threshold': 0.2 }" transition="slide-x-reverse-transition">
                        <div class=" d-flex flex-column  align-center  mt-16  ">
                            <v-img src="../assets/herobanner.png" width="100%"></v-img>
                        </div>
                    </v-lazy>
                </v-col>
            </v-row>
            <v-row class=" block justify-center  align-center">
                <v-card class="mb-md-n12 elevation-5" style="border-radius: 12px !important" width="100%">
                    <v-item-group multiple>
                        <v-container class="pt-4 pb-4 pr-0 pl-0">
                            <v-row class=" justify-center align-center text-center ">
                                <v-col v-for="item in count" :key="item.id"
                                    class=" justify-center align-center text-center " width="20%" cols="8" sm="3">
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

<style>
.heroTitle {
    letter-spacing: 3px !important;
    line-height: 90px !important;
}
</style>