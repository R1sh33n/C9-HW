var box;

function setup() {
  createCanvas(400,400);
  box=createSprite(200,200, 20, 20);
  background(51);
  

}

function draw() 
{

  if (keyIsDown(RIGHT_ARROW)){
    background("red");
  }
  
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }


  
  drawSprites();
}

