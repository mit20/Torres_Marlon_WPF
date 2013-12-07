// Marlon Torres - December 6, 2013 - Web Programming Fundamentals - Expressions Personal Problem
// I created this problem to calculate the amount of water a pool uses depending on the width, length and depth of a pool.

alert("We are calculating how many gallons of water your pool uses.");//This will let the user know what we are calculating in the browser.

var width = prompt("Enter the width of your pool:");//This is the width variable that will prompt the user to enter it.
var length = prompt("Enter the length of your pool:");//This is the length variable that will prompt the user to enter it.
var depth = prompt("Enter the depth of your pool:");//This is the depth variable that will prompt the user to enter it.
var cubicFeet = width * length * depth;//This expression declares and defines the variable for the formula that calculates the cubic feet.
var gallons = cubicFeet * 7.47;//This expression declares and defines the variable for the formula that calculates how many gallons of water is need for X amount of cubic feet.
var result = "Based on the information you have entered, \nyour pool is" + " " + cubicFeet + " " + "cubic feet and uses" + " " + gallons + " " +"gallons of water.";//Defines result variable and  that shows the results and shows concatenated strings.
alert(result); //Displays result to user
console.log("Width entered" + " " + width + " " + "feet");//Prints to console and shows "Width entered"

console.log("Length entered" + " " + length + " " + "feet")//Prints to console and shows "Length entered"

console.log("Depth entered" + " " + depth + " " + "feet")//Prints to console and shows "Depth entered"

console.log("Based on the information that was entered, the pool is" + " " + cubicFeet + " " + "cubic feet and uses" + " " + gallons + " " +"gallons of water.");//Prints result with explanation to console.