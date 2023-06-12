<template> 

    <div class="cards" >
      <div class="card" v-for="imgD of imgData" :key="imgD.id" >
        <router-link to="/imagedesc">
      <img :src="imgD.urls.regular" alt="images">
      <div class="container">
      <h4>{{imgD.alt_description.toUpperCase()}}</h4> 
      
    </div>
  </router-link>
  </div>
  </div> 

  </template>
  
  <script>

      export default{
    name: "image-F",
    props: [
        "imgData",
    ],
}
  
  
  </script>
  
  <style scoped>
  .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 20%;
    margin:20px;
    
    
  }
  
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  
  .container {
    padding: 2px 16px;
  }

  .cards{
      display: flex;
      flex-wrap: wrap;
  }
  img{
    width: 100%;
    height: 200px;
  }
  </style>