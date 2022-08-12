import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

// Adjustments can be done any time before `render`
scene.add(mesh)

// Position
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1
mesh.position.set(0.7, -0.6, 1) // equivalent of above
console.log(mesh.position.length()) // length of vector from center of the scene
// mesh.position.normalize() // reduces vector length to 1

// Scale
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
mesh.scale.set(2, 0.5, 0.5)
console.log(mesh.scale.length())

// Rotate (with rotation property)

// change order rotations are applied to axis 
// - make sure to do this before actually ordering
mesh.rotation.reorder('YXZ') 
mesh.rotation.y = Math.PI // half a rotation
mesh.rotation.y = Math.PI / 2 // quarter rotation
mesh.rotation.x = Math.PI / 4 // eight rotation ...

// axes helper
scene.add(new THREE.AxesHelper(2))

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)
console.log(mesh.position.distanceTo(camera.position)) // length of vector from camera position

// Make camera look at cube
camera.lookAt(mesh.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)