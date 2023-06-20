<template>
  <HeroBanner></HeroBanner>
  <FeatureSection></FeatureSection>
  <AboutView></AboutView>
</template>

<script>
import HeroBanner from "../components/HeroBanner.vue"
import FeatureSection from "../components/FeatureSection.vue"
import AboutView from "./AboutView.vue"
export default {
  name: 'HomeView',

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
  components: {
    HeroBanner,
    FeatureSection,
    AboutView
  }
}
</script>
