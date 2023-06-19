<template>
    <div class="container">
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-primary" v-on:click="removeCounter()">Remove</button>
            </div>
        </div>
    </div>
</template>
  
<script>
import store from '../store/store';


export default {
    methods: {
        removeCounter() {
            store.commit('decrement', 50)
        }
    }
}
</script>