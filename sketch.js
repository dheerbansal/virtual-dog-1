var dog, happyDog, dogIMG, happyDogIMG
var database
var foodS, foodStock



function preload(){
  dogIMG = loadImage("images/dogImg.png")
  happyDogIMG = loadImage("images/dogImg1.png")
}


function setup() {
  createCanvas(500, 500);
  
  
  
  dog = createSprite(250,300,25,25);
  dog.addImage(dogIMG);
  dog.scale = 0.5;

 // database = firebase.database();

  


 

  
}


function draw() {  
background(46,139,87);
  drawSprites();
  
  //add styles here

  if(keyCode === UP_ARROW){
    writeStock(foodS);
    dog.addImage(dogHappy)
  }

  foodStock = database.ref('Food');
  foodStock.on("value",readStock)
  

  drawSprites();

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}


