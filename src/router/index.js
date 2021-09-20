import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载
const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const ShopCart = () => import('@/views/shopCart/ShopCart')
const Detail = () => import('@/views/detail/Detail')
const Profile = () => import('@/views/profile/Profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home',
    meta: {
      showTab: true
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      showTab: true
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      showTab: true
    }
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: {
      showTab: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      showTab: true
    }
  },
  {
    path: '/detail/:iid',
    component: Detail,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
