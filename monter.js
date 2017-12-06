penColor("black");
dot(2000);
drawAllAsteroids();
drawAllMoons();
drawUFOS();

//Jorge: Function draws all asteroids
function drawAllAsteroids(){
  for (var i = 0; i < 5; i++){
  penUp();
  moveTo(randomNumber(1,300),randomNumber(1,400));
  drawBlueAsteroid();
  drawPowderBlueAsteroid();
}}

//Jorge: Function draws a single blue asteroid
function drawBlueAsteroid(){
  penDown();
  penWidth(5);
  penColor("blue");
  turnTo(98);
  moveForward();
  turnRight(40);
  moveForward();
  turnRight(130);
  moveForward();
  turnRight(50);
  moveForward();
  drawTail();
}
//Jorge: Function draws a single powder blue asteroid
function drawPowderBlueAsteroid(){
    penDown();
  penWidth(5);
  penColor(rgb(76,219,255));
  turnTo(98);
  moveForward();
  turnRight(40);
  moveForward();
  turnRight(130);
  moveForward();
  turnRight(50);
  moveForward();
  drawTail();
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
penColor(rgb(130,130,130));
turnTo(90);
moveTo(randomNumber(100,260),randomNumber(100,300));
dot(10);
penColor("red");
dot(3);
moveForward(10);
penColor("yellow");
dot(3);
moveBackward(20);
penColor("green");
dot(3);
}
