// Marlon Torres - December 6, 2013 - Web Programming Fundamentals - Expressions Personal Problem
// I created this problem to calculate the amount of water a pool uses depending on the width, length and depth of a pool.

alert("We are calculating how many gallons of water your pool uses.");//This will let the user know what we are calculating in the browser.

var width = prompt("Enter the width of your pool:");//This is the width variable that will prompt the user to enter it.
console.log("Width entered")//Prints to console and shows "Width entered"
console.log(width);//Prints to console the actual width that was entered.
var length = prompt("Enter the length of your pool:");//This is the length variable that will prompt the user to enter it.
console.log("Length entered")//Prints to console and shows "Length entered"
console.log(length);//Prints to console the actual length that was entered.
var depth = prompt("Enter the depth of your pool:");//This is the depth variable that will prompt the user to enter it.
console.log("Depth entered")//Prints to console and shows "Depth entered"
console.log(depth);//Prints to console the actual depth that was entered.
var cubicFeet = width * length * depth;//Forumula for figuring out the cubic feet.
var gallons = cubicFeet * 7.47;//Formula for calculating how many gallons of water is need for X amount of cubic feet.
alert("Based on the information you have entered, \nyour pool is" + " " + cubicFeet + " " + "cubic feet and uses" + " " + gallons + " " +"gallons of water.");
console.log("Cubic feet of pool")//Prints to console and shows "Cubic feet of pool"
console.log(cubicFeet);//Prints to console the actual cubic feet that was calculated.
