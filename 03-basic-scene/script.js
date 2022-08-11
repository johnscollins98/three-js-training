const scene = new THREE.Scene()

// Create red cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const sizes = {
  width: 800,
  height: 600
}
const aspectRatio = sizes.width / sizes.height

// Set up camera
const fov = 75 // degrees
const camera = new THREE.PerspectiveCamera(fov, aspectRatio)
camera.position.z = 3
camera.position.x = 1
scene.add(camera)

// Create renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
  canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
