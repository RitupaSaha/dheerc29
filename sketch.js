const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var platform1;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(400,)
  platform1 = new Ground(600,560,1200,20);
}

function draw() {
  background(255,255,255);  
platform1.display();




  drawSprites();
}