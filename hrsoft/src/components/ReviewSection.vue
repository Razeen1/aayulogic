<template>
    <v-card class="d-flex flex-column align-center  text-center" flat>
        <h2 class="text-blue-darken-4 mt-6 mt-md-14">Trusted by Top HR Teams in Nepal</h2>
        <v-item-group multiple class="mt-md-10 mb-md-16">
            <v-container>
                <v-row class="mr-md-16 ml-md-16">

                    <v-col v-for="item in items" :key="item.name" cols="12" sm="6" md="4">
                        <v-item>
                            <v-lazy :min-height="200" :options="{ 'threshold': 0.5 }" transition="fade-transition">
                                <v-card class="d-flex flex-column align-start elevation-0" height="260px">
                                    <v-img :src="require('../assets/' + item.imgLink)" height="40px"
                                        class="mt-10 ml-5"></v-img>

                                    <v-card-text class="text-caption mb-md-6 text-justify">
                                        {{ item.title }}
                                    </v-card-text>
                                </v-card>
                            </v-lazy>
                        </v-item>
                    </v-col>

                </v-row>
            </v-container>
        </v-item-group>
        <SlideReview></SlideReview>
    </v-card>
</template>
<script>
import SlideReview from './SlideReview.vue';
export default {
    name: "whySection",
    data: () => ({
        items: [
            { title: 'If you’re looking for an all-in-one system to take care of your HR process​, go for RealHRsoft. Using RealHRsoft has not only helped make the whole process efficient, but also extremely hassle-free. What’s more, they’re constantly improving and adding new features based on our feedback!', imgLink: "merojob.png" },
            { title: 'Trusted by Top HR Teams in Nepal We have had a wonderful experience since the time we began working with RealHRsoft, our HR workload has reduced considerably ever since. If you’re looking for an all-in-one HR product, RealHRsoft gets our big thumbs up as the top choice.', imgLink: "hgi.png" },
            { title: 'To continue to grow, we had to ensure our business processes, including HR are smart, efficient and we got that with RealHRsoft. Using RealHRsoft we have been able to set up a user-friendly system that allows us to track attendance and leaves, streamline our monthly payroll process and reduce costs and paperwork.', imgLink: "good.png" },
        ],
    }),
    components: { SlideReview }
}
</script>

