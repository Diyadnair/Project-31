const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var w1,w2,w3,w4;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  var canvas = createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  //ground
  ground = createSprite(100,785,800,10);
  ground.shapeColor = "white";

  //wall
  w1 = new Ground(100,795,800,10);

  w2 = new Ground(5,400,10,800);

  w3 = new Ground(475,400,10,800);

  w4 = new Ground(280,0,800,10);

  for(var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j, 75,10));
  }
  for(var j = 15; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j, 175,10));
  }

  for(var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j, 275,10));
  }
  for(var j = 15; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j, 375,10));
  }


  for(var k = 0; k <=width; k = k +80){
    divisions.push(new Division(k,650,10, divisionHeight));
  }

  
}

function draw() {
  background(0);  
  Engine.update(engine);

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var n = 0; n<plinkos.length;n++){
    plinkos[n].display();
  }
   for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }
 
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  w1.display();
  w2.display();
  w3.display();
  w4.display();
  drawSprites();
}