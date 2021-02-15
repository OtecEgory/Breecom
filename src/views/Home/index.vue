<template>
    <div>
        <section-one/>
        <section-about/>
        <section-story/>
        <section-social/>
    </div>
</template>

<script>
import SectionAbout from './components/SectionAbout.vue'
import SectionOne from './components/SectionOne.vue'
import SectionSocial from './components/SectionSocial.vue'
import SectionStory from './components/SectionStory.vue'

export default {
    components: { 
        SectionOne,
        SectionStory, 
        SectionAbout, 
        SectionSocial, 
    },  
}
</script>