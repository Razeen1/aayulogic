<template>
  <ul>
    <router-link to="/">
      <li @click="currentTab = 'home'" :class="['tab-button', { active: currentTab === 'home' }]"><button>Home</button>
      </li>
    </router-link>
    <router-link to="/about">
      <li @click="currentTab = 'about'" :class="['tab-button', { active: currentTab === 'about' }]"><button>About</button>
      </li>
    </router-link>
    <router-link to="/enter">
      <li @click="currentTab = 'enter'" :class="['tab-button', { active: currentTab === 'enter' }]"><button>Enter</button>
      </li>
    </router-link>
  </ul>
</template>
<style>
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

button {
  background: none;
  border: none;
}
</style>
<script>
import { useRoute } from 'vue-router';

export default {
  name: "nav-bar",
  setup() {
    const route = useRoute();
    let currentTab = route.name;
    console.log(currentTab);
    return {
      currentTab
    }
  },

}
</script>