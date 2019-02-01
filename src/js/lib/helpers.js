export function setAttributes(el, attributes) {
  attributes.forEach(function(attr){
    el.setAttribute(attr.prop, attr.value);
  })
}