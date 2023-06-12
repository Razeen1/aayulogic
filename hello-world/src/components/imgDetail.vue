<template> 
    <div class="cards" >
        
      <div class="card" v-for="imgD of imgData" :key="imgD.id" >
      <img :src="imgD.urls.regular" alt="images">
      <div class="container">
      <h4>{{imgD.alt_description.toUpperCase()}}</h4> 
      
    </div>
  </div>
  </div> 
  </template>
  
  <script>
      export default{
          name:'image-Details',
          props:[
          'imgData',
          ],
      }
  
  
  </script>