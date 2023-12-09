import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1a097786 = () => interopDefault(import('..\\pages\\aboutus.vue' /* webpackChunkName: "pages/aboutus" */))
const _679253f0 = () => interopDefault(import('..\\pages\\Contactus.vue' /* webpackChunkName: "pages/Contactus" */))
const _5d87eaae = () => interopDefault(import('..\\pages\\Rules.vue' /* webpackChunkName: "pages/Rules" */))
const _5b8fe70a = () => interopDefault(import('..\\pages\\safarcart.vue' /* webpackChunkName: "pages/safarcart" */))
const _be09be82 = () => interopDefault(import('..\\pages\\Services-Services.vue' /* webpackChunkName: "pages/Services-Services" */))
const _b56335b8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _1a097786,
    name: "aboutus"
  }, {
    path: "/Contactus",
    component: _679253f0,
    name: "Contactus"
  }, {
    path: "/Rules",
    component: _5d87eaae,
    name: "Rules"
  }, {
    path: "/safarcart",
    component: _5b8fe70a,
    name: "safarcart"
  }, {
    path: "/Services-Services",
    component: _be09be82,
    name: "Services-Services"
  }, {
    path: "/",
    component: _b56335b8,
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
