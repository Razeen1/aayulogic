<template> 
   
<div class="card" v-for="per in person" :key="per.name" :style="{color:per.color}">
  <img src="../assets/logo.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>{{per.name}}</b></h4> 
    <p>{{ per.location }}</p> 
  </div>
</div>
</template>

<script>
    export default{
        name:'image-Card',
        props:[
        'person',
        ],
        altDescription:'',
        url:'',
    }
    // fetch(
    //     "https://api.unsplash.com/photos/random/?count=5&client_id=Xy5FVewzbaH374GWrbZQnsBRLFEyU2l7q9iBt6981g8"
    
    // )
    // .then((response) => {
    //     response.json().then((data) => {
    //         this.altDescription = data[0].alt_description;
    //         this.url=data[0].url;
            
    //       })
    //       .catch((err) => {
    //       console.error(err);
    //     });
    // });


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

</style>