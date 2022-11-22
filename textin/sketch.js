let input1, button, greeting;


function setup() {
  // create canvas
  let writer = createWriter('newFile.txt');  
  createCanvas(710, 400);
  background("#8bc8fe");
  fill("#051b2c");
  input1 = createInput();
  input1.position(20, 65);

  button = createButton('submit');
  button.position(input1.x + input1.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'what is your name?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const name = input1.value();
  writer.write([name]);
  greeting.html('Thanks');
  input1.value('');

  for (let i = 0; i < 50; i++) {
    push();
    fill(random(255), random(255), 100);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 0, 0);
    pop();
  }
}