<template>
    <div>
        <transition name="slide-fade">
            <div class="shadow" 
            v-if="showSidebarLayout"
            @click.self="removeSideBarLayout()"
            >
                <div class="sidebar">
                    <div class="form-info">
                        <div class="content-info">
                            <h1 class="text-info">Informations</h1>
                            <p class="text-person">Personnal informations</p>
                        </div>
                        <div class="info">
                            <div class="group">
                                <input type="text" placeholder="First name">
                                <input type="text" placeholder="Second Name">
                            </div>
                        <contry-select/>
                        </div>
                        <textarea placeholder="Adress"></textarea>
                        <div class="user-info">
                            <div class="group">
                                <input type="text" placeholder="Postal code">
                                <input type="text" placeholder="City">
                            </div>
                            <div class="group">
                                <input type="text" placeholder="Email">
                                <input type="text" placeholder="Phone">
                            </div>
                        </div>
                            <p class="text-notes">Notes</p>
                            <textarea placeholder="Note"></textarea>
                            <p class="text-delivery">Delivery mode</p>
                        <div class="custom-select">
                            <p class="price-delivery">Collisimo france, <span>$20.00</span></p>
                            <img src="../assets/icons/IconsHeder/arrow.svg">
                        </div>
                    </div>
                    <div class="sidebar-footer-product">
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import ContrySelect from './ContrySelect.vue'

export default {
    components: { 
        ContrySelect 
    },
    computed:{
        showSidebarLayout(){
            return this.$store.state.showSidebar
        }
    },
    methods:{
        removeSideBarLayout(){
            this.$store.state.showSidebar = false
            document.querySelector('body').style.overflow = 'auto'
        }
    },
}
</script>

<style lang="sass">

    div.shadow
        background-color: rgba(0,0,0,.6)
        height: 100%
        position: fixed
        z-index: 45
        width: 100%
        top: 0
        left: 0      

    div.sidebar
        height: 100%
        width: 560px
        position: fixed
        top: 0
        background-color: #FFFFFF
        right: 0
        box-shadow: 0 0 10px rgba(0,0,0,0.5)

    .slide-fade-enter-active
        transition: all .3s ease

    .slide-fade-leave-active
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)

    .slide-fade-enter, .slide-fade-leave-to
        transform: translateX(10px)
        opacity: 0

    div.sidebar-footer-product
        background-color: #f2f9fd
        width: 100%
        height: 100%

    div.form-info
        padding: 40px 36px

    h1.text-info
        font-family: 'DIN Next LT Pro'
        font-size: 35px
        font-weight: 500
        font-style: normal
        color: #333333
        margin: 0
        padding: 0 0 32px
        text-transform: uppercase

    p.text-person
        font-family: 'DIN Next LT Pro'
        font-size: 14px
        font-weight: 500
        font-style: normal
        color: #333333
        margin: 0
        padding: 0 0 20px
        text-transform: uppercase

    p.text-delivery
        font-family: 'DIN Next LT Pro'
        font-size: 14px
        font-weight: 500
        font-style: normal
        color: #333333
        margin: 0
        padding: 20px 0 20px
        text-transform: uppercase


    div.contry-information
        display: flex
        justify-content: space-between

    div.user-info
        display: flex
        justify-content: space-between

    div.info
        display: flex
        justify-content: space-between
    
    div.group   
        input
            font-size: 16px
            padding: 10px 10px 10px 0
            display: block
            width: 230px
            border: none
            border-bottom: 1px solid #ccc
            font-family: 'Roboto'
            font-size: 14px
            font-style: normal
            font-weight: 300
            color: #333333
            &:focus
                outline: none

    p.text-notes
        font-family: 'DIN Next LT Pro'
        font-size: 14px
        font-weight: 500
        font-style: normal
        color: #333333
        text-transform: uppercase
        margin: 0
        padding: 40px 0 0

    textarea
        width: 100%
        height: 39px
        font-size: 16px
        margin: 10px 10px 10px 0
        display: block
        border: none
        border-bottom: 1px solid #ccc
        outline: none
        resize: none
        overflow: hidden
        font-family: 'Roboto'
        font-size: 14px
        font-style: normal
        font-weight: 300
        color: #333333
        line-height: 25px
        
    div.custom-select
        display: flex
        justify-content: space-between
        align-items: center
        width: 230px
        height: 38px
        border: none
        border-bottom: 1px solid #ccc
        color: #333333

        p.text-contry
            margin: 0px
            padding: 10px 0px
            font-family: 'Roboto'
            font-size: 14px
            font-style: normal
            font-weight: 300
            color: #333333


        p.price-delivery
            margin: 0
            padding: 17px 0
            font-family: 'Roboto'
            font-size: 15px
            font-style: normal
            font-weight: normal
            color: #333333
        span
            font-family: 'Roboto'
            font-size: 15px
            font-style: normal
            font-weight: bold
            color: #0089cf
        
</style>