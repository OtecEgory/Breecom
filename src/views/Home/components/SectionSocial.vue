<template>
    <div>
        <div class="block-social-air">
            <div class="container">
                    <p class="social-text">social</p>
                    <p class="hashtag-text"><a href="#">#</a>nikeairmax</p>
                <div class="block-items-social">
                    <img
                        v-for="item in itemImgSocial"
                        :key="item.id"
                        :src="item.imgSocial"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            itemImgSocial:[
                {
                    id: '1',
                    imgSocial: require('../../../assets/SocialImages/item-1.png'),
                },
                {
                    id: '2',
                    imgSocial: require('../../../assets/SocialImages/item-2.png'),
                },
                {
                    id: '3',
                    imgSocial: require('../../../assets/SocialImages/item-3.png'),
                },
                {
                    id: '4',
                    imgSocial: require('../../../assets/SocialImages/item-4.png'),
                },
            ]
        }
    }
}
</script>

<style lang="sass" scoped>

    div.block-social-air
        padding: 110px 0px 190px 0px

    div.block-items-social
        display: flex
        justify-content: space-between
        align-items: center
        img
            opacity: 0.15
            transition: 0.3s
            &:hover
                opacity: 1

    p
        text-transform: uppercase
    
    p.hashtag-text
        font-family: 'DIN Next LT Pro'
        font-size: 25px
        font-weight: 400
        font-style: normal
        color: #333333
        cursor: pointer
        a
            color: #333333
            transition: 0.3s
            &:hover
                color: #eb8e7d

    p.social-text
        margin: 0
        font-family: 'DIN Next LT Pro'
        font-size: 14px
        font-weight: 500
        font-style: normal
</style>