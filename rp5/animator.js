// Ported from the ruby-processing version at:
// http://github.com/jashkenas/ruby-processing/blob/master/samples/contributed/animator.rb

require("ringo/processing").wire(this);

var FRAMES = 12;
var DELAY = 50;
var BG = 255;

var frames = [];
var lastTime = 0;
var current  = 0;

var down = false;

function setup() {
    size(350, 350);
    strokeWeight(4);
    resetFrames();
}

function draw() {
    if (lastTime + DELAY < millis()) {
        nextFrame();
        lastTime = millis();
    }
    if (isMousePressed)
        line(pmouseX, pmouseY, mouseX, mouseY);
}

function keyPressed() {
    resetFrames();
}

function resetFrames() {
    background(BG);
    for (let i = 0; i < FRAMES; i++)
        frames[i] = get();
}

function nextFrame() {
    frames[current++] = get();
    if (current == FRAMES)
        current = 0;
    image(frames[current], 0, 0);
}

run();
