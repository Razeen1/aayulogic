<template>
    <div>
        <h1>Home</h1>
        <p>This is Home</p>
        <ImageCard />
    </div>
</template>

<script>
import ImageCard from './ImageCard.vue';
    export default{
        name:'home-default',
        components:{
            ImageCard
        }
    }
</script>