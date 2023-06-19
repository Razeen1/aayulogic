<template>
  <v-item-group>
    <v-card color="blue-darken-2" rounded="0" class="overflow-visible">
      <v-container>
        <v-row>
          <v-col>
            <div>
              <div class=" d-flex flex-column justify-center fill-height align-left mt-16 mr-6 text-justify ">
                <h1 class=" text-h2 font-weight-light mt-16">Hello World</h1>
                <h5 class="text-h6 font-weight-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                  assumenda
                  dicta, sunt tempora neque quae modi facilis quia pariatur sit iusto atque voluptatem delectus recusandae
                  nulla
                  optio cum aut veritatis?</h5>
                <div>
                  <v-btn class="mt-6 mb-6 mr-6 text-blue-darken-4" rounded="xl">Click Me</v-btn>
                  <v-btn class="mt-6 mb-6 text-blue-darken-4" rounded="xl">Learn More</v-btn>
                </div>
              </div>
            </div>
          </v-col>
          <v-col>
            <div class=" d-flex flex-column justify-center  align-center mt-16  mb-16">
              <v-img src="../assets/logo.svg" width="70%" aspect-ratio="16/9" class="mt-10"></v-img>
            </div>
          </v-col>
        </v-row>
        <v-row class=" d-flex flex-column justify-center  align-center">
          <v-card class="mb-n10" width="100%">
            <v-item-group multiple>
              <v-container>
                <v-row>
                  <v-col v-for="logo in logos" :key="logo.name">
                    <v-hover v-slot="{ isHovering, props }">
                      <v-img :src="logo.link" width="100px" height="50px" class="ma-2" v-bind="props" aspect-ratio="1/1"
                        cover>
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
          </v-card>
        </v-row>
      </v-container>
    </v-card>

  </v-item-group>
</template>

<script>

export default {
  name: 'HelloWorld',

  data: () => ({
    logos: [
      { link: 'https://cdn.cdnlogo.com/logos/j/44/javascript.svg', title: "JS" },
      { link: 'https://cdn.cdnlogo.com/logos/v/69/vue.svg', title: "VUE" },
      { link: ' https://cdn.cdnlogo.com/logos/h/84/html.svg', title: "HTML" },
      { link: 'https://cdn.cdnlogo.com/logos/c/18/css.svg', title: "CSS" },
      { link: 'https://cdn.cdnlogo.com/logos/v/50/vuetify.svg', title: "VUE" },
      // { link: ' https://cdn.cdnlogo.com/logos/h/84/html.svg', title: "HTML" },
    ],
    importantLinks: [
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Roadmap',
        href: 'https://vuetifyjs.com/introduction/roadmap/',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
}
</script>
