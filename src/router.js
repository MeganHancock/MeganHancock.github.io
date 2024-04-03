import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: loadPage('LandingPage')
  },
  {
    path: '/applications',
    name: 'applications',
    component: loadPage('ApplicationsPage')
  },
  {
    path: '/aboutMe',
    name: 'aboutMe',
    component: loadPage('AboutMePage')
  },
  {
    path: '/resume',
    name: 'resume',
    component: loadPage('ResumePage')
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: loadPage('HomePage')
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: loadPage('AboutPage')
  // },
  // {
  //   path: '/account',
  //   name: 'Account',
  //   component: loadPage('AccountPage'),
  //   beforeEnter: authGuard
  // }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
