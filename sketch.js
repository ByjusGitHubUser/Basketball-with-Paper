
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left;
var right;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(400, 400, 20, ball_options);
	World.add(world, ball);
	rectMode(CENTER);
	ellipseMode(RADIUS);

	ground = new Ground(500,500,2000,20);
	left = new Ground(1000,415,20,150);
	right = new Ground(800,415,20,150);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x, ball.position.y, 20);
  ground.show();
  left.show();
  right.show();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:65,y:-65});
	}
}


