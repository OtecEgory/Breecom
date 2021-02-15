<template>
    <div>
        <div class="bkg-story-model">
            <div class="container">
                <div class="components-wrap">
                    <div class="content-model">
                        <p class="story">
                            Story
                        </p>
                        <h2 class="name-model">
                            NIKE AIR MAX ORIGINS
                        </h2>
                        <p class="history-model">Nike's revolutionary Air-Sole unit made its way into Nike<br>
                            footwear in the late '70s. In 1987, the Nike Air Max 1<br>
                            debuted with visible air in its heel, allowing fans more than<br>
                            just the feel of Air-Sole comfort<br>
                        </p>
                        <p class="profit-model">
                            BENEFITS
                        </p>
                        <h3 class="consist-model">
                            Layered textile/synthetic upper
                        </h3>
                        <p class="conten-consist">
                            for lightweight durability and comfort 
                        </p>
                        <h3 class="consist-model">
                            Injected Phylon midsole doubles
                        </h3>
                        <p class="conten-consist">
                            Outsole to reduce the overall weight of the shoe 
                        </p>
                        <h3 class="consist-model">Max Air heel unit 

                        </h3>
                        <p class="conten-consist">
                            delivers maximum lightweight cushioning
                        </p>
                        <h3 class="consist-model">
                            Rubber Waffle outsole
                        </h3>
                        <p class="conten-consist">
                            Durable, multi-surface traction
                        </p>
                    </div>
                    <div class="card">
                        <h2 class="brand">Nike</h2>
                        <p class="model">
                            Air max Tavas SD
                        </p>
                        <span class="available-color">
                            Black/Pink Pow/Tour Yellow/White
                        </span>
                        <img src="../../../assets/CardImages/Nike-color-card.png" alt="">
                        <div class="wrap-components">
                            <div class="select-sizes">
                                <p class="text-stock">
                                    En stock
                                </p>
                                <custom-select/>
                            </div>
                            <div class="add-btn">
                                <p class="price">
                                    $160.00
                                </p>
                                <add-cart-btn/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
}
</script>

<style lang="sass">

    div.bkg-story-model
        position: relative
        background-image: url('../../../assets/BckgImages/Viewfromabove.png')
        background-repeat: no-repeat
        background-size: cover

    img.item-bkg
        min-width: 100%

    div.components-wrap
        display: flex
        justify-content: space-between
        align-items: center
        padding: 115px 0px
    
    p.profit-model
        font-family: 'DIN Next LT Pro'
        font-size: 14px
        font-weight: 500
        font-style: normal
        color: #333333
        margin: 43px 0px 16px 0px
        padding: 0px


    p.story
        font-family: 'DIN Next LT Pro'
        font-size: 14px
        font-weight: 400
        font-style: normal
        color: #333333
        margin: 0px
        padding: 0px

    h2.name-model
        font-family: 'DIN Next LT Pro'
        font-size: 25px
        font-weight: 500
        font-style: normal
        color: #333333
        margin: 43px 0px 16px 0px
        padding: 0px

    p.history-model
        font-family: 'Roboto'
        font-size: 14px
        font-style: normal
        font-weight: 300
        color: #333333
        line-height: 25px

    h3.consist-model
        font-family: 'DIN Next LT Pro'
        font-size: 18px
        font-weight: 500
        font-style: normal
        color: #333333
        margin: 0px
        padding: 0px
        text-transform: uppercase 

    p.conten-consist
        font-family: 'Roboto'
        font-size: 12px
        font-style: normal
        font-weight: 300
        color: #333333
        line-height: 25px

    div.card
        display: flex
        flex-direction: column
        border: 4px solid #e4e4e4
        padding: 25px 21px
        background-color: #ffffff

        h2.brand
            font-family: 'DIN Next LT Pro'
            font-size: 25px
            font-weight: 500
            font-style: normal
            color: #333333
            margin: 0px
            padding: 0px

        p.model
            font-family: 'Roboto'
            font-size: 14px
            font-style: normal
            font-weight: 300
            color: #333333
            margin: 15px 0px 22px

        span.available-color
            color: #0089cf
            font-family: 'DIN Next LT Pro'
            font-size: 15xp
            font-weight: 500
            font-style: normal
            margin-bottom: 50px
            padding: 0px

        p.price
            font-family: 'DIN Next LT Pro'
            font-size: 14px
            font-style: normal
            font-weight: 500
            color: #333333
            text-align: end
            margin: 50px 0px 20px

        p.text-stock
            font-family: 'DIN Next LT Pro'
            font-size: 14px
            font-style: normal
            font-weight: 500
            color: #333333
            margin: 50px 0px 20px


        div.wrap-components
            display: flex
            justify-content: space-between

</style>