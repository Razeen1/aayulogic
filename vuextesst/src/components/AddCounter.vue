<template>
    <div class="container">
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-primary" v-on:click="iaddvalue()">Add</button>

            </div>
        </div>
    </div>
</template>
  
<script>


export default {
    methods: {

        iaddvalue() {
            this.$store.commit('increment', 50)

        }


    }
}
</script>