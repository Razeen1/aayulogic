<template>
    <v-sheet class="mx-auto elevation-0 " width="100%">
        <v-slide-group v-model="model" class="pa-4" center-active width="100%" :show-arrows="false">
            <v-slide-group-item v-for="item in logos" :key="item.name">
                <v-card class="ma-4 rounded-xl elevation-0">
                    <v-img :src="require('../assets/' + item.link)" class="pa-6"></v-img>
                </v-card>
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
</template>
  
<script>
export default {
    data: () => ({
        model: 3,
        logos: [
            { link: 'merojob.png' },
            { link: 'hgi.png' },
            { link: 'good.png' },
            { link: 'merojob.png' },
            { link: 'hgi.png' },
            { link: 'good.png' },
            { link: 'merojob.png' },
            { link: 'hgi.png' },
            { link: 'good.png' },
            { link: 'merojob.png' },
            { link: 'hgi.png' },
            { link: 'good.png' },
            { link: 'merojob.png' },
            { link: 'hgi.png' },
            { link: 'good.png' },
            { link: 'merojob.png' },
            { link: 'hgi.png' },
            { link: 'good.png' },


        ]
    }),
    created() {
        this.interval = setInterval(() => this.changeSlide(), 750)
    },
    methods: {
        changeSlide() {
            this.model++;
            this.model == 16 ? (this.model = 3) : "";
        },
    },

}
</script>
  