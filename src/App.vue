<template>
  <div id="app">
    <router-view /> 
    <header-bree/>
    <search/>
    <home/>
    <sidebar-layout/>
  </div>
</template>

<script>
import Home from '@/views/Home'
import Search from '@/views/Search'
import HeaderBree from './components/HeaderBree.vue'
import SidebarLayout from './components/SidebarLayout.vue'

export default {
    components: {
      HeaderBree,
      Search,
      Home,
      SidebarLayout,
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