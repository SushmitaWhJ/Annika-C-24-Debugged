
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,box1,box2,box3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


    //paper = new Ball(300,200,8);  

	engine = Engine.create();
	world = engine.world;


		paper = new Ball(300,200,8);  //(bodies should be created after creating the world)

	//Create the Bodies Here.


	Engine.run(engine);
}



function draw() {
  rectMode(CENTER);
  background(0);
  
  	box1= createSprite(400,650,200,20);
	box1.shapeColor=color("yellow");

	box2= createSprite(500,610,20,100);
	box2.shapeColor=color("yellow");

	box3= createSprite(300,610,20,100);
	box3.shapeColor=color("yellow");	

	paper.display();

  drawSprites();
 
}

function keyPressed(){
Matter.Body.applyForce(paperObject.body,paper.body.position,{x:85,y:-85});
}



