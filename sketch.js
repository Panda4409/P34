//Create variables here
var dog;
var dog2;
var database; 
var foodStock;
var foodStock2;


function preload()
{
	//load images here
	dog.loadImg("dog.png");
	dog2.loadImg("dog2.png");
}

function setup() {
	createCanvas(500, 500);
	var dog = createSprite(55, 465, 20, 20);
	dog.addImage("dog.png");
	database = 
	foodStock2 = database.ref("Food");
	foodStock2.on("value", readStock);
  
}


function draw() {  
	background(46, 139, 87);

	if (keyWentDown(UP_ARROW)) {
		writeStock(foodStock);
		dog.addImage(dog2);
	}

	text("Note: Press up arrow key to feed Cookie milk!", 475, 48);

  drawSprites();
  //add styles here
	textSize = 10;
	fill(purple);
	stroke(white)
}

function readStock(data) {
	foodStock = data.val();
}

function writeStock(x) {
	if (x <= 0) {
		x = 0;
	}
	else {
		x = x - 1;
    }

	database.ref("/").update({
		Food:x
    })
}


