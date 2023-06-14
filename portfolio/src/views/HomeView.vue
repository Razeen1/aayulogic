<template>
  <v-parallax src="../assets/background.png" height="700px">
    <div class="d-flex flex-column fill-height justify-center align-center text-white ">
      <h1 class="text-h1 font-weight-light mb-4">Hello!</h1>
      <h4 class="text-h4 font-weight-thin">Welcome to my website</h4>
    </div>
  </v-parallax>
  <v-card>
    <div>
      <div
        class="d-flex flex-column justify-center fill-height align-center text-blue-darken-4 mt-16 mr-16 ml-16 text-justify  mb-16">
        <h1 class="text-h2 font-weight-light">Hi!</h1>
        <h4 class="text-h4 font-weight-thin">I am John Doe</h4>
        <div class="d-flex">
          <p class="text-subtitle-1 mt-6 font-weight-light mr-6 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dolor ligula, finibus nec tellus sit amet,
            placerat
            vehicula nibh. Ut rhoncus faucibus arcu nec elementum. Quisque consequat neque a mi elementum, ac rhoncus
            justo
            ultricies. Nulla vel libero et enim ultricies auctor. Fusce dictum ante eu fringilla dapibus. Aenean ultricies
            eu
            magna sit amet efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis nunc orci,
            id
            mollis nisi eleifend eget. Pellentesque commodo massa velit, et bibendum erat auctor semper. Nullam eu lacus
            nec
            nisl condimentum dictum id convallis leo. Praesent eu dui tempor, pretium ex in, pulvinar justo. Integer
            luctus
            tellus ut massa tristique aliquam.
            <br>
            Vivamus venenatis tellus sed nunc posuere maximus in rutrum ipsum. Vivamus ultricies congue laoreet. Morbi
            fermentum dictum risus sit amet vulputate. Sed vitae pellentesque elit, vel dictum ante. Nulla fringilla
            tempor
            odio, non blandit lectus pulvinar at. Nunc ultricies bibendum risus, non ullamcorper tellus tincidunt sit
            amet.
            Vestibulum vel pellentesque nulla, vitae pellentesque sem. Vestibulum sit amet justo congue, tincidunt ipsum
            eu,
            fermentum est. Quisque ut magna posuere, congue augue sit amet, condimentum metus.
          </p>
          <v-img :width="600" aspect-ratio="4/3" cover src="../assets/homeProfile.jpg" class="mt-6"></v-img>
        </div>
      </div>
    </div>
  </v-card>
  <v-parallax src="../assets/background.png">
    <div class="d-flex flex-column justify-center align-center text-white mt-16">
      <h1 class="text-h3 font-weight-light ">Projects</h1>
      <h4 class="text-h5 font-weight-light">Some of my projects</h4>
    </div>
    <ProjectCard></ProjectCard>
  </v-parallax>
  <v-card>
    <div
      class="d-flex flex-column justify-center fill-height align-center text-blue-darken-4 mt-16 mr-16 ml-16 mb-16 text-justify ">
      <h1 class="text-h2 font-weight-light">What do i do?</h1>
      <p class="text-subtitle-1 mt-6 font-weight-light mr-6 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dolor ligula, finibus nec tellus sit amet,
        placerat
        vehicula nibh. Ut rhoncus faucibus arcu nec elementum. Quisque consequat neque a mi elementum, ac rhoncus
        justo
        ultricies. Nulla vel libero et enim ultricies auctor. Fusce dictum ante eu fringilla dapibus. Aenean ultricies
        eu
        magna sit amet efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis nunc orci,
        id
        mollis nisi eleifend eget. Pellentesque commodo massa velit, et bibendum erat auctor semper. Nullam eu lacus
        nec
        nisl condimentum dictum id convallis leo. Praesent eu dui tempor, pretium ex in, pulvinar justo. Integer
        luctus
        tellus ut massa tristique aliquam.
        <br>
        Vivamus venenatis tellus sed nunc posuere maximus in rutrum ipsum. Vivamus ultricies congue laoreet. Morbi
        fermentum dictum risus sit amet vulputate. Sed vitae pellentesque elit, vel dictum ante. Nulla fringilla
        tempor
        odio, non blandit lectus pulvinar at. Nunc ultricies bibendum risus, non ullamcorper tellus tincidunt sit
        amet.
        Vestibulum vel pellentesque nulla, vitae pellentesque sem. Vestibulum sit amet justo congue, tincidunt ipsum
        eu,
        fermentum est. Quisque ut magna posuere, congue augue sit amet, condimentum metus.
      </p>
    </div>

  </v-card>
</template>

<script>

import ProjectCard from '@/components/ProjectCard.vue';

export default {
  name: "HomeView",
  data: () => ({
    show: false,
  }),
  components: { ProjectCard }
}
</script>
<style></style>