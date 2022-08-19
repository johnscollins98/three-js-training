import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animations
const clock = new THREE.Clock()
const tick = () => {
    // Time
    const delta = clock.getElapsedTime()

    // Update object
    mesh.rotation.y = delta * Math.PI * 2
    mesh.rotation.x = delta * Math.PI
    mesh.position.y = Math.sin(delta)
    mesh.position.x = Math.cos(delta)

    //Render
    renderer.render(scene, camera)

    requestAnimationFrame(tick)
}

tick()
