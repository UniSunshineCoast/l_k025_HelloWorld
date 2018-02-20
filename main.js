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
    console.log("Cannot add AR camera, there is no vrDisplay\n", this);
    var d = document.createElement("div");
    var t = document.createTextNode("This device has no vrDisplay.");
    d.appendChild(t);
    var c = document.getElementById("div1");
    document.body.insertBefore(d, c)
    d.style.fontSize = "40px";
    d.style.fontWeight = "bold";
    c.style.display = "none";
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
    console.log("Cannot update, there is no vrDisplay.\n", this);
  } else {
    vrControls.update();
  arView.render();
  renderer.clearDepth();
  renderer.render(scene, camera);
  vrDisplay.requestAnimationFrame(update);
  }
  
}