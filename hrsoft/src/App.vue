<template>
  <NavBar></NavBar>
  <router-view />
</template>

<script>

import NavBar from './components/NavBar.vue';
export default {
  name: "App",
  data: () => ({
    //
  }),
  components: { NavBar }
}
</script>
