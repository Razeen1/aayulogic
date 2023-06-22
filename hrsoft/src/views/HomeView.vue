<template>
  <NavBar></NavBar>
  <HeroBanner></HeroBanner>
  <FeatureSection></FeatureSection>
  <WhySection></WhySection>
  <ReviewSection></ReviewSection>
  <AppSection></AppSection>
  <FooterSection></FooterSection>
</template>

<script>
import HeroBanner from "../components/HeroBanner.vue"
import FeatureSection from "../components/FeatureSection.vue"
import NavBar from '@/components/NavBar.vue';
import WhySection from "@/components/WhySection.vue"
import ReviewSection from "@/components/ReviewSection.vue"
import AppSection from "@/components/AppSection.vue"
import FooterSection from "@/components/FooterSection.vue"

export default {
  name: 'HomeView',

  data: () => ({

  }),
  components: {
    HeroBanner,
    FeatureSection,
    FooterSection,
    WhySection,
    ReviewSection,
    AppSection,
    NavBar
  }
}
</script>
