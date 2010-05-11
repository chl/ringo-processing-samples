// chl, 2010-05-09

const DEGREES = Math.PI / 180;

function delta(heading, n) {
    return {
        x: Math.cos(heading * DEGREES) * n,
        y: Math.sin(heading * DEGREES) * n
    };
};

// --

function Turtle(sketch, x, y, heading) {
    this.sketch = sketch;
    this.reset(x, y, heading);
}

Turtle.prototype.reset = function(x, y, heading) {
    if (x === undefined || x === null) {
        this.x = this.sketch.width/2;
        this.y = this.sketch.height/2;
    } else {
        this.x = x;
        this.y = y;
    }
    this.heading = heading || 0;
    this.pen = true;
};

Turtle.prototype.up = function() {
    this.pen = false;
};

Turtle.prototype.down = function() {
    this.pen = true;
};

Turtle.prototype.toggle = function() {
    this.pen = !this.pen;
};

Turtle.prototype.forward = function(n) {
    var {x, y} = delta(this.heading, n);
    if (this.pen)
        this.sketch.line(
            this.x, this.y, 
            this.x + x, this.y + y
        );
    this.x += x;
    this.y += y;
};

Turtle.prototype.back = function(n) {
    this.forward(-n);
};

Turtle.prototype.left = function(d) {
    this.heading -= d;
};

Turtle.prototype.right = function(d) {
    this.heading += d;
};

// --

if (require.main == module.id) { 
    // for use w/ ringo -i
    require("ringo/processing").wire(this);
    run();    
    size(800, 600);
    background(255);
    smooth();
    var turtle = new Turtle(sketch);
    for each (let x in Object.getOwnPropertyNames(Turtle.prototype))
        if (x != "constructor")
            this[x] = (function(x) function() turtle[x].apply(turtle, arguments))(x);
} else {
    exports.Turtle = Turtle;
}
