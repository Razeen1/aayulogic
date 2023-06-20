<template>
    <v-card color="blue-darken-2" rounded="0" class="overflow-visible " flat style='z-index:99'>
        <v-container>
            <v-row>
                <v-col cols="12" md="6">
                    <div>
                        <div class=" d-flex flex-column justify-center fill-height align-left  mt-16 mr-6 text-justify ">
                            <h1 class=" text-h1 font-weight-bold mt-16">Hello World</h1>
                            <h5 class="text-subtitle-1 font-weight-regular">Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                                Quidem
                                assumenda
                                dicta, sunt tempora neque quae modi facilis quia pariatur sit iusto atque voluptatem
                                delectus recusandae
                                nulla
                                optio cum aut veritatis?</h5>
                            <div>
                                <v-btn class="mt-6 mb-6 mr-6 text-blue-darken-4" to="/#contact">Click Me</v-btn>
                                <v-btn class="mt-6 mb-6 text-blue-darken-4" to="/#feature">Learn More</v-btn>
                            </div>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="6">
                    <div class=" d-flex flex-column  align-center align-md-end mt-16  mb-16">
                        <v-img src="../assets/logo.svg" width="70%" aspect-ratio="16/9" class="mt-10"></v-img>
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
                                                separator=',' decimalSeparator='.' :autoinit='true' />
                                        </h1>
                                        <h4>{{ item.title }}</h4>
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
            { title: "Downloads", start: 0, end: 50000 },
            { title: "Users", start: 0, end: 290000 },
            { title: "Clients", start: 0, end: 200 },
            { title: "Ranking", start: 600, end: 1 },
        ],


    }),
}
</script>