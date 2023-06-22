<template>
  <RequestDemo></RequestDemo>

  <router-view />
</template>

<script>

// import NavBar from './components/NavBar.vue';
import RequestDemo from './components/RequestDemo.vue';
export default {
  name: "App",
  data: () => ({
    //
  }),
  components: { RequestDemo }
}
</script>




<style lang="scss" ></style>

