const Bodies = Matter.Bodies
const World = Matter.World
const Engine = Matter.Engine
const Constraint = Matter.Constraint

var engine,world

function preload() {
//preload the images here
backgroundImg = loadImage("images/GamingBackground.png");
monster1 = loadImage("images/Monster-01.png");
monster2 = loadImage("images/Monster-02.png");
hero1 = loadImage("images/Superhero-01.png");
hero2 = loadImage("images/Superhero-02.png");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine=Engine.create();
  world=engine.world
  ground= new Ground(500,490)
  hero = new Hero(400,200,50,70)
  chain = new Chain(hero.body,{x:400,y:50})
  box1 = new Box(700,50)
  box2 = new Box(700,100)
  box3 = new Box(700,100)
  box4 = new Box(700,100)
  box5 = new Box(700,100)
  box6 = new Box(700,100)
  box7 = new Box(700,100)

  box8 = new Box(600,100)
  box9 = new Box(600,100)
  box10 = new Box(600,100)
  box11 = new Box(600,100)
  box12 = new Box(600,100)
  box13 = new Box(600,100)
  box14 = new Box(600,100)
  box15 = new Box(600,100)
  
  monster= new Monster(900,100,100,100)
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  hero.display();
  ground.display();
  chain.display();
 // box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
 // box8.display();
 // box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  
  monster.display();

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})

  }
  
  