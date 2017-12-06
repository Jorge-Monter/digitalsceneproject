penColor("black");
dot(2000);
drawAllAsteroids();
drawAllMoons();
drawUFO();

//Function draws multiple asteroids
function drawAllAsteroids(){
  for (var i = 0; i < 5; i++){
  penUp();
  moveTo(randomNumber(1,300),randomNumber(1,400));
  drawPinkAsteroid();
  drawBlueAsteroid();
}}

// Function draws an asteroid
function drawPinkAsteroid(){
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

function drawBlueAsteroid(){
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


function drawTail() {
  penColor(rgb(76,219,255,0.7));
  penWidth(15);
  turnTo(305);
  arcLeft(30,300);
  penUp();
}
