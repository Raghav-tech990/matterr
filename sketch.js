
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(1600,1400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies He
	
	bobObject1=new Paper(200,450,70);
	bobObject2=new Paper(220,450,70);
	bobObject3=new Paper(240,450,70);
	bobObject4=new Paper(260,450,70);
	bobObject5=new Paper(280,450,70);
	ground1=new Ground(800,460,1600,30)
	//ground1.shapeColor="red"
	ground1=new Ground(800,650,1600,30)
	Engine.run(engine);
//  rope1=new Rope()
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



