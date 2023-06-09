<template> 
  <div class="cards" >
    <div class="card" v-for="per in person" :key="per.name" >
    <img src="../assets/logo.png" alt="Avatar" style="width:100%">
    <div class="container">
    <h4><b>{{per.name}}</b> </h4> 
    <p>{{ per.location }}   <span class="dot" :style="{backgroundColor:per.color}"></span></p> 
  </div>
</div>
</div> 
</template>

<script>
    export default{
        name:'image-Card',
        props:[
        'person',
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
.dot {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  display: inline-block;
}
.cards{
    display: flex;
    flex-wrap: wrap;

}
</style>