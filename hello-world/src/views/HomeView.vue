<template>
  <div>
    <h1>
      Home
    </h1>
    <p>Some images</p>
    <div class="slideshow-container">

    </div>
    <br>
  </div>

  <images :imgData="imageData"></images>
</template>

<script>
import imageData from "@/assets/images.json"
import images from "@/components/images.vue"

export default {
  name: 'home-default',

  setup() {

    return {
      imageData,
    }
  },
  components: {
    images
  }
}
</script>

<style></style>