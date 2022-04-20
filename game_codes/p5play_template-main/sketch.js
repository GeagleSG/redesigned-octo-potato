var XIS
function setup() {
  createCanvas(400,400);
XIS = createSprite(200,200,20,20)
  
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    XIS.position.x=XIS.position.x +5;}
  if(keyIsDown(LEFT_ARROW)){
    XIS.position.x=XIS.position.x -5;}

    drawSprites()
}
