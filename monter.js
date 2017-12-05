//Function draws multiple asteroids
function drawAllAsteroids(){
  for (var i = 0; i < 5; i++){
  penUp();
  moveTo(randomNumber(1,300),randomNumber(1,400));
  drawPinkAsteroid();
}}
// Function draws an asteroid
function drawPinkAsteroid(){
  penDown();
  penWidth(5);
  penColor("powderblue");
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
  penColor(rgb(239,7,173,0.7));
  penWidth(15);
  turnTo(305);
  arcLeft(30,300);
  penUp();
}
