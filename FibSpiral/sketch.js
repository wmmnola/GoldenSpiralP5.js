let x, y, theta, phi = 0;

function setup() {
  colorMode(RGB, 100);
  createCanvas(windowWidth, windowHeight);
  noStroke();
  phi = (1 + sqrt(5)) / 2;
  theta = 0;
  x = pow(phi, (2 / PI));
  y = 0;

}

function draw() {
  if (theta <= 28) {
    push();
    translate(windowWidth / 2, windowHeight / 2)
    rotate(PI);
    rotate(PI / 8)
    scale(.25);
    theta += .01;
    dx = pow(phi, theta * (2 / PI)) * sin(theta) + cos(theta) * pow(phi,
      theta * (2 / PI)) * (2 / PI) * log(phi);
    dy = pow(phi, theta * (2 / PI)) * cos(theta) + sin(theta) * pow(phi,
      theta * (2 / PI)) * (2 / PI) * log(phi);
    x1 = x;
    y1 = y;
    x = x + dx;
    y = y + dy;
    let r = noise(theta) * 100
    let g = (map(cos(theta), -1, 1, 0, 100));
    let b = (map(sin(theta), -1, 1, 0, 100))
    stroke(color(r, g, b));
    fill(color(r, g, b));
    triangle(0, 0, x1, y1, x, y)
    pop();
  }
}
