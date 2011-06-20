// http://www.learningprocessing.com/examples/chapter-1/example-1-2/

require("ringo-processing").wire(this);

function setup() {
    size(200, 200);
    smooth();
    background(255);
    noFill();
    stroke(0);
    ellipse(60, 60, 100, 100);
}

run();