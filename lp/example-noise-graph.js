// http://www.learningprocessing.com/examples/chapter-13/example-noise-graph/

require("ringo/processing").wire(this);

var t = 0;
var step = 0.01;

function setup() {
    size(400, 200);
    smooth();
    stroke(0);
    strokeWeight(2);
}

function draw() {
    background(255);
    for (let i = 0, t0 = t; i < width; i++)
        line(
            i, noise(t0) * height,
            i, noise(t0 += step) * height
        );
    t += step;
}

run();