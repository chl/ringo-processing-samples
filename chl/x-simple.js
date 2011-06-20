require("ringo-processing").wire(this);

function setup() {
    size(400, 400);
    background(0);
    colorMode(RGB, 1);
    strokeWeight(5);
    stroke(0.75, 0, 0);
}

function draw() {
    line(0, 0, width, height);
    line(0, height, width, 0);
}

run();