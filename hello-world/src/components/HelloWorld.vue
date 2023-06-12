<template>
  <ul>
  <li v-for="tab of tabs" :key="tab" @click="currentTab=tab"  :class="['tab-button', { active: currentTab === tab }]"><button>{{tab}}</button></li>
</ul>

  
  <component :is="currentTab"> 
  </component> 

</template>

<script>
import Enter from './Enter.vue';
import Home from './Home.vue';
import About from './About.vue';
export default {
  name: 'App',
  data(){
    return{
      tabs:[
        'Home',
        'About',
        'Enter'
      ],
      currentTab:'Home',
    }
  },
  components: {
    Home,
    About,
    Enter

  }
  
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li button {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li button:hover {
  background-color: #111;
}
button{
  background:none;
  border:none;
}
</style>
