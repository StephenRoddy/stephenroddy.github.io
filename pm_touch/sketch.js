let saw;
let clickInit;

function setup() {
 //width first, then height. otherwise doesn't fill screen
  createCanvas(windowWidth, windowHeight); 
  colorMode(RGB, 255);
  textAlign(CENTER, CENTER);
  textFont('Courier New'); // Use 'Courier New' or any system font available (from chatGPT)
  saw = new p5.Oscillator('saw'); // create saw wave oscillator object
  clickInit = false; //initial setting for playChecker function  
}

function draw() {  
if (mouseIsPressed == true ) { // if staement. uses. logical OR to check if either the mouse is pressed or the screeen is touched
  
  let blueValue = map(mouseX, 0, width, 50, 100);
  let greenValue = map(mouseY, 0, height, 50, 100);
  
  background(0, greenValue, blueValue); // Just filling the. background with color now. Not drawing out. a rectangle anymore
  
  let msHz = map(mouseX, 0, windowWidth,20,2200); //remap horizontal mouse location from range of horizontal window size to a range of 20hz to 2200hz
  let msdB = map(mouseY, 0, windowHeight, .99,.01); //remap horizontal mouse location from range of horizontal window size to a range of 20hz to 8800hz
  saw.freq(msHz);
  saw.amp(msdB);
  
  } 
  else {
    background(255);
    fill(0);
    let textScale = windowWidth * 0.025; //text size = 2.5% of screen size
    textSize(textScale);
    text('Touch/click and drag anywhere on the screen', width / 2, height / 2);
  }
}

function mousePressed(){
  if(clickInit == false){
  playInit(); // calling a helper function that will check to see if the audio is playing and turn saw synth on if it is not. Full function definition below.
  }
}
function touchStarted(){ //tracking touch state
  saw.start();
  clickInit = true;
}


function playInit(){
  saw.start();
  clickInit = true;
}

function mouseReleased(){ // a Listener function. Listens to see if mouse is released and will turn down the Saw synthesis if it is. Resets the state of clickInit
  saw.amp(0,.1); //ramps down to an amplitude of 0 in .1 or a 10th of a second
// touch = false;
}

function touchEnded(){ // a Listener function. Listens to see if mouse is released and will turn down the Saw synthesis if it is. Resets the state of clickInit
  saw.amp(0,.1); //ramps down to an amplitude of 0 in .1 or a 10th of a second
// touch = false;
}


  //*NOTES*
  
  //some of this code is from chatGPT

  //use width /2 etc. to centre on the screen
  //CENTER, CENTER in setup centres text to provided coordinates only
  //so width (of whole window) /2, height (of whole window /2 = centre of window