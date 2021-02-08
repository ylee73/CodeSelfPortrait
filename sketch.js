
//Global Variables (color)
var hairColor;
var skinColor; 
var eyeColor;
var teethColor;
var tongueColor;
var shirtColor;

//Global Variable for debug mode
var gDugMode = true;

// Setup code goes here
function setup() {
  createCanvas(500, 500);
  //Set color variables
  hairColor = color(87,65,47);
  skinColor = color(253,228,200);
  eyeColor = color(45,34,30);
  teethColor = color(255);
  tongueColor = color(255,192,203);
  shirtColor = color(169);
 }

function draw(){
//create backgrounds
  background(250,218,221);
  if(gDugMode == true){
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
}
//text for debug
function drawDebugInfo(){
	fill(255);
	text("X:"+mouseX + " Y:"+ mouseY, 20,height-20);
}
//controle debug info display with space bar
function keyTyped(){
	if (key == ' '){
		gDugMode =!gDugMode;
	}
}

//draw hair
function drawHair(){
	noStroke();
	fill(hairColor);
	arc(250,265,240,380,QUARTER_PI+HALF_PI,QUARTER_PI,OPEN);
}

//draw face shape
function drawFace(){
	noStroke();
	fill(skinColor);
	ellipse(250,205,170,220);
}

//add bangs
function drawBangs(){
	fill(hairColor);
	//top part of bang
	arc(250,160,160,160,PI,0);
	//left bang
	arc(190,140,160,135,0,QUARTER_PI+HALF_PI);
	//right bang
	arc(315,140,120,135,QUARTER_PI,PI);
}

//add ears
function drawEars(){
	fill(skinColor)
	//left ear
	arc(width/2-170/2+5,height/2-10,30,50,QUARTER_PI,PI+HALF_PI);
	//right ear
	arc(width/2+170/2-5,height/2-10,30,50,-HALF_PI,HALF_PI+QUARTER_PI);
}

//add neck
function drawNeck(){
	fill(skinColor);
	rect(width/2-20,300,40,70,20);
}

//add eyebrows
function drawEyebrows(){
	stroke(0);
	strokeWeight(4);
	noFill();
	//left
	arc(width/2 - 40, 215, 40, 10, PI, TWO_PI,OPEN);
	//right
	arc(width/2 + 40, 215, 40, 10, PI, TWO_PI,OPEN);
}
//add eyes 
function drawEyes(){
	stroke(0);
	strokeWeight(2);
	noFill();
	//top lines left than right
	arc(width/2 - 40, 228, 40, 15, PI, TWO_PI,OPEN);
	arc(width/2 + 40, 228, 40, 15, PI, TWO_PI,OPEN);
	//black circle left than right
	fill(eyeColor);
	noStroke();
	circle(width/2-30,232,20);
	circle(width/2+30,232,20);
	//white small circle 
	fill(255);
	circle(width/2-28,233,5);
	circle(width/2+28,233,5);
}

//add eyelashes
function drawEyelashes(){
	stroke(0);
	strokeWeight(2);
	noFill();
	//left
	line(193,224,188,220);
	line(189,228,183,224);
	//right
	line(width-193,224,width-188,220);
	line(width-189,228,width-183,224);
}

//add nose 
function drawNose(){
	arc(width/2,259,12,10,HALF_PI-QUARTER_PI/2,HALF_PI+PI,OPEN);
}

//add mouth
function drawMouth(){
	fill(0);
	noStroke();
	arc(width/2,275,50,35,0,PI);
}

//add teeth
function drawTeeth(){

}

//add tongue
function drawTongue(){

}

//add shirt
function drawShirt(){

}



