let tx = 0;
let ty = 0;
let t;
const resetInterval = 300; // 5 seconds at 60 FPS
let restartCount = 0;

function setup() {
  const container = document.getElementById('p5-container');
  let w = container.offsetWidth;
  let h = container.offsetHeight;
  let canvas = createCanvas(w, h);
  canvas.parent('p5-container');
  
  t = floor(random(resetInterval));
  background('#c62b69');
}

function draw() {
  fill('#edf4ff');
  stroke('#edf4ff');
  
  // strokeWeight random between 1 and 2 for variety
  strokeWeight(random(1, 2));
  
  // Use sine and cosine combined for x and y coords, scaled & shifted to canvas size
  let x = width / 2 + sin(t * 0.1 + restartCount) * (width / 3) + cos(t * 0.05) * 50;
  let y = height / 2 + cos(t * 0.1 + restartCount) * (height / 3) + sin(t * 0.07) * 50;
  
  point(x, y);
  
  // A small rect for texture at (tx, ty) - you can comment this out if you want cleaner
  strokeWeight(1);
  rect(tx, ty, 2, 2);

  // Update tx, ty with some bitwise magic and modulation to keep inside canvas
  tx = ((t * t) << 4 | t << 2) % width;
  ty = (t * restartCount) % height;

  t++;

  if (t >= resetInterval) {
    restartCount++;
    t = 0;
    tx = 0;
    ty = 0;
    background('#c62b69');
  }
}

function windowResized() {
  const container = document.getElementById('p5-container');
  resizeCanvas(container.offsetWidth, container.offsetHeight);
  background('#c62b69');
}
