const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground1,ground2;
var stone1;
var slingshot;


var score=0;

//bottom
var bluebox1,bluebox2,bluebox3,bluebox4,bluebox5,bluebox6,bluebox7;
var pinkbox1,pinkbox2,pinkbox3,pinkbox4,pinkbox5;
var greenbox1,greenbox2,greenbox3;
var graybox1;

//top
var bluebox8,bluebox9,bluebox10,bluebox11,bluebox12;
var greenbox4,greenbox5,greenbox6;
var pinkbox6;



function setup() {
    engine = Engine.create();
    world = engine.world;

    createCanvas(1600,800);
    
    stone1 = new stone(100,200,70);
    slingshot = new SlingShot(stone1.body,{x:200,y:230});

    //bottom
    bluebox1 = new BlueBox(560,700,60,80);
    bluebox2 = new BlueBox(620,700,60,80);
    bluebox3 = new BlueBox(680,700,60,80);
    bluebox4 = new BlueBox(740,700,60,80);
    bluebox5 = new BlueBox(800,700,60,80);
    bluebox6 = new BlueBox(860,700,60,80);
    bluebox7 = new BlueBox(920,700,60,80);

    pinkbox1 = new PinkBox(620,650,60,80);
    pinkbox2 = new PinkBox(680,650,60,80);
    pinkbox3 = new PinkBox(740,650,60,80);
    pinkbox4 = new PinkBox(800,650,60,80);
    pinkbox5 = new PinkBox(860,650,60,80);

    greenbox1 = new GreenBox(680,600,60,80);
    greenbox2 = new GreenBox(740,600,60,80);
    greenbox3 = new GreenBox(800,600,60,80);

    graybox1 = new GrayBox(740,550,60,80);

    ground1 = new Ground(740,750,490,20);
    ground2 = new Ground(1300,420,410,20);

    //top
    bluebox8 = new BlueBox(1170,370,60,80);
    bluebox9 = new BlueBox(1230,370,60,80);
    bluebox10 = new BlueBox(1290,370,60,80);
    bluebox11 = new BlueBox(1350,370,60,80);
    bluebox12 = new BlueBox(1410,370,60,80);

    greenbox4 = new GreenBox(1230,320,60,80);
    greenbox5 = new GreenBox(1290,320,60,80);
    greenbox6 = new GreenBox(1350,320,60,80);

    pinkbox6 = new PinkBox(1290,270,60,80);
  


}

function draw() {
    Engine.update(engine);
    background(56,44,44);
    
    //bottom

    
    stone1.display();
    ground1.display();
    ground2.display();

    

    greenbox1.display();
    greenbox2.display();
    greenbox3.display();

    graybox1.display();

    pinkbox1.display();
    pinkbox2.display();
    pinkbox3.display();
    pinkbox4.display();
    pinkbox5.display();

    bluebox1.display();
    bluebox2.display();
    bluebox3.display();
    bluebox4.display();
    bluebox5.display();
    bluebox6.display();
    bluebox7.display();

    //top
    bluebox8.display();
    bluebox9.display();
    bluebox10.display();
    bluebox11.display();
    bluebox12.display();

    greenbox4.display();
    greenbox5.display();
    greenbox6.display();

    pinkbox6.display();

    

    greenbox1.score();
    greenbox2.score();
    greenbox3.score();

    graybox1.score();

    pinkbox1.score();
    pinkbox2.score();
    pinkbox3.score();
    pinkbox4.score();
    pinkbox5.score();

    bluebox1.score();
    bluebox2.score();
    bluebox3.score();
    bluebox4.score();
    bluebox5.score();
    bluebox6.score();
    bluebox7.score();

    bluebox8.score();
    bluebox9.score();
    bluebox10.score();
    bluebox11.score();
    bluebox12.score();

    greenbox4.score();
    greenbox5.score();
    greenbox6.score();

    pinkbox6.score();
    

    

    fill(162,160,142);
    textSize(40);
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",70,40);
    text("Score: "+score,750,90);

    textSize(19);
    text("Press space to get a second chance to play!",1200,750);



    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(stone1.body, {x:100,y:200})
      slingshot.attach(stone1.body);
    }
}

