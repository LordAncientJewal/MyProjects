//let create some variales to use in this Code
var boy = false;
var girl = false;
var girlAge = 20;
var boyAge = 30;

var ages = [22, 32];
function onStart() {
  console.log("DataBase is running!!");
}
onStart();

function onCreate(getAge) {
  return this.getAge = ages;
}
ages.push(40);
console.log(ages);
//creating a if statement to return true or false;
//Create a Car Engine using if statements
var engineStart = true;
var engineOff = true;
var engineSpeed = 45;

function drive(paddel) {
  this.paddel = engineStart;
  if(paddel === true) {
    return true;
  }
  return false;
}
engineStart = drive();

//Turning the engine off.!!
function driveStop(brake) {
this.brake = engineOff;
if(engineSpeed <= 3.5) {
  return true + " Your engine is off!";
}
  return false + " Your engine is not off!";
}
engineSpeed = driveStop();