var spaceShip, spaceShipImg;
var bg, bgImg;
var asteroidImg, asteroid1Img, asteroid2Img, asteroid3Img;

function preload(){
  spaceShipImg = loadImage("images/spaceship.png");
  bg = loadImage("images/bg.jpg");
}


function setup() {
  createCanvas(1400,1400);
 spaceShip = createSprite(100,300,20,20);
 spaceShip.addImage(spaceShipImg);
 spaceShip.scale = 0.2;








}

function draw() {
  background(bg);  
  drawSprites();
}