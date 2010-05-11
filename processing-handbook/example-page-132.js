// Based on: Processing: A Programming Handbook for Visual Designers and Artists, page 132

require("ringo/processing").wire(this);

var power = 3;
var d = 8;

function setup() {
    size(200, 200);
    noLoop();
    redraw();
}

function sketchResized() {
    redraw();
}

function mousePressed() {
    if (mouseButton == RIGHT) {
        d *= 2;
    } else if (d >= 2) {
        d /= 2;
    }
    redraw();
}

function eachPoint(f) {
    for (let y = 0; y < height; y++)
        for (let x = 0; x < width; x++)
            f(x, y);
}

function draw() {
    eachPoint(drawPixel);
}

function drawPixel(x, y) {
    var total = 0;
    for (let i = d; i >= 1; i /= 2)
        total += noise(x/d, y/d) * d;
    var turbulence = 128 * total / d;
    var base = x * 0.2 + y * 0.12;
    var offset = base + power * turbulence / 256;
    stroke(abs(sin(offset)) * 256);
    point(x, y);
}

run();
