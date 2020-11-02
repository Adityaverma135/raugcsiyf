var car;

function setup(){
  
  createCanvas(400,400)
  
  car=createSprite(200,350,20,20)
  
}
function draw(){
  background(0)
  
  car.velocityY=-2;
  
  if (keyDown("space") || touches.lenght>1000){
    car.velocityY=-6
    touches=[0]
  }
  
  drawSprites();
}