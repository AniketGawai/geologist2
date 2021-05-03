const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, iron,rubber, hammer;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);

    stone = new Stone(200,400,100,100);
    iron = new Iron(300,400);
    rubber = new Rubber(400,400,70);
    hammer = new Hammer(10,400);


    sand1 = new Sand(505,450,20);
    sand2 = new Sand(510,450,20);
    sand3 = new Sand(515,450,20);
    sand4 = new Sand(520,450,20);
    sand5 =  new Sand(525,450,20);
    sand6 = new Sand(515,445,20);
    sand7 = new Sand(520,445,20);
    sand8 = new Sand(525,445,20);
    sand9 = new Sand(530,445,20);
    sand10 = new Sand(535,445,20);   

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

     stone.display();
     plane.display();
     hammer.display();
     iron.display();
    rubber.display();

sand1.display();
sand2.display();
sand3.display();
sand4.display();
sand5.display();
sand6.display();
sand7.display();
sand8.display();
sand9.display();
sand10.display();
}