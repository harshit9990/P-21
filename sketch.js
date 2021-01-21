var thikness,wall;
var bullet,weight,speed;
function setup() {
  createCanvas(1600,400);
 speed=random(55,90);
 weight=random(400,1500);
 thikness=random(22,38);
  bullet=createSprite(400, 200, 60, 40);
  bullet.velocityX= speed;
  
  wall=createSprite(1200,200,thikness,height/2);
 
}

function draw() {
  background("black");  
if (wall.x-bullet.x <(bullet.width+wall.width)/2) 
 {
 bullet.velocityX=0;
 var deformation=0.5*weight*speed*speed/22509;
 if (deformation>180) 
 {
   bullet.shapeColor=color("255,0,0");
 }  
 if(deformation<180 && deformation>100)
 {
   bullet.shapeColor=color("0,0,255");
 }
 if (deformation<100) 
 {
 bullet.shapeColor=color("0,255,0");  
 }
  }

  drawSprites();

}
