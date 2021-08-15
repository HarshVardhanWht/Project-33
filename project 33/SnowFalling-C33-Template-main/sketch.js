function preload() {
  bg = loadImage("snow3.jpg")
  snowfall = loadImage("snow4.webp");
  snowfall1 = loadImage("snow5.webp");
} 

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(bg);
  snow1();
  drawSprites();
}
function snow1() {
  if(frameCount%80===0) {
    snow = createSprite(random(10,750),0);
    snow.addImage("fall",snowfall);
    snow.velocityY = 5;
    snow.scale = 0.1;
    }

    if(frameCount%100===0) {
      snow3 = createSprite(random(10,750),0);
      snow3.addImage("fall",snowfall1);
      snow3.velocityY = 5;
      snow3.scale = 0.1;
      }
}