<template>
    <v-item-group multiple class="mt-7">

        <v-container>
            <v-row>

                <v-col v-for="item in items" :key="item.name" cols="12" md="4">
                    <v-item>
                        <v-lazy :min-height="200" :options="{ 'threshold': 0.5 }" transition="fade-transition">
                            <v-card class="mx-auto" max-width="344">
                                <v-img :src="require('../assets/' + item.imgLink)" height="200px" cover></v-img>
                                <v-card-title> {{ item.title }} </v-card-title> <v-card-subtitle> {{ item.language }}
                                </v-card-subtitle>

                                <v-card-actions>
                                    <a :href="item.link"><v-btn color="blue-darken-1" rounded variant="outlined"
                                            class="align-left">
                                            View
                                        </v-btn>
                                    </a>
                                </v-card-actions>

                                <v-card-text>
                                    {{ item.desc }}
                                </v-card-text>
                            </v-card>
                        </v-lazy>
                    </v-item>
                </v-col>

            </v-row>
        </v-container>
    </v-item-group>
</template>
<script>
export default {
    name: "project-card",
    data: () => ({
        items: [
            { title: 'Image Carousel', link: '	https://razeen1.github.io/aayulogic/imageCarousel/', desc: 'An image carousel made using javascript using fetch api to fetch ramdom images from Unsplash. ', language: 'JavaScript', imgLink: "imgCar.png" },
            { title: 'Lms Website', link: 'https://razeen1.github.io/aayulogic/lms/', desc: 'A singel page lms website made using Html and CSS with various components/blogs/classes etc  ', language: 'Html/CSS', imgLink: "lms.png" },
            { title: 'Hangman', link: 'https://razeen1.github.io/aayulogic/hangman/', desc: 'Hnage man game using javascript and canvas wher one can guess the letter and take hints made using canvas', language: 'JavaScript', imgLink: "hangman.png" },
        ],
    }),
}
</script>
