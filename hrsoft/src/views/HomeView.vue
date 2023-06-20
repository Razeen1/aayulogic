<template>
  <HeroBanner></HeroBanner>
  <FeatureSection></FeatureSection>
  <WhySection></WhySection>
  <ReviewSection></ReviewSection>

  <AppSection></AppSection>
</template>

<script>
import HeroBanner from "../components/HeroBanner.vue"
import FeatureSection from "../components/FeatureSection.vue"

import WhySection from "@/components/WhySection.vue"
import ReviewSection from "@/components/ReviewSection.vue"
import AppSection from "@/components/AppSection.vue"

export default {
  name: 'HomeView',

  data: () => ({

  }),
  components: {
    HeroBanner,
    FeatureSection,

    WhySection,
    ReviewSection,
    AppSection
  }
}
</script>
