var {Sketch, RGB} = require("ringo-processing");

var X = exports.X = function() {};

X.prototype = new Sketch();

X.prototype.setup = function() {
    this.size(400, 400);
    this.colorMode(RGB, 1);
    this.background(0);
    this.strokeWeight(5);
    this.stroke(0.75, 0, 0);
};

X.prototype.draw = function() {
    this.line(0, 0, this.width, this.height);
    this.line(0, this.height, this.width, 0);
};

if (require.main == module.id)
    new X().run();