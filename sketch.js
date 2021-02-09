
/***************************************************************************
	Project name: Code Self-Portrait
		by Ashley Lee
	Overview: This is Ashley Lee's self portrait code that uses shapes to
	recreate the self-portrait drawing by Ashley. 
	________________________________________________________________________
	Note: 
	(1) The ReadMe file has the JPEG of the hand drawn portrait. 
******************************************************************************/


//Global Variables (color)
var hairColor;
var skinColor; 
var eyeColor;
var teethColor;
var tongueColor;
var shirtColor;

//Global Variables (location)
var midX;
var midY;

//Global Variable for debug mode
var gDugMode = false;

// Setup code goes here
function setup() {
  createCanvas(500, 500);

  //Set color variables
  hairColor = color(87, 65, 47);
  skinColor = color(253, 228, 200);
  eyeColor = color(53,40,30);
  teethColor = color(255);
  tongueColor = color(255, 192, 203);
  shirtColor = color(169);

  //Set location variables
  midX = width/2;
  midY = height/2;
 }

function draw() {
//create backgrounds
  background(250, 218, 221);
 //to activate gDugMode
  if(gDugMode == true) {
  	drawDebugInfo();
  }

  drawHair();
  drawFace();
  drawBangs();
  drawEars();
  drawNeck();
  drawEyebrows();
  drawEyes();
  drawEyelashes();
  drawNose();
  drawMouth();
  drawTeeth();
  drawTongue();
  drawShirt();
  drawNeck();
}
//text for debug
function drawDebugInfo() {
	fill(255);
	text("X:"+mouseX + " Y:"+ mouseY, 20,height-20);
}

//controle debug info display with space bar
function keyTyped() {
	if (key == ' ') {
		gDugMode =! gDugMode;
	}
}

//draw hair
function drawHair() {
	noStroke();
	fill(hairColor);
	arc(midX, 265, 240, 380, QUARTER_PI+HALF_PI, QUARTER_PI, OPEN);
}

//draw face shape
function drawFace() {
	noStroke();
	fill(skinColor);
	ellipse(midX, 205, 170, 220);
}

//add bangs
function drawBangs() {
	fill(hairColor);
	//top part of bang
	arc(midX, 160, 160, 160, PI, 0);
	//left bang
	arc(190, 140, 160, 135, 0, QUARTER_PI+HALF_PI);
	//right bang
	arc(315, 140, 120, 135, QUARTER_PI, PI);
}

//add ears
function drawEars() {
	fill(skinColor)
	//left ear
	arc(midX-170/2+5, midY-10, 30, 50, QUARTER_PI, PI+HALF_PI);
	//right ear
	arc(midX+170/2-5, midY-10, 30, 50, -HALF_PI, HALF_PI+QUARTER_PI);
}

//add neck
function drawNeck() {
	fill(skinColor);
	rect(midX-25, 300, 50, 70, 20);
}

//add eyebrows
function drawEyebrows() {
	stroke(0);
	strokeWeight(4);
	noFill();
	//left
	arc(midX-40, 215, 40, 10, PI, TWO_PI,OPEN);
	//right
	arc(midX+40, 215, 40, 10, PI, TWO_PI,OPEN);
}
//add eyes 
function drawEyes() {
	stroke(0);
	strokeWeight(2);
	noFill();
	//top lines left than right
	arc(midX-40, 228, 40, 15, PI, TWO_PI,OPEN);
	arc(midX+40, 228, 40, 15, PI, TWO_PI,OPEN);
	//black circle left than right
	fill(eyeColor);
	noStroke();
	circle(midX-30, 232, 20);
	circle(midX+30, 232, 20);
	//white small circle 
	fill(255);
	circle(midX-28, 233, 5);
	circle(midX+28, 233, 5);
}

//add eyelashes
function drawEyelashes() {
	stroke(0);
	strokeWeight(2);
	noFill();
	//left
	line(193, 224, 188, 220);
	line(189, 228, 183, 224);
	//right
	line(width-193, 224, width-188, 220);
	line(width-189, 228, width-183, 224);
}

//add nose 
function drawNose() {
	arc(midX, 259, 12, 10, HALF_PI-QUARTER_PI/2, HALF_PI+PI, OPEN);
}

//add mouth
function drawMouth() {
	fill(0);
	noStroke();
	arc(midX, 275, 50, 35, 0, PI);
}

//add teeth
function drawTeeth() {
	fill(255);
	noStroke();
	rect(midX-12, 275, 24, 7, 2);

	strokeWeight(1);
	fill(0);
	stroke(0);
	line(midX, 275, midX, 282);
	line(midX+6, 275, midX+6, 282);
	line(midX-6, 275, midX-6, 282);
}

//add tongue
function drawTongue() {
	noStroke();
	fill(tongueColor);
	ellipse(midX, 290, 16, 7);
}

//add shirt
function drawShirt() {
	fill(shirtColor);
	rect(midX-150, 355, 300, 300, 80);
}
