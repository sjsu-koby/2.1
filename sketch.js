// dogs I have met
var dogs = [{
  name: "Kira",
  color: "grey"
}, {
  name: "Kandy",
  color: "brown"
}, {
  name: "Stella",
  color: "white"
}, {
  name: "Nalla",
  color: "black"
}]

var randomIndex;

function setup() {
  createCanvas(600, 600);
  background(220);
  textSize(32)

  text("click to randomize", 50 , 50)

  setTimeout(changeBackground, 1000);
}

function draw() {

}
function changeBackground(){
background(random(255), random(255), random(255))

}
function mousePressed(){
  if(dogs[0]){
  background(random(200, 255));
  randomIndex = int(random(dogs.length));
  text(dogs[randomIndex].name, 50, 50);
  dogs.splice(randomIndex, 1);
} else {
  background(random(200, 255));
  text("nothing left!", 50, 50);
}
}
