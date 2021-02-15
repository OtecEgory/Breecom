<template>
    <div class="info-card-product">
        <div class="like" @click="likeShow= !likeShow" v-show="likeRemove">
            <i class="material-icons like_icon" v-if="!likeShow">favorite_border</i>
            <i class="material-icons active_like" v-else>favorite</i>
        </div>
        <h2 class="name-brand">Nike</h2>
        <h1 class="name-model">AIR MAX TAVAS SD</h1>
        <p class="price-model">$ 160.00</p>
        <p class="available-color">COLORS - <span>Black/Pink Pow/Tour Yellow/White</span></p>
            <div class="thumb-card">
                <img 
                    class="chield-img"
                    v-for="item in dataParent" 
                    :key="item.id"
                    :src="item.img"
                    @click="clickHandler(item.id)"
                >
            </div>
        <p class="text-size">Size chart</p>
        <div class="wrapper-select-add">
            <custom-select/>
            <add-cart-btn/>
        </div>
    </div>
</template>

<script>
import AddCartBtn from '../../../components/AddCartBtn.vue'
import CustomSelect from '../../../components/CustomSelect.vue'


export default {
    components: { 
        AddCartBtn,
        CustomSelect
    },
    data: function() {
        return{
            switchStateSideBar: false,
            likeShow: false,
            likeRemove: true,
        }
    },
    props: {
        dataParent: Array,
        clickHandler: Function,
    },
    mounted(){
        let like = this.$route.params.productid
        if (like){
            this.likeRemove = false
        }
    }
}
</script>

<style lang="sass">

    div.like
        display: flex
        justify-content: center
        align-items: center
        border: 1px solid #E4E4E4
        width: 50px
        height: 50px
        transition: 0.2s
        cursor: pointer
        &:hover
            border-color: #333333
        img
            color: #000000

    div.info-card-product
        h2.name-brand
            font-family: 'DIN Next LT Pro'
            font-size: 25px
            font-weight: 500
            font-style: normal
            color: #333333
            margin: 43px 0px 16px 0px
            padding: 0px

        h1.name-model
            font-family: 'DIN Next LT Pro'
            font-size: 35px
            font-weight: 500
            font-style: normal
            color: #333333
            margin: 0px
            padding: 0px

        p.price-model
            font-family: 'DIN Next LT Pro'
            font-size: 15xp
            font-weight: 500
            font-style: normal
            color: #666666
            margin: 13px 0px 24px 0px
            padding: 0px

        p.available-color
            font-family: 'DIN Next LT Pro'
            font-size: 15xp
            font-weight: 500
            font-style: normal
            color: #666666
            margin-bottom: 15px
            padding: 0px
            span
                color: #0089cf
                
        div.thumb-card
            display: flex
            justify-content: flex-start
            img
                border: 1px solid #E4E4E4
                margin-right: 10px
                transition: 0.2s
                cursor: pointer
                &:hover
                    border-color: #333333

        p.text-size
            font-family: 'Roboto'
            font-size: 15px
            font-style: normal
            font-weight: normal
            color: #666666
            margin: 20px 0px 15px 0px
            padding: 0px

        div.wrapper-select-add
            display: flex

</style>