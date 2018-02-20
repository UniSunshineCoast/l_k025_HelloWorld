/**
 * Not a full working example -- see the `examples/` directory
 */
THREE.ARUtils.getARDisplay().then(init);

function init(display) {
  vrDisplay = display;
  // Set up three.js scene
  renderer = new THREE.WebGLRenderer({ alpha: true });
  scene = new THREE.Scene();

  // ...

  // Set up our ARView with ARPerspectiveCamera
  arView = new THREE.ARView(vrDisplay, renderer);
  if (vrDisplay === null) {
    console.log(this, "\nThere is no vrDisplay");
  } else {
    camera = new THREE.ARPerspectiveCamera(vrDisplay, 60, window.innerWidth / window.innerHeight, vrDisplay.depthNear, vrDisplay.depthFar);
    vrControls = new THREE.VRControls(camera);
  }

  update();
}

function update() {
  // Update our controls/camera, the ARView rendering,
  // and our three.js scene
  if (vrDisplay === null) {
    console.log(this, "\nCannot update, there is no vrDisplay");
  } else {
    vrControls.update();
  arView.render();
  renderer.clearDepth();
  renderer.render(scene, camera);
  vrDisplay.requestAnimationFrame(update);
  }
  
}