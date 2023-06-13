<template>
  <Navbar></Navbar>
  <RouterView>
  </RouterView>
</template>

<style>
body {
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a:link {
  text-decoration: none;
  color: rgb(65, 65, 65);
}

a:visited {
  text-decoration: none;
  color: rgb(65, 65, 65);
}

a:hover {
  text-decoration: none;
  color: black;
}
</style>
<script>
import Navbar from './components/navbar.vue';


export default {
  name: "App",
  components: { Navbar }
}

</script>