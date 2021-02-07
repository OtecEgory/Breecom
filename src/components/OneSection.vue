<template>
    <home-card>
      <v-sidebar></v-sidebar>
        <product-map>
            <add-cart-btn></add-cart-btn>
        </product-map>
    <v-select></v-select>
    </home-card>
</template>

<script>
import HomeCard from './HomeCard.vue'
import ProductMap from './ProductMap.vue'
import VSelect from './VSelect.vue'
import AddCartBtn from './AddCartBtn.vue'
import VSidebar from './VSidebar.vue'

export default {
  components: {
    HomeCard,
    ProductMap,
    VSelect,
    AddCartBtn,
    VSidebar
  },
}
</script>

<style lang="sass">

</style>