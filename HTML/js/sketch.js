// Inspired by http://winkervsbecks.github.io/material-vector-field/
// Modifications by Eric Treacy
var locs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  var res = 50;
  var countX = ceil(width / res) + 60;
  var countY = ceil(height / res) + 20;

  for (var j = 0; j < countY; j++) {
    for (var i = 0; i < countX; i++) {
      locs.push(new p5.Vector(res * i, res * j));
    }
  } 
}

function draw() {
  var canvas = createCanvas(windowWidth, 5*windowHeight);
  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent("sketch-holder");
  // #fff
  background(0, 0, 0);
  // #867b00
  stroke(128, 128, 128);
  for (var i = locs.length - 2; i >= 0; i--) {
    var h = calcVec(locs[i].x - mouseX, locs[i].y - mouseY);
    push();
    translate(locs[i].x, locs[i].y);
    rotate(h.heading());
    line(0, 20, 20, 20);
    pop();
  }
}

function calcVec(x, y) {
  return new p5.Vector(y - x, -x - y);
}

function windowresized() {
  redraw();
}



