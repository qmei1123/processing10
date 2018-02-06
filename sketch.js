let bubble;
var x = 1;
var speed = 2;
function setup() {
    createCanvas(800, 800);
    background(255);
    bubble = new Bubble();
    frameRate(3);
}

function draw() { 
    bubble = new Bubble();

    bubble.show();
    x = x + speed;
}

class Bubble {
    constructor() {
        this.x = 100;
        this.y = 100;
    }
    show() {
        noFill();
        stroke(255, 220, 0, 15);
        strokeWeight(x);
        for (this.x = 0; this.x < width; this.x += 100) {
            for (this.y = 0; this.y < width; this.y += 100) {
                ellipse(this.x, this.y, 100, 100);
            }
        }
    }
}