var box;
var bola={
  x:200,
  y:200,
  r:100,
  vx:0,
  vy:0,
  cor:["red","green","black"]
};
function setup() {
  createCanvas(400,400);
box=createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
if(keyIsDown(RIGHT_ARROW)) {
box.position.x=box.position.x+10;
}
 circle(bola.x,bola.y,bola.r);
fill (bola.cor[2]);
drawSprites();
}




