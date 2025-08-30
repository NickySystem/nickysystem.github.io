let tx = 0;
let ty = 0;
let t = 0;  // Time variable

function setup() {
  const container = document.getElementById('p5-container');
  let w = container.offsetWidth;
  let h = container.offsetHeight;
  let canvas = createCanvas(w, h);
  canvas.parent('p5-container');
  background('#c62b69');
}

function draw() {
  fill('#edf4ff');
  stroke('#edf4ff');
  strokeWeight(2);

  point(tx, ty);

  tx = ((t * t) << 4 | t << 4) % width;
  ty = (t >> sin(t * t) * 10) % height;

  t++;
}

function windowResized() {
  const container = document.getElementById('p5-container');
  resizeCanvas(container.offsetWidth, container.offsetHeight);
  background('#c62b69');
}
