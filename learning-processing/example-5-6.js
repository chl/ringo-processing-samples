// http://www.learningprocessing.com/examples/chapter-5/example-5-6/

require("ringo-processing").wire(this);

var [x, speed] = [0, 1];

function setup() {
    size(200, 200);
    smooth();
    stroke(0);
    fill(175);
}

function draw() {
    background(255);
    x += speed;
    if (x > width || x < 0)
        speed *= -1;
    ellipse(x, 100, 32, 32);
}

run();