/*! MAIN.JS */
import loadMarkers from './components/load-markers'

var isInitialized = false;

AFRAME.registerComponent('data-scene', {
  init: function () {
    if (!isInitialized) {
      isInitialized = true;
      document.documentElement.classList.add('arjs')
      loadMarkers();
    }
  }
});