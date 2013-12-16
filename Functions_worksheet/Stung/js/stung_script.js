//Marlon Torres - December 16, 2013 - Web Programming Fundamentals - Functions Worksheet - Stung Problem
//It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an
//animal in a function.

var animalWeight = 200;//Defines and declares the value of the variable (given).
var totalStings = beeStings(animalWeight);//Invokes function (calls it). animalWeight is an argument with the value of 200 and is passed to the function.

function beeStings(animalWeight){//function name "beeStings". Variable animalWeight is setup inside the parameter section.
    var calcBeeStings = animalWeight * 8.666666667; //calculates the animal weight by the bee stings per pound.
    return calcBeeStings;
}

console.log("It takes " + totalStings + " bee stings to kill this animal.");//prints out to console.


