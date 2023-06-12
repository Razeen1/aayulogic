<template>
    <h1>
        Enter Your Details
    </h1>
    <div class="forms" >
    <input type="Text" v-model="newRow.name" placeholder="Enter Name"/><br>
    <input type="Text" v-model="newRow.location" placeholder="Enter Address"/>
    <div class="label">
    <input type="radio" id="Red" value="Red" v-model="newRow.color">
    <label for="Red">Red</label>
    <input type="radio" id="Green" value="Green" v-model="newRow.color">
    <label for="Green">Green</label>
    <input type="radio" id="Yellow" value="Yellow" v-model="newRow.color">
    <label for="Yellow">Yellow</label><br>
  </div>
    <button @click="enterData" >Add</button>
  <ImageCard :person="person" />
    </div>
 
</template>

<script>
import ImageCard from '@/components/ImageCard.vue';
    export default{
    name:'enter-detail',
    data(){
    return{
      person:[],
      newRow: { name: "", color:"",location: "" },
    }
  },
  components: {
    ImageCard

  },
  methods:{
    enterData(){
      if(this.newRow.name){
            this.person.push({ ...this.newRow });
            this.newRow.name = "";
            this.newRow.color = "";
            this.newRow.location = "";
      }
    }
  }
}
</script>

<style scoped>
.forms{
  padding: 20px;
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  margin:0px;
}
input{
  padding: 10px;
  margin: 5px;
  width:100%;

}
button{
  padding: 10px 20px;
  background: none;
  margin:5px;
  width:100%;
  border:1px solid black;
}
.label{
  display:flex;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

