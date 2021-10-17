const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var canvas;
var background;
var play;
var gameState = 0;



function preload()
{
    backgroundImg = loadImage("./images/background.png")
    houseImg = loadImage("./images/house.png");
    obstacleImg = loadImage("./images/obstacle.png");
    playerImg  = loadImage("./images/player.png");
    solarImg1 = loadImage("./images/solarLight.png");
    solarImg2= loadImage("./images/solarPanel.png");
    trackImg= loadImage("./images/track.jpg");
}

function setup()
{
    canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    play = createButton("PLAY");
    play.position(width/2-100,height/2+50);
    play.size(130);
    
    player = new Player(width/2,height/2+150)

}

function draw()
{
    background(backgroundImg);
    Engine.update(engine)
    if(gameState===0)
    {
        play.mousePressed(press);
        textSize(30);
        text("HELLO!!",width/2-100,height/2-50)
        text("PRESS PLAY TO START",width/2-200,height/2);
    }
    if(gameState ===1)
    {
        image(trackImg, 0, -height * 5, width, height * 6);
        play.hide();
        player.display();
    }

  
    
}

function windowResized() 
{
    resizeCanvas(windowWidth, windowHeight);
}
  
function press()
{
    gameState = 1;
    console.log("yess")
}