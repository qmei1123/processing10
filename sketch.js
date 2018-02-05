let bubble1, bubble2, bubble3;
function setup() {
    createCanvas(800, 800);
    background(50, 50, 200);
    bubble = new Bubble();
}

function draw() { 
    bubble1 = new Bubble();
    bubble2 = new Bubble();
    bubble3 = new Bubble();

}

class Bubble {
    constructor() {
        this.x = 100;
        this.y = 100;
    }
    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
    show() {
        stroke(255);
        strokeWeight(10);
        noFill();
        ellipse(this.x, this.y, 100, 100);
    }
}