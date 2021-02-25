const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;
var dustbin, dustbin2, dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;

	//Create the Bodies Here.
	dustbin = new Dustbin(670, 670,200,20);
	dustbin2 = new Dustbin(560, 630,20,100);
	dustbin3 = new Dustbin(770, 630,20,100);

	ground = new Ground(400,680,800,10);

	ball = new Paper(40,670,10);
    	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 dustbin.display();
 dustbin2.display();
 dustbin3.display();
 ground.display();
ball.display();
drawSprites();
keypressed();
 
}

function keypressed(){
    if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0.1,y:-0.9})
	}
}