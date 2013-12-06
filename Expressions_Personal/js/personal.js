// Marlon Torres - December 6, 2013 - Web Programming Fundamentals - Expressions Personal Problem
// I created this problem to calculate the amount of water a pool uses depending on the width, length and depth of a pool.

alert("We are calculating how many gallons of water your pool uses.");//This will let the user know what we are calculating in the browser.

var width = prompt("Enter the width of your pool:");//This is the width variable that will prompt the user to enter it.
var length = prompt("Enter the length of your pool:");//This is the length variable that will prompt the user to enter it.
var depth = prompt("Enter the depth of your pool:");//This is the depth variable that will prompt the user to enter it.
var cubicFeet = width * length * depth;
var gallons = cubicFeet * 7.47;
alert("Based on the information you have entered, \nyour pool is" + " " + cubicFeet + " " + "cubic feet and uses" + " " + gallons + " " +"gallons of water.");
