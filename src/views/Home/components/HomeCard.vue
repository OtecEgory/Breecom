<template>
    <section>
        <div class="container">
            <div class="wrapper-card-product">
                <div class="show-none">
                    <gallery-aside
                        v-show="isShowLeftGallery"
                        :dataLeftImg="leftChieldImg"
                        :clickGalleryImg="getGalleryImg"
                    />
                </div>
                <div class="box-img">
                    <div class="parent-item">
                        <img
                            class="parent-img"
                            :src="defaultParentImg"
                        >
                    </div>
                </div>
                <product-map 
                    :dataParent="rightChieldImg"
                    :clickHandler="getParentImg"
                />            
            </div>
        </div>
    </section>
</template>

<script>
import GalleryAside from '../../../components/GalleryAside.vue'
import ProductMap from '../components/ProductMap.vue'

export default {
    components: {
        ProductMap,
        GalleryAside,
    },
    data: function () {
        return {
            isShowLeftGallery: false,
            defaultParentImg: require('../../../assets/HomeCardImages/img.png'),
            rightChieldImg: [
                {
                    id: '1',
                    img: require('../../../assets/icons/IconsHomeCard/preview-nike-color.svg'),
                    parentImg: require('../../../assets/HomeCardImages/img.png'),
                    parentId: '1'
                },
                {
                    id: '2',
                    img: require('../../../assets/icons/IconsHomeCard/preview-nike-filter.svg'),
                    parentImg: require('../../../assets/HomeCardImages/img-2.png'),
                    parentId: '2'
                },
            ],
            leftChieldImg: [
                {
                    id: '1',
                    img: require('../../../assets/HomeCardImages/collection-img-1.png'),
                    parentImg: require('../../../assets/HomeCardImages/img.png'),
                    parentId: '1'
                },
                {
                    id: '2',
                    img: require('../../../assets/HomeCardImages/collection-img-2.png'),
                    parentImg: require('../../../assets/HomeCardImages/img-2.2.png'),
                    parentId: '2'
                },
                {
                    id: '3',
                    img: require('../../../assets/HomeCardImages/collection-img-3.png'),
                    parentImg: require('../../../assets/HomeCardImages/img-3.png'),
                    parentId: '3'
                },
                                {
                    id: '4',
                    img: require('../../../assets/HomeCardImages/collection-img-4.png'),
                    parentImg: require('../../../assets/HomeCardImages/img-4.png'),
                    parentId: '4'
                },
            ],
        }
    },
    methods:{
        getParentImg(id){
            this.defaultParentImg = this.rightChieldImg.find(el => el.id === id).parentImg
        },
        getGalleryImg(id){
            this.defaultParentImg = this.leftChieldImg.find(el => el.id === id).parentImg
        },
    },
    mounted(){
        let productid = this.$route.params.productid
        if (productid){
            this.isShowLeftGallery = true
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