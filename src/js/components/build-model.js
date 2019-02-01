import models from '../lib/models';
import {setAttributes} from '../lib/helpers';

export default function(model) {
  var modelEl = document.createElement(models[model].element);
  setAttributes(modelEl, models[model].attributes)

  return modelEl;
}