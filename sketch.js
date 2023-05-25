var ship,ship_sea;
var sea,sea_blue;


function preload(){
  ship_sea = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea_blue = loadImage("sea.png");
}

function setup(){
  createCanvas(600,400);
  
  sea = createSprite(200,100,400,20);
  sea.addImage("mar",sea_blue)
  
  
 ship = createSprite(300,200,20,20);
  ship.addAnimation("navegando",ship_sea);
 ship.scale=0.5
}

function draw() {
  background("white");
    drawSprites();

 
}
