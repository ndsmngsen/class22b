const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerimage;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {
    isStatic: true
  }

  //create player base body
  playerBase = Bodies.rectangle(300,400,40,40,options);
  World.add(world, playerBase);
  


  //create player body
  player = Bodies.rectangle(300,250,40,40,options);
  World.add(world, player);


}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  

  //show the playerbase image using image() function
  push();
  imageMode(CENTER);
  image(baseimage,playerBase.position.x, playerBase.position.y,150,150);
  pop();  

  push();
  imageMode(CENTER);
  image(playerimage,player.position.x, player.position.y,100,170);
  pop();  


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
