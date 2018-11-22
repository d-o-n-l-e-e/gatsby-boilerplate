const NProgress = require('nprogress')

// exports.onClientEntry = () => {
//   // initial load
// }

exports.onPreRouteUpdate = ({ location }) => {}

exports.onRouteUpdateDelayed = () => {
  NProgress.start()
}

exports.onRouteUpdate = ({ location }) => {
  NProgress.done()

  // Track pageview with google analytics
  // window.ga(`set`, `page`, location.pathname + location.search + location.hash)
  // window.ga(`send`, `pageview`)
}
