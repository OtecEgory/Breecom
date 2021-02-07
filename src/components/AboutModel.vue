<template>
    <section>
        <div class="bkg-about-model">
            <div class="container">
                <div class="wrapp-content">
                    <h2>CLASSIC CUSHIONING. MODERN COMFORT.</h2>
                    <p>
                        Nike Air Max Tavas SD Men's Shoe recalls the profile of<br>
                        the iconic running original with a Max Air unit in the heel<br>
                        and multi-surface Waffle outsole. A lightweight upper and<br>
                        gradient detail offer a comfortable fit and dynamic look.<br>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="sass">
    div.bkg-about-model
        margin-top: 160px
        background-image: url('../assets/BgAboutModel.png')
        background-position: 100% 65%
        background-repeat: no-repeat
        background-size: cover
        height: 80vh

        div.container
            margin: 0 auto
            max-width: 1300px

        div.wrapp-content
            position: absolute
            top: 100%
            transform: translateY(50%)

        h2
            font-family: 'DIN Next LT Pro'
            font-size: 25px
            font-weight: 400
            font-style: normal
            color: #333333
            margin: 0px
            padding: 0px
            color: #FFFFFF

        p
            font-family: 'RobotoLight'
            font-size: 14px
            letter-spacing: 1px
            font-style: normal
            font-weight: 300
            color: #666666
            color: #FFFFFF
            line-height: 25px
</style>