// http://www.learningprocessing.com/examples/chapter-9/example-9-8/

require("ringo/processing").wire(this);

var N = 50;

var [X, Y] = [[], []];

function setup() {
    size(200, 200);
    smooth();
    for (let i = 0; i < N; i++)
        X[i] = Y[i] = 0;
}

function draw() {
    background(255);
    for (let i = 0; i < N-1; i++) {
        X[i] = X[i+1];
        Y[i] = Y[i+1];
    }
    X[N-1] = mouseX;
    Y[N-1] = mouseY;
    for (let i = 0; i < N; i++) {
        noStroke();
        fill(255-i*5);
        ellipse(X[i], Y[i], i, i);
    }
}

run();