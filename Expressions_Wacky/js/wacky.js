// Marlon Torres - December 6, 2013 - Web Programming Fundamentals - Expressions Wacky Problem

//This problem was suppose to calculate the length of a whole roof of a house and then calculate how many strings of Christmas lights you would need. It would also calculate the cost of the total amount of lights.


var leftSide = prompt("How long is the roof of the left side of the house? Enter in feet:");//Prompts user to enter the length the roof's left side.
var rightSide= prompt("How long is the roof of the right side of the house? Enter in feet:");//Prompts user to enter the length the of the roof's right side.
var front = prompt("How long is the roof of the front of the house? Enter in feet:");//Prompts user to enter the length of the front of the house.
var back = prompt("How long is the roof of the back of the house? Enter in feet:");//Prompts user to enter the length of the back of the house.
var sidesArray = new Array (leftSide, rightSide, front, back);//Declares new array with variable in it.
var lights = 12;
var total = sidesArray[0] + sidesArray[1] + sidesArray[2] + sidesArray[3] / lights;//Add variables, numbers in the bracket are they variables index number in this array.
alert("Total length of lights you'll need is" + " " + total + " " + "feet");//


console.log("The left side  is" + " "+ leftSide + "feet");//Prints to console
console.log("The right side is" + " "+ rightSide + "feet");//Prints to console
console.log("The front side is" + " "+ front + "feet");//Prints to console
console.log("The back side is" + " "+ back + "feet");//Prints to console
console.log( "The total of all sides is" + " " + total + "feet");