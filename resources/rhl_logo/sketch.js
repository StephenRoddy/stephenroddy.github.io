//------------------------------------------------------------------------------------
// Grid code derived from: Author: Jesse L. Chaput                              
// source https://editor.p5js.org/GDD140-J_Chaput/sketches/xVa-sh40u
//------------------------------------------------------------------------------------
// Smaller version

let rhl, grid = []; //horizon
let horizon;

function preload() {
  rhl = loadImage("RHL.png");
}

function setup() {
  createCanvas(500, 333);
  stroke(0, 0, 0,66);
  strokeWeight(2);
  rhl.resize(rhl.width*.5, rhl.height*.5);
  
  //section dedicated to setting initial vertical grid line positions
  grid.push(new GridLine(1));
  grid.push(new GridLine(51));
  grid.push(new GridLine(101));
  grid.push(new GridLine(151));
  grid.push(new GridLine(201));
  grid.push(new GridLine(251));
  grid.push(new GridLine(301));
  grid.push(new GridLine(351));
  grid.push(new GridLine(401));
  grid.push(new GridLine(451));
  grid.push(new GridLine(501));
  grid.push(new GridLine(551));
  grid.push(new GridLine(601));
  
  horizon = height-height/3;
  
}


function draw() {
  background(255, 255, 255);
  
  
  image(rhl, 15, 45);
  
  push();
    line(0, horizon, width, horizon);
  pop();
  
  //horizontal grid lines
  line(0, horizon+horizon*.1, width, horizon+horizon*.1);
  line(0, horizon+horizon*.25, width, horizon+horizon*.25);
  line(0, horizon+horizon*.4, width, horizon+horizon*.4);
 // line(0, horizon+horizon*.20, width, horizon+horizon*.20);
  
  
  //moving elements
  for(i = 0; i < grid.length; i++) {
    grid[i].update();
  }
  
}


class GridLine {
  constructor(x) {
    this.x = x;
  }
  
  update() {
    this.x--;
    if(this.x <= -1) {
      this.x = 649; //rollover
    }
    
    push();
      stroke(0, 0, 0,66);
      strokeWeight(2);
      line(this.x, horizon, map(this.x, -20, 620, -250, 850), 400);
    //       line(this.x, horizon, map(this.x, -20, 620, -250, 850), 400); //original
    pop();
  }
}
function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}
