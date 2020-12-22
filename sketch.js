
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg;

function preload()
{
	boyImg = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground  = new Ground(width/2, 600,width,20);
	tree  = new Tree(1000,300);
	mango1 = new Mangoes(1100,100,20);
	mango2 = new Mangoes(1170,250,20)
	mango3 = new Mangoes(1100,200,20)

	mango4 = new Mangoes(1000,70,20)

	mango5 = new Mangoes(1200,250,20)

	mango6 = new Mangoes(1000,230,20)

	mango7 = new Mangoes(900,270,20)

	mango8 = new Mangoes(900,150,20)

	mango9= new Mangoes(800,250,20)

	mango10 = new Mangoes(1000,170,20);

	stone = new Stone(100,500,20);

	launcher = new Launcher(stone.body, {x:135, y:450})

	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  stone.display();
  launcher.display();

  image(boyImg,200,520,200,300)
  
hasCollided(stone,mango1);
hasCollided(stone,mango2);
hasCollided(stone,mango3);
hasCollided(stone,mango4);
hasCollided(stone,mango5);
hasCollided(stone,mango6);
hasCollided(stone,mango7);
hasCollided(stone,mango8);
//hasCollided(stone,mango9);
hasCollided(stone,mango10);
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX , y : mouseY})
}

function mouseReleased(){
	launcher.fly();
}

function  keyPressed(){


	if(keyCode === 32){
		
		launcher.attach(stone.body);
		Matter.body.setPosition(stone.body,{x:135, y:450})
	}
}

function hasCollided(s,m){

	var mPos  = m.body.position;
	var sPos  = s.body.position;

	var distance  = dist(sPos.x,sPos.y, mPos.x,mPos.y);
	console.log(distance);

	if(distance <= s.r + m.r){
		Matter.Body.setStatic(m.body, false)
	}

}






