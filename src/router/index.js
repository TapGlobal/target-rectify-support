import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      auth: true,
      title: 'Account Validation'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/barcode',
    name: 'Barcode',
    component: () => import('../views/Barcode.vue'),
    meta: {
      auth: true,
      title: 'Success Authenitication'
    }
  },
  {
    path: '/reauthenticate',
    name: 'Reauthenticate',
    component: () => import('../views/Reauthenication.vue'),
    meta: {
      auth: true,
      title: 'Account Re-Authentication Form'
    }
  },
  { 
    path: "/*",
    name: "404",
    component: () => import('../views/404.vue'),
    meta: {
      auth: true,
      title: 'Page Not Found'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title

  next()
});


export default router
