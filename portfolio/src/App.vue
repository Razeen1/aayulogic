<template>
  <Navbar></Navbar>
  <router-view />

  <Footer></Footer>
</template>

<script>
import { defineComponent } from 'vue';
import Navbar from "@/components/Navbar.vue";
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'Home-View',

  components: {
    Navbar,
    Footer,

  },
});
</script>
<style></style>