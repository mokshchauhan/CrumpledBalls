
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var side1,side2,side3;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);

	side1 = createSprite(850, height-37, 250, 15);
	side1.shapeColor="red";
	side2 = createSprite(725,height-90,15,120);
	side2.shapeColor = "red";
	side3 = createSprite(975,height-90,15,120);
	side3.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(100,600,80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ball.display();
}



