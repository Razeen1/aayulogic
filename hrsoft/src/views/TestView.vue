<template>
    <v-btn @click="dialog = !dialog">Click</v-btn>
    <div class="container mx-auto">
        <v-slide-x-transition hide-on-leave>
            <v-img v-show="dialog" src="../assets/animations/1.png" class="image1">
            </v-img>
        </v-slide-x-transition>
        <v-slide-x-reverse-transition hide-on-leave>
            <v-img v-show="dialog" src="../assets/animations/2.png" class="image2">
            </v-img>
        </v-slide-x-reverse-transition>
        <v-slide-y-transition hide-on-leave>
            <v-img v-show="dialog" src="../assets/animations/3.png" class="image3">
            </v-img>
        </v-slide-y-transition>
        <v-slide-y-reverse-transition hide-on-leave>
            <v-img v-show="dialog" src="../assets/animations/4.png" class="image4">
            </v-img>
        </v-slide-y-reverse-transition>
    </div>
    <p>hello</p>
    <v-card class="d-flex flex-column align-center  text-center" flat color="blue-lighten-4" height="100%">
        <h2 class="text-blue-darken-4 mt-6 mt-md-14">Trusted by Top HR Teams in Nepal</h2>
        <v-item-group multiple class="mt-md-10 mb-md-16">
            <v-container>
                <div class="mr-md-16 ml-md-16">

                    <div>
                        <v-carousel cycle height="400" hide-delimiters show-arrows="hover">
                            <template v-slot:prev="{ props }">
                                <v-btn @click="props.onClick" variant="plain" color="white"><v-icon
                                        icon="mdi-chevron-left"></v-icon></v-btn>
                            </template>
                            <template v-slot:next="{ props }">
                                <v-btn @click="props.onClick" variant="plain" color="white"><v-icon
                                        icon="mdi-chevron-right"></v-icon></v-btn>
                            </template>
                            <v-carousel-item v-for="item in items" :key="item.name">

                                <v-sheet height="100%" color="transparent">
                                    <div class="d-flex fill-height justify-center align-center pr-6 pl-6 ">

                                        <v-card class="elevation-4 rounded-0 pa-6   blurbg" flat
                                            color="rgb(255, 255, 255,0.8)" width="70%">

                                        </v-card>
                                        <v-card class="text-grey bgtext" flat color="transparent" width="70%">
                                            <div class="text-subtitle-1 text-justify mt-10 mb-6 pb-6 pr-6 pl-6 ">
                                                {{ item.title }}
                                            </div>
                                            <v-img :src="require('../assets/' + item.imgLink)" height="40px"
                                                class=" mb-10 pr-6 pl-6 "></v-img>
                                        </v-card>
                                    </div>
                                </v-sheet>
                            </v-carousel-item>
                        </v-carousel>


                    </div>

                </div>
            </v-container>
        </v-item-group>
    </v-card>
</template>
<style scoped>
.container {
    position: relative;
    display: flex;
    align-items: center;
    width: 300px;
    height: 300px;

}

.blurbg {
    filter: blur(8px);
    -webkit-filter: blur(8px);
}

.bgtext {

    z-index: 2;
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
</style>
<script>
export default {
    data() {
        return {
            dialog: false,
            items: [
                { title: 'If you’re looking for an all-in-one system to take care of your HR process​, go for RealHRsoft. Using RealHRsoft has not only helped make the whole process efficient, but also extremely hassle-free. What’s more, they’re constantly improving and adding new features based on our feedback!', imgLink: "merojob.png" },
                { title: 'Trusted by Top HR Teams in Nepal We have had a wonderful experience since the time we began working with RealHRsoft, our HR workload has reduced considerably ever since. If you’re looking for an all-in-one HR product, RealHRsoft gets our big thumbs up as the top choice.', imgLink: "hgi.png" },
                { title: 'To continue to grow, we had to ensure our business processes, including HR are smart, efficient and we got that with RealHRsoft. Using RealHRsoft we have been able to set up a user-friendly system that allows us to track attendance and leaves, streamline our monthly payroll process and reduce costs and paperwork.', imgLink: "good.png" },
            ],
        }
    }
}
</script>