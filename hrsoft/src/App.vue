<template>
  <RequestDemo></RequestDemo>
  <NavBar></NavBar>
  <router-view />
</template>

<script>

import NavBar from './components/NavBar.vue';
import RequestDemo from './components/RequestDemo.vue';
export default {
  name: "App",
  data: () => ({
    //
  }),
  components: { NavBar, RequestDemo }
}
</script>
