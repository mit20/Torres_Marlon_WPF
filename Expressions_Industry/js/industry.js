//// Marlon Torres - December 6, 2013 - Web Programming Fundamentals - Expressions Industry Problem
// This calculator will resize an image and maintain its aspect ratio.

alert("Resize your image without it affecting its aspect ratio.");//Alerts user what this calculator does.
var originalWidth = prompt("Enter the original width of your image in pixels:"); //Declares and defines originalWidth variable and prompts the user to enter the original width of the image with message in the string.
var originalHeight = prompt("Enter the original height of your image in pixels:"); //Declares and defines originalHeight variable and prompts the user to enter the original height of image with message in the string.
var newWidth = prompt("Enter the new width you desire in pixels:");  //Declares and defines newWidth variable and prompts the user to enter new width with message in the string.
var newheight = (originalWidth / originalWidth) * newWidth; //Declared and defined the newHeight variable and created formula to find new height with arithmetic operator expression.
var result = ("Therefore, your resized image is" + " " + newheight  + " " + "pixels high" + " "+ "by" + " " + newWidth + " " + "wide." );//Declared and defined result variable and added concatenating string message.
alert(result);//Alerts user of the result in browser








