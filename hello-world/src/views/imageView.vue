<template>
    <h1>{{ imgD.alt_description.toUpperCase() }}</h1>
    <img :src="imgD.urls.regular" style="width: 50%; height:auto"> 
    <p>{{ imgD.description }}</p>
    

</template>

<script>


import imageData from "@/assets/images.json"
import { useRoute } from 'vue-router'
export default{
name: "image-Desc",
setup(){
    const route = useRoute();
    let id = route.params.id;
    let imgD;
          imageData.forEach(element => {
            if(element.id==id){
                imgD=element;
            }
          });
          return{
            imgD
          }
                },

}


</script>