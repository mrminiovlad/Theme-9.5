import VCart from '../components/v-cart.vue'
import VCatalog from '../components/v-catalog.vue'
import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
{
  path: "/", name: "Catalog", component: VCatalog
},
{
  path: "/cart", name: "Cart", component: VCart, props: true
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
