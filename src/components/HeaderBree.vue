<template>
    <header>
        <div class="headroom-wrapper">
            <div class="nav-item-left">
                <img src="../../src/ico/logo-header.svg">
                <ul class="list-left">
                    <li>
                        <a href="#">Footwear</a>
                    </li>
                    <li>
                        <a href="#">Clothing</a>
                    </li>
                    <li>
                        <a href="#">Accessories</a>
                    </li>
                    <li>
                        <a href="#">Brands</a>
                    </li>
                    <li>
                        <a href="#">Clearance</a>
                    </li>
                </ul>
            </div>
            <div class="nav-item-right">
                <ul class="list-right">
                    <li @click="showSearchLayout(true)">
                        <img class="ico" src="../../src/ico/loop.svg">
                        <a href="#">
                            Search
                        </a>
                    </li>
                    <li @click="showBar(true)">
                        <img class="ico" src="../../src/ico/basket.svg" >
                        <a href="#">
                            Cart
                        </a>
                        <span class="counter">
                            ({{counter}})
                        </span>
                    </li>
                    <li>
                        <img class="ico" src="../../src/ico/sign-in.svg">
                        <a href="#">
                            Sing in
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    computed:{
        counter(){
            return this.$store.state.counter
        },
        isShow(){
            return this.$store.state.isShow
        }
    },
    methods:{
        showBar(val){
            this.$store.state.isActive = val
            document.querySelector('body').style.overflow = 'hidden'
        },
        showSearchLayout(arg){
            this.$store.state.isShow = arg
            document.querySelector('body').style.overflow = 'hidden'
        }
    },
}
</script>

<style lang="sass">

    li
        list-style: none

    a
        text-decoration: none

    ul
        margin: 0px
        padding: 0px

    header
        padding: 20px
        max-width: 1300px
        margin: auto

    div.headroom-wrapper
        display: flex
        justify-content: space-between
        align-items: center

    div.nav-item-left
        display: flex
        cursor: pointer

    ul.list-left
        display: flex
        align-items: center
        margin: 0px
        padding: 0px

        li
            font-family: 'DIN Next LT Pro'
            font-weight: bold
            font-style: normal
            margin-left: 40px

            a
                color: #333333
                transition: 0.1s
                padding-bottom: 35px
                &:hover
                    border-bottom: 4px solid #0089cf
                    color: #0089cf

    ul.list-right
        display: flex
        li
            font-family: 'DIN Next LT Pro'
            font-weight: bold
            font-style: normal
            margin-left: 40px
            &:hover
                filter: invert(29%) sepia(81%) saturate(1618%) hue-rotate(176deg) brightness(98%) contrast(70%)
            
            span
                color:#0089cf
                margin-left: 5px
                &:hover
                    color: #0089cf
            a
                color: #333333
                transition: 0.1s
                padding-bottom: 35px
                &:hover
                    color: #0089cf
                

            img.ico
                display: inline-block
                margin-right: 10px
                vertical-align: middle
                transition: 0.2s
                cursor: pointer
                &:hover
                    filter: invert(29%) sepia(81%) saturate(1618%) hue-rotate(176deg) brightness(98%) contrast(70%)

</style>