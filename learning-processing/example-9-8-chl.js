// http://www.learningprocessing.com/examples/chapter-9/example-9-8/

require("ringo-processing").wire(this);

var N = 50;

var P = [];

function setup() {
    use("opengl");
    size(200, 200, OPENGL);
    smooth();
    while (P.length < N)
        P.push([0, 0]);
    noStroke();
}

function draw() {
    background(255);
    P.shift();
    P.push([mouseX, mouseY]);
    for (let i = 0; i < N; i++) {
        let [x, y] = P[i];
        fill(255 - i * 5);
        ellipse(x, y, i, i);
    }
}

run();
