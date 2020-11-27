
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(310,400);
	bobObject2 = new Bob(340, 400);
	bobObject3 = new Bob(370, 400);
	bobObject4 = new Bob(400, 400);
	bobObject5 = new Bob(430, 400);

	roof = new Roof(365,250,180,15);

	rope1 = new Rope(bobObject1.body, roof.body, -30*2, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -15*2, 0);
	rope3 = new Rope(bobObject3.body, roof.body, -0*2, 0);
	rope4 = new Rope(bobObject4.body, roof.body, 15*2, 0);
	rope5 = new Rope(bobObject5.body, roof.body, 30*2, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	roof.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	// keyPressed();

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject5.body, bobObject5.body.position, {x:10, y:-10});
	}
}

