<template>
    <v-btn @click="dialog = !dialog">Click</v-btn>
    <div class="container mx-auto">
        <v-slide-x-transition hide-on-leave>
            <v-img v-show="dialog" src="../assets/animations/1.png" class="image1">
            </v-img>
        </v-slide-x-transition>
        <v-slide-x-reverse-transition hide-on-leave>
            <v-img v-show="dialog" src="../assets/animations/2.png" class="image2">
            </v-img>
        </v-slide-x-reverse-transition>
        <v-slide-y-transition hide-on-leave>
            <v-img v-show="dialog" src="../assets/animations/3.png" class="image3">
            </v-img>
        </v-slide-y-transition>
        <v-slide-y-reverse-transition hide-on-leave>
            <v-img v-show="dialog" src="../assets/animations/4.png" class="image4">
            </v-img>
        </v-slide-y-reverse-transition>
    </div>
    <p>hello</p>
</template>
<style scoped>
.container {
    position: relative;
    display: flex;
    align-items: center;
    width: 300px;
    height: 300px;

}

.image1 {
    position: absolute;
    z-index: 1;
    width: 100%;
    top: 0;
    left: 0;
}

.image2 {
    position: absolute;
    z-index: 2;
    /* Place this image in front of the img1 */
    width: 100%;
    top: 100px;
    left: 100px;
}

.image3 {
    position: absolute;
    z-index: 2;
    /* Place this image in front of the img1 */
    width: 100%;
    bottom: 0px;
    right: 100px;
}

.image4 {
    position: absolute;
    z-index: 2;
    /* Place this image in front of the img1 */
    width: 100%;

    right: 100px;
    bottom: 50px;
}
</style>
<script>
export default {
    data() {
        return {
            dialog: false,
        }
    }
}
</script>