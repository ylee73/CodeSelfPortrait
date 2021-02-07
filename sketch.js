
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
	fill(hairColor);
	arc(250,250,240,380,QUARTER_PI+HALF_PI,QUARTER_PI,OPEN);
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




