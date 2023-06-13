<template>
  <div class="imgDesc" :style="{ backgroundImage: 'url(' + imgD.urls.regular + ')' }">
    <!-- <img :src="imgD.urls.regular" style=" height:auto"> -->
    <div class="imgAbt">
      <h1>{{ imgD.alt_description.toUpperCase() }}</h1>
      <p>{{ imgD.description }}</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor, nunc nec egestas hendrerit,
        dolor mi blandit augue, at tempus libero dui at magna. Vivamus pulvinar in erat vel aliquet. Vestibulum vel
        placerat odio, quis mattis ipsum. In quis nisi metus. Donec et nisl ex. Curabitur sed metus eu tellus molestie
        bibendum eu eu nibh. Pellentesque tempor placerat massa nec consequat. Praesent dignissim dictum orci ac
        tempus.</p>
    </div>
  </div>
</template>

<script>


import imageData from "@/assets/images.json"
import { useRoute } from 'vue-router'
export default {
  name: "image-Desc",
  setup() {
    const route = useRoute();
    let id = route.params.id;
    let imgD;
    imageData.forEach(element => {
      if (element.id == id) {
        imgD = element;
      }
    });
    return {
      imgD
    }
  },

}


</script>

<style>
.imgDesc {
  display: flex;
  background-repeat: round;
  text-align: justify;
  width: 100%;
  height: 1080px;
  align-items: flex-start;

}

.imgAbt {
  padding: 0px 30px;
  color: white;
  background-color: rgba(0, 0, 0, 0.507);
  padding: 20px;
  margin: 20px;
  width: 40%;
}

img {
  object-fit: cover;
  width: 700%;
}
</style>