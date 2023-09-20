var ship, shipnav ;
var sea ;
function preload(){
  shipnav=loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png");
  seaimg=loadImage("sea.png");
} 

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,400,20);
  ship=createSprite(100,220,60,110);
  ship.scale=0.2;
  sea.scale=0.3;
  ship.addAnimation("navegar",shipnav);
  sea.addImage(seaimg);
}

function draw() {
  background("blue");
 
 
  drawSprites()
}