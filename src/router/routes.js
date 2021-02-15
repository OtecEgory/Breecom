import VueRouter from 'vue-router'
import CardProduct from '../views/Cards'

export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/product/:productid',
            component: CardProduct
        },
    ]
})