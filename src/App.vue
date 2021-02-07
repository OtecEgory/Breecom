<template>
  <div id="app">
    <header-bree></header-bree>
    <one-section></one-section>
    <about-model></about-model>
    <section-story></section-story>
    <v-sidebar></v-sidebar>
    <v-search-section>
      <one-section>
        <v-gallery-aside></v-gallery-aside>
      </one-section>
    </v-search-section>
  </div>
</template>

<script>
import HeaderBree from './components/HeaderBree.vue'
import OneSection from './components/OneSection.vue'
import AboutModel from './components/AboutModel.vue'
import SectionStory from './components/SectionStory.vue'
import VSidebar from './components/VSidebar.vue'
import VSearchSection from './components/VSearchSection.vue'
import VGalleryAside from './components/VGalleryAside.vue'

export default {
  components: {
    HeaderBree,
    OneSection,
    AboutModel,
    SectionStory,
    VSidebar,
    VSearchSection,
    VGalleryAside,
  },
  computed:{
      disactiveCard(){
          return this.$store.state.isVisible
      }
  },
  methods:{
      cardProductVisible(active){
          return this.$store.state.isVisible = active
      }
  },
}
</script>


<style lang="sass">

@import './fonts/fonts.sass'

body
  margin: 0
  padding: 0
  *
    box-sizing: border-box
      

</style>