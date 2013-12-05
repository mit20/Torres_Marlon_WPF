// Marlon Torres - December 4, 2013 - Web Programming Fundamentals - Slice Pizza Part 1 problem

//A bunch of students are having a party and somebody ordered pizza. Create an expression that calculates how much
//pizza each party-goer will get at the party.
//(Assume all pizzas have the same number of slices and that the person dividing the pizza is really precise,
//so this can be a decimal, like 3.52 slices, etc.)

var slicesPerpizza = 10;
var guests = 23;
var pizzasOrdered = 10;
var slicesPerguest = slicesPerpizza * pizzasOrdered/guests;
console.log("Each person ate" + " "+ slicesPerguest + " " + "slices of pizza at the party.");
