import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index')
  },
  {
    path: '/',
    name: 'Menu',
    redirect: '/home',
    component: () => import('../views/menu/index'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/home/index')
      },
      {
        path: '/upload',
        name: 'Upload',
        component: () => import('../views/upload/index')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from, next, 'rout');
  next()
})

export default router
