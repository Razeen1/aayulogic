<template>
  <v-item-group>
    <v-card color="blue-darken-2" rounded="0" class="overflow-visible " flat style='z-index:99'>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <div>
              <div class=" d-flex flex-column justify-center fill-height align-left  mt-16 mr-6 text-justify ">
                <h1 class=" text-h1 font-weight-bold mt-16">Hello World</h1>
                <h5 class="text-subtitle-1 font-weight-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem
                  assumenda
                  dicta, sunt tempora neque quae modi facilis quia pariatur sit iusto atque voluptatem delectus recusandae
                  nulla
                  optio cum aut veritatis?</h5>
                <div>
                  <v-btn class="mt-6 mb-6 mr-6 text-blue-darken-4">Click Me</v-btn>
                  <v-btn class="mt-6 mb-6 text-blue-darken-4">Learn More</v-btn>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class=" d-flex flex-column  align-center align-md-end mt-16  mb-16">
              <v-img src="../assets/logo.svg" width="70%" aspect-ratio="16/9" class="mt-10"></v-img>
            </div>
          </v-col>
        </v-row>
        <v-row class=" block justify-center  align-center">
          <v-card class="mb-n12 elevation-5" width="100%">
            <v-item-group multiple>
              <v-container>
                <v-row>
                  <v-col v-for="item in count" :key="item.id" class=" align-center text-center " width="20%">
                    <div>
                      <h1 class="text-blue-darken-3"><vue3-autocounter ref='counter' :startAmount="item.start"
                          :endAmount='item.end' :duration='2.5' separator=',' decimalSeparator='.' :autoinit='true' />
                      </h1>
                      <h4>{{ item.title }}</h4>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-item-group>
          </v-card>
        </v-row>
      </v-container>
    </v-card>

  </v-item-group>
  <v-card id="feature">
    <div class="d-flex flex-column  align-center align-md-end ma-md-16 pa-md-10">
      <v-container>
        <v-row class="  elevation-5 align-center justify-center">
          <v-col>
            <v-card class=" align-center justify-center" width="80%" height="70%" flat>
              <v-list lines="one" class=" ma-4  ">
                <v-list-subheader>Features</v-list-subheader>
                <v-list-item v-for="(item, i) in slides" :key="i" :value="item" color="blue-darken-3"
                  @click="model = item.number">

                  <template v-slot:prepend>
                    <v-icon :icon="item.icon"></v-icon>
                  </template>

                  <v-list-item-title v-text="item.text"></v-list-item-title>
                  <v-list-item-subtitle v-text="item.subtext"></v-list-item-subtitle>
                  <v-divider class="mt-2 mb-2"></v-divider>
                </v-list-item>

              </v-list>
            </v-card>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col>
            <v-carousel v-model="model" hide-delimiters :show-arrows="false">
              <v-carousel-item v-for="(item, i) in slides" :key="item" :value="i" reverse-transition="fade-transition"
                transition="fade-transition">
                <v-sheet color="transparent" tile height="100%">
                  <div class="d-flex flex-column fill-height justify-center align-center text-center">
                    <h2>{{ item.text }}</h2>
                    <p>{{ item.subtext }}</p>
                  </div>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-container>
    </div>


  </v-card>
</template>

<script>

export default {
  name: 'HelloWorld',

  data: () => ({
    count: [
      { title: "Downloads", start: 0, end: 50000 },
      { title: "Users", start: 0, end: 290000 },
      { title: "Clients", start: 0, end: 200 },
      { title: "Ranking", start: 600, end: 1 },
    ],
    slides: [
      { text: 'Real-Time', icon: 'mdi-clock', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 0 },
      { text: 'Audience', icon: 'mdi-account', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 1 },
      { text: 'Conversions', icon: 'mdi-home', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 2 },
      { text: 'Daily report', icon: 'mdi-airplane', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 3 },
      { text: 'Some things', icon: 'mdi-cellphone', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 4 },
      { text: 'Everythings', icon: 'mdi-headphones', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ', number: 5 },
    ],
    model: 0,

  }),
}
</script>
