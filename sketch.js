
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var paper_ball ;
var bar;
var ground;
var dustbin;

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
  world = engine.world;


  paper_ball = new Ball(100,350,40);
  ground = new Rect(650,680,1300,30,);
  bar = new Log(1000,660,200,20);
  dustbin = new Img(1000,600,20);


  var render = Render.create({

    element:document.body,
    engine:engine,
    options:{
      width:1200,
      height:700,
      wireframe:false

    }
  });

  keyPressed();

  Render.run(render);
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("white");

  ground.display();
  paper_ball.display();
  bar.display();
  dustbin.display();


}

function keyPressed() {
  if (keyCode == UP_ARROW) {

   Matter.Body.applyForce(paper_ball.body,paper_ball.body.position,{x:320,y:-205});
     
   }
 }