<template>
    <h1>
        Enter Your Details
    </h1>
    <div>
    <input type="Text" v-model="newRow.name" placeholder="Enter Name"/>
    <input type="Text" v-model="newRow.color" placeholder="Enter Color"/>
    <input type="Text" v-model="newRow.location" placeholder="Enter Address"/>
    <button @click="enterData" >Add</button>
  <ImageCard :person="person" />
    </div>
</template>

<script>
import ImageCard from './ImageCard.vue';
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
            this.person.push({ ...this.newRow });
            this.newRow.name = "";
            this.newRow.color = "";
            this.newRow.location = "";
      
    }
  }
}
</script>

