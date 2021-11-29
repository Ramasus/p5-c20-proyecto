var astronaut, sleep, brush, gym, eat, drink, move;
var bg;

function preload () {

  backg = loadImage ("iss.png");
  sleep = loadAnimation ("sleep.png");
  brush = loadAnimation ("brush.png");
  gym = loadAnimation ("gym11.png", "gym12.png");
  eat = loadAnimation ("eat1.png", "eat2.png");
  drink = loadAnimation ("drink1.png", "drink2.png");
  move = loadAnimation ("move.png", "move2.png");
  bath = loadAnimation ("bath1.png", "bath2.png")

}

function setup() {

  createCanvas(800,400);
  
  bg = createSprite(280, 165, 800, 400);
  bg.addImage(backg);
  bg.scale = 0.15;

  astronaut = createSprite(300, 230);
  astronaut.addAnimation("sleep", sleep);
  astronaut.scale = 0.1;

}

function draw() {

  background(255,255,255);  
  drawSprites();

  if (keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gyming", gym);
    astronaut.changeAnimation("gyming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("bath", bath);
    astronaut.changeAnimation("bath");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
}