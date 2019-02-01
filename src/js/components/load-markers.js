import buildMarker from './build-marker';
import markers from '../lib/markers';

export default function() {
  markers.forEach(function(marker){
    buildMarker(marker);
  });
}