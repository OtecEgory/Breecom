<template>
    <section>
        <div class="container">
            <div class="wrapper-card-product">
                <div class="box-img">
                    <div class="parent-item">
                        <img
                            class="parent-img"
                            :src="defaultImg"
                        >
                    </div>
                </div>
                <product-map 
                    :dataParent="chieldImg"
                    :clickHandler="getParentImg"
                    >
                </product-map>
            </div>
        </div>
    </section>
</template>

<script>
import ProductMap from './ProductMap.vue'

export default {
    components: {
        ProductMap,
    },
    data: function () {
        return {
            show: true,
            showRc: '',
            defaultImg: require('../assets/img.png'),
            parentImg: [
                {
                    id: '1',
                    img: require('../assets/img.png')
                },
                {
                    id: '2',
                    img: require('../assets/img-2.png')
                }
            ],
            chieldImg: [
                {
                    id: '1',
                    img: require('../assets/ico/preview-nike-color.svg'),
                    parentId: '1'
                },
                {
                    id: '2',
                    img: require('../assets/ico/preview-nike-filter.svg'),
                    parentId: '2'
                }
            ],
        }
    },
    computed:{
        getisActive(){
            return this.$store.state.isActive
        }
    },
    methods:{
        getParentImg(parentId){
            this.defaultImg = this.parentImg.find(el => el.id === parentId).img
        }
    }
}
</script>

<style lang="sass">

    div.container
        max-width: 1180px
        margin: 0 auto

    div.box-img
        margin: 0px 93px 7px 80px

    div.wrapper-card-product
        display: flex
        justify-items: center
        align-items: flex-end
        padding-top: 58px

    div.parent-img img
        transform: 0.5s

</style>