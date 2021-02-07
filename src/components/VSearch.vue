<template>
    <div>
        <transition name="slide-fade">
            <div class="search-layout"  v-if="isActiveSearchLayout">
                <header-bree></header-bree>
                <div class="wrap-galery-card">
                    <v-gallery-aside v-if="isVisible"></v-gallery-aside>
                        <transition name="slide-fade">
                        <one-section v-if="isVisible"></one-section>
                    </transition>
                </div>
                <div class="container">
                    <div class="searsh-wrap" v-if="remove">
                        <div class="search-content">
                            <div class="search-group-text">
                                <p class="text-search">Search on Bree</p>
                                <p class="text-typing">Start typing</p>
                            </div>
                            <div class="close-search-layout" v-on:click="removeSearchLayout(false)">
                                <img src="../assets/ico/icon-close.svg">
                            </div>
                        </div>
                        <div class="search-product">
                            <input type="text" class="search" v-model="searchValue">
                            <div class="loop">
                                <img class="ico-search" src="../assets/ico/icon-search.svg">
                            </div>
                        </div>
                        <p class="available-goods">Footwear <span>({{lengthItems}})</span></p>
                        <div class="card-product">
                            <div class="item-card"
                                @click="removeSearch(false), openCardProduct(true)"
                                v-for="model in searchFilter"
                                :key="model.id"
                                >
                                <img :src="model.img">
                                <p class="brand">{{model.brand}}</p>
                                <p class="about-model">{{model.aboutModel}}</p>
                                <p class="price">{{model.price}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import HeaderBree from './HeaderBree.vue'
import OneSection from './OneSection.vue'
import VGalleryAside from './VGalleryAside.vue'


export default {
  components: { HeaderBree ,OneSection, VGalleryAside },
    data: function() {
        return{
            searchValue: '',
            isVisible: false,
            remove: true,
            models:[
                {   
                    id: '1',
                    img: require('../assets/Raf-simons-x-adidas.png'),
                    brand: 'Raf Simons x adidas',
                    aboutModel:'Mid - Platform Light-Up',
                    price:'$760.00'

                },
                {   
                    id: '2',
                    img: require('../assets/Raf-simons-white.png'),
                    brand: 'Raf Simons x adidas',
                    aboutModel:'Stan smith classic',
                    price:'$300.00'

                },
                {   
                    id: '3',
                    img: require('../assets/Nike-color-card.png'),
                    brand: 'Raf Simons',
                    aboutModel:'Hi top velcro straps',
                    price:'$788.00'

                },
                {   
                    id: '4',
                    img: require('../assets/Raf-simons-green.png'),
                    brand: 'Raf Simons',
                    aboutModel:'Hi top velcro straps',
                    price:'$788.00'

                },
            ]
        }
    },
    computed:{
        isActiveSearchLayout(){
            return this.$store.state.isShow
        },
        searchFilter(){
            return this.models.filter(item => item.brand ? item.brand.toLowerCase().includes(this.searchValue.toLowerCase()) : false)
            
        },
        lengthItems(){
            return this.searchFilter.length
        }
    },
    methods:{
        removeSearchLayout(disactive){
            this.$store.state.isShow = disactive
            document.querySelector('body').style.overflow = 'auto'
        },
        removeSearch(remove){
            this.remove = remove
        },
        openCardProduct(open){
            this.isVisible = open
        }
    }
}
</script>

<style lang="sass">
    div.search-layout
        height: 100%
        width: 100%
        position: fixed
        z-index: 21
        overflow: hidden
        top: 0
        background-color: #e6edf1
        right: 0
        box-shadow: 0 0 10px rgba(0,0,0,0.5)

    .slide-fade-enter-active
        transition: all .6s ease

    .slide-fade-leave-active
        transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0)

    .slide-fade-enter, .slide-fade-leave-to
        transform: translateX(30px)
        opacity: 0

    div.wrap-galery-card
        display: flex
        align-items: flex-end
        justify-content: center


    div.card-product
        display: flex
        align-self: flex-end
        flex-wrap: wrap

    div.item-card
        display: flex
        align-items: center
        justify-content: center
        margin-right: 20px
        flex-direction: column
        background-color: #ffffff
        height: 430px
        width: 280px
        cursor: pointer
        &:nth-child(4)
            margin-right: 0
        img
            display: flex
            align-items: center

    div.search-content
        display: flex
        justify-content: space-between
        align-items: center
        padding-top: 65px
        padding-bottom: 45px

        p.text-search
            font-family: 'DIN Next LT Pro'
            font-size: 18px
            font-weight: 500
            font-style: normal

        p.text-typing
            font-family: 'Roboto'
            font-size: 14px
            font-weight: light
            font-style: normal
            color: #666666

    div.close-search-layout
        cursor: pointer
    
    div.search-product
        position: relative

    input.search
        position: relative
        font-size: 16px
        margin-bottom: 30px
        width: 100%
        height: 70px
        border: none
        border-bottom: 1px solid #ccc
        font-family: 'DIN Next LT Pro'
        font-size: 60px
        background-color: #e6edf1
        font-style: normal
        font-weight: 450
        color: #0089cf
        text-transform: uppercase
        padding: 0 50px 10px 0
        &:focus
            outline: none

    img.ico-search
        position: absolute
        top: 10%
        right: 0%

    p.available-goods
        font-family: 'DIN Next LT Pro'
        font-size: 18px
        color: #666666
        font-style: normal
        font-weight: 450
        text-transform: uppercase
        span
            color: #0089cf

    p.brand
        font-family: 'DIN Next LT Pro'
        font-size: 18px
        color: #333333
        font-style: normal
        font-weight: 450
        text-transform: uppercase

    p.about-model
        font-family: 'Roboto'
        font-size: 14px
        font-weight: light
        font-style: normal
        color: #666666

    p.price
        font-family: 'DIN Next LT Pro'
        font-size: 18px
        color: #333333
        font-style: normal
        font-weight: 450
        text-transform: uppercase
        

</style>