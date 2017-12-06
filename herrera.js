dot(300);
drawNebula();
drawAllMoons();
drawEarth();

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

//Hugo: This is optional if you want to draw a big earth like in the image.
//It is not yet finished
function drawEarth() {
  penColor(rgb(20,100,1));
  penWidth(160);
  turnTo(360);
  moveTo(240,450);
  penDown();
  arcRight(75,100);
}
