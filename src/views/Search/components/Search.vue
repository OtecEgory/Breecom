<template>
    <div>
        <transition name="slide-fade">
            <div class="search-layout" v-if="showSearchLayout">
                <header-bree/>
                <div class="container">
                    <div class="searsh-wrap">
                        <div class="search-content">
                            <div class="search-group-text">
                                <p class="text-search">Search on Bree</p>
                                <p class="text-typing">Start typing</p>
                            </div>
                            <div class="close-search-layout" @click="removeSearchLayout()">
                                <img src="../../../assets/icons/IconsSearch/icon-close.svg">
                            </div>
                        </div>
                        <div class="search-product">
                            <input type="text" class="search" v-model="searchValue">
                            <div class="loop">
                                <img class="ico-search" src="../../../assets/icons/IconsSearch/icon-search.svg">
                            </div>
                        </div>
                        <p class="available-goods">Footwear<span>({{lengthItemProduct}})</span></p>
                        <div class="card-product">
                            <div class="item-card"
                                v-for="itemData in searchFilterProduct"
                                :key="itemData.id"
                                @click="$router.push(`/product/${itemData.id}`)"
                                >
                                <img :src="require('../../../assets/CardImages/Nike-color-card.png')">
                                <p class="brand">{{itemData.brand.name}}</p>
                                <p class="about-model">{{itemData.brand.info}}</p>
                                <p class="price">{{itemData.price}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import {сards} from '../../../api/service'
import HeaderBree from '../../../components/HeaderBree.vue'

export default {
    components: { 
        HeaderBree,
    },
    data: function() {
        return{
            dataInfo: null,
            searchValue: '',
        }
    },
    computed:{
        showSearchLayout(){
            return this.$store.state.isVisibleSearch
        },
        searchFilterProduct(){
            return this.dataInfo.filter(item => item.name ? item.name.toLowerCase().includes(this.searchValue.toLowerCase()) : false)
        },
        lengthItemProduct(){
            return this.searchFilterProduct.length
        }
    },
    methods:{
        removeSearchLayout(){
            this.$store.state.isVisibleSearch = false
            document.querySelector('body').style.overflow = 'auto'
        },
    },
    mounted(){
        сards().then(response => (this.dataInfo = response.data))
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
        overflow: auto

    .slide-fade-enter-active
        transition: all .9s ease

    .slide-fade-leave-active
        transition: all .9s cubic-bezier(1.0, 0.5, 0.8, 1.0)

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
        margin-bottom: 20px
        &:nth-of-type(4n+4)
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