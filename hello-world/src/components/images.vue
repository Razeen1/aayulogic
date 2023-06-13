<template>
  <div class="cards">
    <div class="card" v-for="imgD of imgData" :key="imgD.id">
      <router-link :to="{ name: 'imagedesc', params: { id: imgD.id } }">

        <img :src="imgD.urls.regular" alt="images">
        <div class="container">
          <h4>{{ imgD.alt_description.toUpperCase() }}</h4>

        </div>

      </router-link>
    </div>
  </div>
</template>
  
<script>

export default {
  name: "image-F",
  props: [
    "imgData",
  ],
  data() {
    return {
      imageView: {}
    }
  },

}


</script>
  
<style scoped>
.card {
  flex: 20%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  margin: 20px;
}

.card:hover {
  box-shadow: -6px 10px 16px 0 rgba(0, 0, 0, 0.3);
}

.container {
  padding: 2px 16px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  text-align: center;
}

img {
  width: 100%;
  height: 200px;
}
</style>