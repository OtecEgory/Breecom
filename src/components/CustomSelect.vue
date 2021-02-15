<template>
    <div class="v-select">
        <div 
            class="result-size"
            v-on:click="showListSize = !showListSize"
        >
        {{defaultLableSize}}
            <img class="select-arrow" src="../assets/icons/IconsHeder/arrow.svg">
        </div>
        <transition name="fade">
            <div class="list-size" v-if="showListSize">
                <p 
                    class="v-option"
                    v-for=" size in sizes" 
                    :key="size.name"
                    @click="insertSizeHeadSelect(size.name)"
                >
                {{size.name}}
                </p>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data: function() {
        return  { 
            showListSize: false,
            defaultLableSize:'Size',
            sizes:[
                {
                    name: 'EU 40.5'
                },
                {
                    name: 'EU 41'
                },
                {
                    name: 'EU 42.5'
                },
                {
                    name: 'EU 43.5'
                },
                {
                    name: 'EU 45'
                }
            ]
        }
    },
    methods: {
        insertSizeHeadSelect(nameSize){
            this.$root.$data.sizes
            this.defaultLableSize = nameSize
            this.showListSize = false
        },
    },
}
</script>

<style lang="sass">

    div.v-select
        margin-right: 20px

    div.result-size
        display: flex
        justify-content: space-between
        align-items: center
        width: 125px
        height: 50px
        padding: 0px 20px
        border: solid 1px #e4e4e4
        font-family: 'DIN Next LT Pro'
        font-size: 14px
        font-weight: 500
        font-style: normal
        background-color: #FFFFFF
        color: #666666
        cursor: pointer
        position: relative

    div.list-size
        font-family: 'DIN Next LT Pro'
        font-size: 14px
        font-weight: 500
        font-style: normal
        border: solid 1px #e4e4e4
        position: absolute
        z-index: 20
        background-color: #FFFFFF

    .fade-enter-active, .fade-leave-active
        transition: opacity 0.3s

    .fade-enter, .fade-leave-to
        opacity: 0

    p.v-option
        display: flex
        justify-content: flex-start
        align-items: center
        margin: 0
        font-family: 'DIN Next LT Pro'
        cursor: pointer
        width: 123px
        height: 50px
        padding: 0px 20px
        text-align: left
        &:hover
            background-color: #E4E4E4

</style>