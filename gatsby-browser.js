import wrapWithProvider from "./wrap-with-provider"

import NProgress from 'nprogress'

// export function onClientEntry() {
//   // init gatsby
// }

// export function onInitialClientRender() {
//   // initial load
// }

// export function onPreRouteUpdate({ location }) {}

export function onRouteUpdateDelayed() {
  NProgress.start()
}

export function onRouteUpdate() {
  NProgress.done()

  // Track pageview with google analytics
  // window.ga(`set`, `page`, location.pathname + location.search + location.hash)
  // window.ga(`send`, `pageview`)
}

export const wrapRootElement = wrapWithProvider