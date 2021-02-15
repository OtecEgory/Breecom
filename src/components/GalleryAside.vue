<template>
    <div class="gallery-aside-wrapp">
        <ul class="list-item-img">
            <li>
                <img
                    v-for="item in dataLeftImg"
                    :key="item.id"
                    :src="item.img"
                    @click="clickGalleryImg(item.id)"
                >
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        dataLeftImg: Array,
        clickGalleryImg: Function,
    },
}
</script>

<style lang="sass" scoped>

    div.gallery-aside-wrapp
        display: block
        li  
            display: block
            img
                display: block
                border: 1px solid #E4E4E4
                transition: 0.2s
                cursor: pointer
                margin-bottom: 10px
                &:hover
                    border-color: #333333

</style>