// http://www.learningprocessing.com/examples/chapter-3/example-3-1/

require("ringo/processing").wire(this);

function setup() {
    size(200, 200);
}

function draw() {
    background(255);   
    ellipseMode(CENTER);
    rectMode(CENTER); 
    // body
    stroke(0);
    fill(150);
    rect(100, 100, 20, 100);
    // head
    stroke(0);
    fill(255);
    ellipse(100, 70, 60, 60);   
    // eyes
    fill(0); 
    ellipse(81, 70, 16, 32); 
    ellipse(119, 70, 16, 32);
    // legs
    stroke(0);
    line(90, 150, 80, 160);
    line(110, 150, 120, 160);
}

run();