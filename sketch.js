var  Runner1, RunnerImg, Runner2;
var coin, coinImage, bombImage, bomb;
var path,pathImg;

function preload(){
  pathImg = loadImage("path.png")
  RunnerImg = loadImage("Runner1.png")

   }

function setup(){
  createCanvas(400,400,);

  path=createSprite(200,200,);
  path.addImage(pathImg);
  path.velocityY = 2;
  path.scale=1.2;

  Runner1=createSprite(200,200,);
  Runner1.addImage(RunnerImg);
  Runner1.velocityY = 2;
  Runner1.scale=0.1;
  //create sprites here
  
}

function draw() {
  background("20")

  if (path.y > 400){
    path.y = height/2;
  }

  if (Runner1.y > 400){
    Runner1.y = height/10;
  }
  
  Runner1.x = World.mouseX

drawSprites();

}
