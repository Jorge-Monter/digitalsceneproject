drawAllMoons();
// draw all moons
function drawAllMoons() {
  for (var i = 0; i < 10;i++){
    moveTo(randomNumber(0,320),randomNumber(0,320));
    drawMoon(12);
    penUp();
  }
}
//draw Moon
function drawMoon(size) {
  penColor("powderblue");
  for (var i = 0; i < 3;i++){
  dot(size);
  turnLeft(randomNumber(1,90));
  }
  drawSpots();
}
//draw moon spots
  function drawSpots() {
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
