<template>
    <div>
        <div class="custom-select">
            <div 
                class="result-contry"
                v-on:click="showContry = !showContry"
            >
            {{defaultContry}}
            <img 
                class="arrow-select" 
                src="../assets/icons/IconsHeder/arrow.svg"
            >
            </div>
            <transition name="fade">
                <div class="list-contry" v-if="showContry">
                    <p 
                        class="option-contry"
                        v-for="item in contry"
                        :key="item.id"
                        @click="showListContry(item.name)"
                    >
                    {{item.name}}
                    </p>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import {contry} from '../api/service'
 
export default {
    data: function(){
        return{
            contry: null,
            showContry: false,
            defaultContry: 'Contry',
        }
    },
    methods:{
        showListContry(itemContry){
            this.defaultContry = itemContry
            this.showContry = false
        }
    },
    mounted(){
        contry().then(response => (this.contry = response.data))
    },
}
</script>

<style lang="sass" scoped>

    div.custom-select
        position: relative

    div.result-contry
        display: flex
        justify-content: space-between
        align-items: center
        width: 230px
        height: 38px
        border: none
        color: #333
        position: relative
        font-family: 'Roboto'
        font-size: 14px
        font-style: normal
        font-weight: 300
        transition: 0.3s

    div.list-contry
        background-color: #fff
        width: 230px
        top: 100%
        overflow-x: hidden
        overflow-y: scroll
        max-height: 245px
        position: absolute
        z-index: 20
        border: 1px solid #ccc

    .fade-enter-active, .fade-leave-active
        transition: opacity 0.3s

    .fade-enter, .fade-leave-to
        opacity: 0

    p.option-contry
        display: flex
        justify-content: flex-start
        align-items: center
        margin: 0
        font-family: 'Roboto'
        font-size: 14px
        font-style: normal
        font-weight: 300
        color: #333333
        cursor: pointer
        width: 123px
        height: 40px
        padding: 0px 20px
        text-align: left
        width: 230px
        transition: 0.3s
        &:hover
            border-bottom: 1px solid #ccc
            padding-left: 25px
</style>