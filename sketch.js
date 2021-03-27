const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubberBall1, rubberBall1, rubberBall3;
var ironHide;
var stoneBlock;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
  rubberBall1= new Rubber(300,300,10);
  ironHide= new Iron(200,200,40,50);
  stoneBlock= new Stone(40,40,50,100);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubberBall1.display1();
    ironHide.display3();
    stoneBlock.display2();

    

    
 
}