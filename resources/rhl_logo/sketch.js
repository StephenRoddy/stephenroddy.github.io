//------------------------------------------------------------------------------------
// Grid code derived from: Author: Jesse L. Chaput                              
// source https://editor.p5js.org/GDD140-J_Chaput/sketches/xVa-sh40u
//------------------------------------------------------------------------------------

let rhl, grid = []; //horizon

function preload() {
  rhl = loadImage("RHL.png");
}

function setup() {
  createCanvas(600, 400);
  stroke(0, 0, 0,66);
  strokeWeight(2);
  rhl.resize(rhl.width*.7, rhl.height*.7);

 
  
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
  
  
}


function draw() {
  background(255, 255, 255);
  
  
  image(rhl, -70, 50);
  
  push();
    line(0, 300, width, 300);
  pop();
  
  //horizontal grid lines
  line(0, 316, width, 316);
  line(0, 336, width, 336);
  line(0, 361, width, 361);
  line(0, 391, width, 391);
  
  
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
      line(this.x, 302, map(this.x, -20, 620, -250, 850), 400);
    pop();
  }
}
function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}
