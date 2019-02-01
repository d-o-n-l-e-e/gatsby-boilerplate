import buildModel from './build-model';
import {setAttributes} from '../lib/helpers';

export default function(marker) {
  var sceneEl = document.querySelector('a-scene');

  // set marker attributes
  var markerEl = document.createElement('a-marker');
  markerEl.setAttribute('data-marker', '');

  setAttributes(markerEl, marker.attributes)

  // build model
  var modelEl = buildModel(marker.model);

  // append model to marker
  markerEl.appendChild(modelEl);

  // append marker to scene
  sceneEl.appendChild(markerEl);
}
