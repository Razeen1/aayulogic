<template>
    <v-card class="d-flex flex-column align-center  text-center" color="#F0FBFF99" flat>
        <h2 class="text-blue-darken-4 mt-14">Why do you need RealHRsoft to Manage<br />
            your most Important Resources?</h2>
        <v-item-group multiple class="mt-10 mb-16">
            <v-container>
                <v-row>

                    <v-col v-for="item in items" :key="item.name" cols="12" md="4">

                        <v-item>
                            <v-lazy :min-height="200" :options="{ 'threshold': 0.2 }" transition="fab-transition">
                                <v-hover>
                                    <template v-slot:default="{ isHovering, props }">
                                        <v-card v-bind="props" class="mx-auto "
                                            :class="isHovering ? 'elevation-6' : 'elevation-1'">
                                            <v-img :src="require('../assets/' + item.imgLink)" height="70px"
                                                class="mt-10"></v-img>
                                            <v-card-title class="text-subtitle-2 font-weight-medium mt-5 mb-5"> {{
                                                item.title }}
                                            </v-card-title>
                                            <v-card-text class="text-caption mb-6">
                                                {{ item.desc }}
                                            </v-card-text>
                                        </v-card>
                                    </template>
                                </v-hover>
                            </v-lazy>
                        </v-item>

                    </v-col>

                </v-row>
            </v-container>
        </v-item-group>
    </v-card>
</template>
<script>
export default {
    name: "whySection",
    data: () => ({
        items: [
            { title: 'True Leaders create Better Successors!', desc: 'RealHRsoft can help you identify a successor that will transform your vision to even bigger heights!', imgLink: "leadership-graphic.png" },
            { title: 'Human Resource, not Human Records!', desc: 'RealHRsoft goes beyond just Human Records, and truly lets you manage your Human Resources ', imgLink: "hr-graphic.png" },
            { title: 'Motivated teams lead to Successful Projects', desc: 'RealHRsoft can help you build a successful project team to meet your key targets this year.', imgLink: "success-graphic.png" },
        ],
    }),
}
</script>

