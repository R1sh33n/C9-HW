
function setup() {
  createCanvas(1590,850);
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

