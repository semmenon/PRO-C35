var balloon
var database, position;


function preload() {
  backgroundImg = loadImage("city.png");
  balloonImg = loadImage("balloon.png");
}

function setup() {
  database = firebase.database ()
  createCanvas(800,400);
  //balloon = createSprite(250,250,10,10);
  //balloon.shapeColor = "red";
  balloon = createSprite(200, 200, 50, 50,);
  balloon.addImage(balloonImg)

  var balloonPosition = database.ref("balloon/position")
    balloonPosition.on("value",readPosition, showError)
}

function readPosition(data){
  position = data.val()
  balloon.x = position.x
  balloon.y=position.y
}

function showError(){
  console.log("there is an error")
}
function draw() {
  background(255,255,255); 
  background(backgroundImg) 
  if(keyDown(LEFT_ARROW)){
    writePosition(-1,0);
}
else if(keyDown(RIGHT_ARROW)){
    writePosition(1,0);
}
else if(keyDown(UP_ARROW)){
    writePosition(0,-1);
}
else if(keyDown(DOWN_ARROW)){
    writePosition(0,+1);
}
drawSprites();
 /*if (keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10
  }
  if (keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x+10
  }
  if (keyDown(UP_ARROW)){
    balloon.y = balloon.y-10
  }
  if (keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+10
  }
  drawSprites();*/
}

function writePosition(x,y){
  database.ref("balloon/position").set
      ({x: position.x+x , 
      y: position.y+y
      })
}