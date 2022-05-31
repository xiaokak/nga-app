import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '@/views/HomePage'
import FollowPage from '@/views/FollowPage'
import CommunityPage from '@/views/CommunityPage'
import PersonalPage from '@/views/PersonalPage'

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
    path: '/CommunityPage',
    name: 'communitypage',
    component: CommunityPage
  },
  {
    path: '/PersonalPage',
    name: 'personalpage',
    component: PersonalPage
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
