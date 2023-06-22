<template>
    <vue3-marquee class="mb-5">

        <v-img v-for="item in logos" :key="item.name" :src="require('../assets/' + item.link)" class="pa-6"></v-img>

    </vue3-marquee>
</template>
  
<script>
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'

export default {
    data: () => ({

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

    components: {
        Vue3Marquee,
    },

}
</script>
  