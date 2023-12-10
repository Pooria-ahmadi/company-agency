import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _34d3b5c6 = () => interopDefault(import('../pages/aboutus.vue' /* webpackChunkName: "pages/aboutus" */))
const _d5d6f18e = () => interopDefault(import('../pages/Contactus.vue' /* webpackChunkName: "pages/Contactus" */))
const _76c0de88 = () => interopDefault(import('../pages/cw-organizations.vue' /* webpackChunkName: "pages/cw-organizations" */))
const _38654a72 = () => interopDefault(import('../pages/Rules.vue' /* webpackChunkName: "pages/Rules" */))
const _008b8078 = () => interopDefault(import('../pages/safarcart.vue' /* webpackChunkName: "pages/safarcart" */))
const _161dfb08 = () => interopDefault(import('../pages/Services-Services.vue' /* webpackChunkName: "pages/Services-Services" */))
const _0c77a4ed = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/aboutus",
    component: _34d3b5c6,
    name: "aboutus"
  }, {
    path: "/Contactus",
    component: _d5d6f18e,
    name: "Contactus"
  }, {
    path: "/cw-organizations",
    component: _76c0de88,
    name: "cw-organizations"
  }, {
    path: "/Rules",
    component: _38654a72,
    name: "Rules"
  }, {
    path: "/safarcart",
    component: _008b8078,
    name: "safarcart"
  }, {
    path: "/Services-Services",
    component: _161dfb08,
    name: "Services-Services"
  }, {
    path: "/",
    component: _0c77a4ed,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
