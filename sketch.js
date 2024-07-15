/*
Extra features implemented:
- Changed the colors of the color grid
- Used the noise to change the color and length of the compass lines
*/

var stepSize = 20;

function setup() {
    createCanvas(500, 500);
}
///////////////////////////////////////////////////////////////////////
function draw() {
    background(125);

    colorGrid();
    compassGrid();
}
///////////////////////////////////////////////////////////////////////
function colorGrid() {
    // your code here
    for (var x = 0; x < width; x += width / 25) {
		for (var y = 0; y < height; y += height / 25) {
            var speed = map(mouseX, 0, width, 25, 150);
            var n = noise(x / 300, y / 300, frameCount / speed);
            
            push();
                fill(lerpColor(color("#F18F01"), color("#048BA8"), n));
                noStroke();
                rect(x, y, stepSize, stepSize);
            pop();
        }
    }
}
///////////////////////////////////////////////////////////////////////
function compassGrid() {
    // your code here
    for (var x = 0; x < width; x += width / 25) {
		for (var y = 0; y < height; y += height / 25) {
            var speed = map(mouseX, 0, width, 150, 250);
            var n = noise(x / 300, y / 300, frameCount / speed);
            var angle = map(n, 0, 1, 0, 720);
            var length = map(n, 0, 1, 0, 50);
            
            push();
                translate(x + stepSize / 2, y + stepSize / 2); // move to the center of each grid
                rotate(radians(angle));
                stroke(lerpColor(color("#50FFB1"), color("#4C1A57"), n));
                strokeWeight(2);
                line(0, 0, 0, 0 - length);
            pop();
        }
    }
}