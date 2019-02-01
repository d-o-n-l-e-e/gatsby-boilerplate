export default {
  'direction-forward': {
    element: 'a-gltf-model',
    attributes: [
      {
        prop: 'src',
        value: '#direction-asset'
      },{
        prop: 'position',
        value: {x: 0, y: 1, z:0}
      },{
        prop: 'scale',
        value: {x: 4, y: 4, z:4}
      },{
        prop: 'rotation',
        value: {x: 0, y: 0, z:0}
      }
    ]
  },
  'direction-right': {
    element: 'a-gltf-model',
    attributes: [
      {
        prop: 'src',
        value: '#direction-asset'
      },{
        prop: 'position',
        value: {x: 0, y: 1, z:0}
      },{
        prop: 'scale',
        value: {x: 4, y: 4, z:4}
      },{
        prop: 'rotation',
        value: {x: 0, y: -90, z:0}
      }
    ]
  },
  'direction-left': {
    element: 'a-gltf-model',
    attributes: [
      {
        prop: 'src',
        value: '#direction-asset'
      },{
        prop: 'position',
        value: {x: 0, y: 1, z:0}
      },{
        prop: 'scale',
        value: {x: 4, y: 4, z:4}
      },{
        prop: 'rotation',
        value: {x: 0, y: 90, z:0}
      }
    ]
  },
  'direction-back': {
    element: 'a-gltf-model',
    attributes: [
      {
        prop: 'src',
        value: '#direction-asset'
      },{
        prop: 'position',
        value: {x: 0, y: 1, z:0}
      },{
        prop: 'scale',
        value: {x: 4, y: 4, z:4}
      },{
        prop: 'rotation',
        value: {x: 0, y: 180, z:0}
      }
    ]
  }
}