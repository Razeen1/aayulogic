<template>
  <Navbar></Navbar>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue';
import Navbar from "@/components/Navbar.vue"
export default defineComponent({
  name: 'Home-View',

  components: {
    Navbar,
  },
});
</script>
