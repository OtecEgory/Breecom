<template>
    <div class="product-card">
            <header-bree/>
        <div class="wrap-galery-card">
                <gallery-aside/>
                <section-one/>
            <div class="like" @click="isShowLikeCards = !isShowLikeCards">
                <i class="material-icons like_icon" v-if="!isShowLikeCards">favorite_border</i>
                <i class="material-icons active_like" v-else>favorite</i>
            </div>
        </div>
    </div>
</template>

<script>
import GalleryAside from '../../../components/GalleryAside.vue'
import HeaderBree from '../../../components/HeaderBree.vue'
import SectionOne from '../../../views/Home/components/SectionOne.vue'

export default {
    components: { 
        HeaderBree,
        SectionOne, 
        GalleryAside 
    },
    data: function(){
        return{
            isShowLikeCards: false,
        }
    }
}
</script>

<style lang="sass" scoped>

    div.product-card
        height: 100%
        width: 100%
        overflow: hidden
        position: fixed
        top: 0
        z-index: 30
        background-color: #FFFFFF
        right: 0

    div.wrap-galery-card
        display: flex
        align-items: flex-end
        justify-content: center

    div.like
        margin-left: 10px


</style>