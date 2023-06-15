<template>
  <v-parallax src="../assets/about.jpg" height="700px">
    <div class="d-flex flex-column justify-center fill-height align-center text-blue-darken-2 ">
      <h1 class="text-h1 font-weight-light mb-4">About me</h1>
      <h4 class="text-h4 font-weight-thin">Know more about me</h4>
    </div>

  </v-parallax>
  <v-card>
    <div
      class="d-flex flex-column justify-center fill-height align-center text-blue-darken-4 mt-16 mr-16 ml-16 mb-16 text-justify ">
      <h1 class="text-h2 font-weight-light">Studies</h1>
      <h5 class="text-h6 font-weight-thin">Which schools did I attend?</h5>
      <v-timeline side="end" align="start" class="mt-6">
        <v-timeline-item dot-color="blue" size="small" v-for="item in items" :key="item.name" :icon="item.icon" fill-dot>
          <div class="d-flex">
            <strong class="me-4">{{ item.year }}</strong>
            <div>
              <strong>{{ item.title }}</strong>
              <div class="text-caption">
                {{ item.desc }}
              </div>
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>



    </div>

  </v-card>
  <v-card color="blue-darken-2">
    <div class="d-flex flex-column justify-center fill-height align-center  mt-16 mr-16 ml-16 mb-16 text-justify ">
      <h1 class="text-h2 font-weight-light">Languages</h1>
      <h5 class="text-h6 font-weight-thin">Languages I work with</h5>
      <v-item-group multiple class="mt-7 ">
        <v-container>

          <v-row>

            <v-col v-for="logo in logos" :key="logo.name">
              <v-hover v-slot="{ isHovering, props }">
                <v-img :src="logo.link" width="100px" height="100px" class="ma-2" v-bind="props" aspect-ratio="1/1" cover>
                  <v-expand-transition>
                    <div v-if="isHovering"
                      class="d-flex transition-fast-in-fast-out bg-blue-lighten-2 v-card--reveal text-h6 text-white justify-center align-center"
                      style="height: 100%;">
                      {{ logo.title }}
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-hover>
            </v-col>

          </v-row>
        </v-container>
      </v-item-group>
    </div>

  </v-card>
  <v-card>
    <div class="d-flex flex-column justify-center fill-height align-center  mt-16 mr-16 ml-16 mb-16 text-justify ">
      <h1 class="text-h2 font-weight-light">Check out my projects</h1>
      <v-item-group multiple class="mt-7 ">
        <v-container>

          <v-row>

            <v-col v-for="project in projects" :key="project.name" cols="14">
              <v-hover v-slot="{ isHovering, props }">
                <v-card color="blue-darken-2" v-bind="props" width="200px" height="120px"
                  class=" align-right justify-center" to="/">

                  <v-fade-transition>
                    <div v-if="isHovering"
                      class="d-flex transition-fast-in-fast-out bg-blue-lighten-2 v-card--reveal text-h6 text-white justify-center align-center"
                      style="height: 100%;">
                      {{ project.title }}
                    </div>

                  </v-fade-transition>
                  <v-card-item><v-icon :icon="project.logo"></v-icon></v-card-item>
                  <v-card-title>{{ project.title }}</v-card-title>
                  <v-card-subtitle>Check out my {{ project.title }}</v-card-subtitle>

                </v-card>
              </v-hover>
            </v-col>

          </v-row>
        </v-container>
      </v-item-group>

    </div>

  </v-card>
</template>
<style>
/* .hometxt {
  margin-top: 100px !important;
  padding-top: 100px !important;
} */
</style>
<script>
export default {
  name: "aboutView",
  data: () => ({
    items: [
      { title: 'St. Xaviers College', desc: 'Maitigahr, Kathmandu', icon: 'mdi-badge-account', year: '2018' },
      { title: 'Chealsea International Academy', desc: 'Baneshwor,Kathmandu', icon: 'mdi-school', year: '2016' },
      { title: 'College of College', desc: 'XYZ street', icon: "mdi-book-education", year: '2010' },
    ],
    logos: [
      { link: 'https://cdn.cdnlogo.com/logos/j/44/javascript.svg', title: "JS" },
      { link: 'https://cdn.cdnlogo.com/logos/v/69/vue.svg', title: "VUE" },
      { link: ' https://cdn.cdnlogo.com/logos/h/84/html.svg', title: "HTML" },
      { link: 'https://cdn.cdnlogo.com/logos/c/18/css.svg', title: "CSS" },
      { link: 'https://cdn.cdnlogo.com/logos/v/50/vuetify.svg', title: "VUE" },
      // { link: ' https://cdn.cdnlogo.com/logos/h/84/html.svg', title: "HTML" },
    ],
    projects: [
      { title: 'Github', logo: 'mdi-github' },
      { title: 'Behance', logo: 'mdi-palette' },
      { title: 'Dribble', logo: 'mdi-chart-donut' },


    ],
  }),
}
</script>
