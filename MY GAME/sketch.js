var scene,sceneimg;
var man,manimg;

function preload() {
sceneimg=loadAnimation("images/bg.gif");
manimg=loadAnimation("images/man.gif");

}
function setup() {
  createCanvas(1365,600);
  
 scene=createSprite(683,300,1365,600);
 scene.addAnimation("bg",sceneimg);
 scene.scale=3.5;

scene.velocityY=-1;


 man=createSprite(1000,500);
 man.addAnimation("mam",manimg)
 
}

function draw() {
  background(0); 
  if(scene.y<170){
    scene.y=200;

  }

  drawSprites();
}