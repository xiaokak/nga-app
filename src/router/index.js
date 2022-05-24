import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '@/views/HomePage'
import FollowPage from '@/views/FollowPage'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/HomePage',
    name: 'homepage',
    component: HomePage
  },
  {
    path: '/FollowPage',
    name: 'followpage',
    component: FollowPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
