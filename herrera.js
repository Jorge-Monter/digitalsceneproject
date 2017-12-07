dot(300);
penUp();
drawAllStars();
drawNebula();
drawAllAsteroids();
drawAllMoons();
drawBigPlanet();
drawUFOS();

// Hugo: draw all moons
function drawAllMoons() {
  for (var i = 0; i < 5;i++){
    moveTo(randomNumber(0,320),randomNumber(0,320));
    drawMoon();
    penUp();
  }
}

//Hugo: draw Moon
function drawMoon() {
  penColor(rgb(190,190,200));
  for (var i = 0; i < 3;i++){
  dot(randomNumber(12,15));
  turnLeft(randomNumber(1,90));
  }
  drawCraters();
}

//Hugo: draw moon craters
  function drawCraters() {
  moveForward(5);
  penColor("gray");
  dot(5);
  turnRight(120);
  moveForward(10);
  dot(4);
  turnRight();
  moveForward(9);
  dot(3);
   }
// Hugo: draw nebula clouds
function drawNebula() {
  penUp();
  for(var i = 0; i < 100;i++) {
  drawPurpleCloud();
  drawBlueCloud();
  drawGoldCloud();
  }
}

  //Hugo: draw purple cloud
  function drawPurpleCloud() {
  penColor(rgb(237,9,218,0.2));
  moveTo(randomNumber(0,319),randomNumber(0,420));
  dot(10);
  }
  //Hugo: draw blue cloud
  function drawBlueCloud() {
  penColor(rgb(0,75,190,0.3));
  turnRight(120);
  moveForward(10);
  dot(10);
  }
 //Hugo: draw gold cloud
 function drawGoldCloud() {
  penColor(rgb(100,140,0,0.2));
  turnRight();
  moveForward(10);
  dot(10);
  }

//Jorge: Function draws all asteroids
function drawAllAsteroids(){
  for (var i = 0; i < 3; i++){
  penUp();
  moveTo(randomNumber(40,300),randomNumber(40,300));
  drawBlueAsteroid();
  drawPowderBlueAsteroid();
}}

//Jorge: Function draws a single blue asteroid
function drawBlueAsteroid(){
  penDown();
  penWidth(5);
  penColor("blue");
  turnTo(98);
  drawHead();
  drawTail();
}
//Jorge: Function draws a single powder blue asteroid
function drawPowderBlueAsteroid(){
    penDown();
  penWidth(5);
  penColor(rgb(76,219,255));
  turnTo(98);
  drawHead();
  drawTail();
}

function drawHead() {
  moveForward();
  turnRight(40);
  moveForward();
  turnRight(130);
  moveForward();
  turnRight(50);
  moveForward();
}

//Jorge: Function draws the asteroids tail
function drawTail() {
  penColor(rgb(76,219,255,0.7));
  penWidth(15);
  turnTo(305);
  arcLeft(30,300);
  penUp();
}

//Jorge: Function draws multiple UFOS
function drawUFOS(){
  for (var i = 0; i < 3; i++){
    drawUFO();
  }
}

//Jorge: Function draws a single UFO
function drawUFO(){
  penUp();
  drawUFOBody();
  drawUFOLights();
}
function drawUFOBody() {
  penColor("gray");
  turnTo(90);
  moveTo(randomNumber(100,260),randomNumber(100,300));
  dot(10);
}
function drawUFOLights() {
  penColor("red");
  dot(3);
  moveForward(10);
  penColor("yellow");
  dot(3);
  moveBackward(20);
  penColor("green");
  dot(3);
}

//Madison: draw stars
function drawAllStars() {
  for (var i = 0; i < 300; i++){
    drawStar();
  }
}

//Madison: draw star
function drawStar(){
  penColor(rgb(255,255,255,0.2));
  moveTo(randomNumber(20,300),randomNumber(20,420));
  penDown();
  dot(1);
  penUp();
}

//Madison: draw purple planet
function drawBigPlanet() {
  penColor(rgb(110,0,165));
  penWidth(160);
  turnTo(360);
  moveTo(260,450);
  penDown();
  arcRight(75,100);
  drawAurora();
}
//Hugo: draw aurora
  function drawAurora() {
  penUp();
  penColor(rgb(195,90,250,0.5));
  penWidth(10);
  turnTo(360);
  moveTo(180,450);
  penDown();
  arcRight(80,180);
  }
