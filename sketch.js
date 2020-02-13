let rectX = 0;
const rectWidth = 60;
let rectY;
const rectHeight = 60;
let clickCount = 0;
let speed;
let t = 'Click on the square!';

function setup () {
    createCanvas(500, 500);
    rectY = random(height - rectHeight);
    speed = random(2, 4);
}

function draw () {
    background('pink');
    textSize(16);
    text(t, 30, 30);
    drawShape();
    rectX += speed;
    if(rectX > width) {
        noLoop();
        textSize(20);
        fill('magenta');
        text('Your score was ' + clickCount , 30, 60);
    }
}

function mousePressed() {
    if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
        clickCount++;
        console.log('hit', clickCount);
    }
}

function drawShape() {
    fill('purple');
    rect(rectX, rectY, rectWidth, rectHeight);
}