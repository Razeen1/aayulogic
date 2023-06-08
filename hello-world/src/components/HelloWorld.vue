<template>
  <input type="Text" v-model="newRow.name" placeholder="Enter Name"/>
  <input type="Text" v-model="newRow.color" placeholder="Enter Color"/>
  <input type="Text" v-model="newRow.location" placeholder="Enter Address"/>
  <button @click="enterData" >Add</button>
  <Button :person="person" />
   <!-- <p>{{ person }}</p> -->
</template>

<script>
import Button from './button.vue';
export default {
  name: 'App',
  data(){
    return{
      person:[],
      newRow: { name: "", color:"",location: "" },
    }
  },
  components: {
    Button
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