// Adapted from Jonathan Feinberg's noisefield.py
// http://github.com/jdf/processing.py/blob/master/examples.py/Basics/Math/NoiseField/noisefield.py

require("ringo-processing").wire(this);

var [srcSize, destSize] = [50, 400];

var g;

function setup() {
    use("opengl");
    size(destSize, destSize, OPENGL);
    g = createGraphics(srcSize, srcSize, JAVA2D);
}

function draw() {
    var t = .0005 * millis();
    g.beginDraw();
    for (var x = 0; x < srcSize; x++)
        for (var y = 0; y < srcSize; y++) {
            var blue = noise(t + .1*x, t + .05*y, .2*t);
            g.set(x, y, color(0, 0, 255 * blue));
        }
    g.endDraw();
    image(g, 0, 0, width, height);
}

run();
