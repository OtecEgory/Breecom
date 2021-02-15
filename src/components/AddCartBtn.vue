<template>
    <div class="add-product-cart">
        <button @click="addProductQuantity(1)" class="add-cart">ADD TO CART</button>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            show: false
        }
    },
    methods :{
        addProductQuantity(addQuantity){
            this.$store.state.quantity += addQuantity
        },
    }
}
</script>

<style lang="sass">

    button.add-cart
        font-family: 'DIN Next LT Pro'
        font-size: 14px
        font-weight: 500
        font-style: normal
        color: #FFFFFF
        width: 125px
        height: 50px
        background-color: #333333
        border: 1px solid #000000
        cursor: pointer
        outline: none
        transition: 0.5s ease-in-out
        &:active  
            transition: 0.1s ease-in-out
            color: #333333
            background-color: #FFFFFF
            border: 1px solid #000000
            -webkit-transform: scale(0.9)
            -ms-transform: scale(0.8)
            transform: scale(0.8)
            


</style>