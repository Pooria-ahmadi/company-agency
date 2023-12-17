import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6e552adc = () => interopDefault(import('..\\pages\\aboutus.vue' /* webpackChunkName: "pages/aboutus" */))
const _0045edb6 = () => interopDefault(import('..\\pages\\contactus.vue' /* webpackChunkName: "pages/contactus" */))
const _6fce8170 = () => interopDefault(import('..\\pages\\cw-organizations.vue' /* webpackChunkName: "pages/cw-organizations" */))
const _3998bb44 = () => interopDefault(import('..\\pages\\rules.vue' /* webpackChunkName: "pages/rules" */))
const _cbbc1ce0 = () => interopDefault(import('..\\pages\\safarcart.vue' /* webpackChunkName: "pages/safarcart" */))
const _5a207cd4 = () => interopDefault(import('..\\pages\\services-services.vue' /* webpackChunkName: "pages/services-services" */))
const _2eb81cb9 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6e552adc,
    name: "aboutus"
  }, {
    path: "/contactus",
    component: _0045edb6,
    name: "contactus"
  }, {
    path: "/cw-organizations",
    component: _6fce8170,
    name: "cw-organizations"
  }, {
    path: "/rules",
    component: _3998bb44,
    name: "rules"
  }, {
    path: "/safarcart",
    component: _cbbc1ce0,
    name: "safarcart"
  }, {
    path: "/services-services",
    component: _5a207cd4,
    name: "services-services"
  }, {
    path: "/",
    component: _2eb81cb9,
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
