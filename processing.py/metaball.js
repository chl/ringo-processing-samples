// Adapted from Jonathan Feinberg's Python port of original code by luis2048
// http://github.com/jdf/processing.py/blob/master/examples.py/Topics/Effects/Metaball/Metaball.py

require("ringo-processing").wire(this);

var coord = [
    [0, 0],
    [90, 120],
    [90, 45]
];

// --

function Ball(x, y, g) {
    this.x = x;
    this.y = y;
    this.g = g;
    this.dx = 1;
    this.dy = 1;
    this.vx = [];
    this.vy = [];
}

Ball.prototype.move = function() {
    with (this) {
        x += dx;
        y += dy;
        // bounce
        if (x < 0) dx = 1;
        if (y < 0) dy = 1;
        if (x > g.width)  dx = -1;
        if (y > g.height) dy = -1;
    }
};

Ball.prototype.updateValues = function() {
    for (var x = 0; x < this.g.width; x++)
        this.vx[x] = sq(this.x - x);
    for (var y = 0; y < this.g.height; y++)
        this.vy[y] = sq(this.y - y);
}

// --

function range(x) {
    for (var i = 0; i < x; i++)
        yield i;
}

function sum(iterable) {
    var sum = 0;
    for each (let x in iterable)
        sum += x;
    return sum;
}

// --

var pg;
var balls;

function setup() {
    use("opengl");
    size(640, 360, OPENGL);
    pg = createGraphics(160, 90, P2D);
    balls = [new Ball(x, y, pg) for each ([x, y] in coord)];
}

function draw() {
    for each (let ball in balls) {
        ball.move();
        ball.updateValues();
    }
    pg.beginDraw();
    // 28 fps
    var [w, h, n, applet] = [pg.width, pg.height, balls.length, sketch.applet];
    for (var x = 0; x < w; x++)
        for (var y = 0; y < h; y++) {
            var m = 1;
            for (var i = 0; i < n; i++)
                m += 60000 / (balls[i].vy[y] + balls[i].vx[x] + 1);
            pg["set(int,int,int)"](x, y, applet["color(float,float,float)"](0, x + m, (x + m + y) / 2));
        }
    /* // 23 fps
    var applet = sketch.applet;
    for (var x = 0; x < pg.width; x++)
        for (var y = 0; y < pg.height; y++) {
            var m = 1;
            for (var i = 0; i < balls.length; i++)
                m += 60000 / (balls[i].vy[y] + balls[i].vx[x] + 1);
            pg["set(int,int,int)"](x, y, applet["color(float,float,float)"](0, x + m, (x + m + y) / 2));
        }
    */
    /* // 19 fps
    var applet = sketch.applet;
    for (var x = 0; x < pg.width; x++)
        for (var y = 0; y < pg.height; y++) {
            var m = 1;
            for (var i = 0; i < balls.length; i++)
                m += 60000 / (balls[i].vy[y] + balls[i].vx[x] + 1);
            pg.set(x, y, applet.color(0, x + m, (x + m + y) / 2));
        }
    */
    /* // 10 fps
    for (var x = 0; x < pg.width; x++)
        for (var y = 0; y < pg.height; y++) {
            var m = 1;
            for (var i = 0; i < balls.length; i++)
                m += 60000 / (balls[i].vy[y] + balls[i].vx[x] + 1);
            pg.set(x, y, color(0, x + m, (x + m + y) / 2));
        }
    */
    /* // 7 fps
    for each (let x in range(pg.width))
        for each (let y in range(pg.height)) {
            let m = sum([60000 / (ball.vy[y] + ball.vx[x] + 1) for each (ball in balls)]);
            pg.set(x, y, color(0, x + m, (x + m + y) / 2));
        }
    */
    if (frameCount % 10 == 0)
        print(frameRate);
    pg.endDraw();
    image(pg, 0, 0, width, height);
}

// --

run();
