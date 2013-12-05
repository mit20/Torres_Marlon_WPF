// Marlon Torres - December 4, 2013 - Web Programming Fundamentals - Slice Pizza Part 2 problem

//At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the slices have been
//divided up evenly among the guests. Assume guests get whole slices, how many whole slices will Sparky feast on?
//Example data set: 10 people, 4 pizzas and 8 slices per pizza will mean each person eats 3 slices and Sparky gets 2
//slices. (Note that this is an example, your code should work and give me the accurate results no matter what numbers
//I put in for those given variables.)

var slicesPerpizza = 10; //Defines and declares slices per pizza.
var guests = 23; //Defines and declares total amount of students at party.
var pizzasOrdered = 10; //Defines and declares total amount of pizzas ordered.
var slicesPerguest = (slicesPerpizza * pizzasOrdered) % guests;
var sparkysslices = (slicesPerguest) / guests;
console.log("Sparky got" + " " + sparkysslices + " " +"slices of pizza."); //Prints to console


