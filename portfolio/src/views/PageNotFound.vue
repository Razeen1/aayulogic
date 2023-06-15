<template>
    <div class="d-flex flex-column justify-center fill-height align-center text-grey-darken-5 ma-16 pa-16"
        style="height:500px">
        <h1 class="text-h1 font-weight-bold mb-4 ">Oops!</h1>
        <h4 class="text-h5 font-weight-bold">The page you are looking for doesnt exist</h4>
        <button class="mt-4 " @click="$router.go(-1)">Go back</button>
    </div>
</template>
<style scoped>
button {
    margin: 30px !important;
    background-color: #1976D2;
    padding: 10px 20px;
    border-radius: 4px;
    color: white !important;
}
</style>