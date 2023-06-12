<template>
    <div class="table">
   <table style="">
    <tr>
        <th>
            Name
        </th>
        <th>
            Address
        </th>
    </tr>
    <tr v-for="per in person" :key="per.name" :style="{color:per.color}">
      <td>{{per.name}}</td>
      <td>{{ per.location }}</td>
    </tr>
   </table>
</div>
  </template>

  <script>
  export default {
    name: 'button-item',
    props:[
        'person',
    ],
    data(){
        return {
           
        }
    },
    methods: {
        helloWorld(){
            this.name2="Hello " + this.name
            this.address1="From " + this.address
        }
    }
  }
  </script>

  <style >
table, th, td {
  border: 1px solid white;
  border-collapse: collapse;
  text-align: left;
  
}
td {
  background-color: #494949;
 
}
th{
    background-color: #202020;
    color: #ffffff;
}

</style>