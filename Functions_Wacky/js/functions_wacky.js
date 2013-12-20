//Marlon Torres - December 19, 2013 - Web Programming Fundamentals - Functions Wacky
//Problem: You're a waiter/waitress at a restaurant. Calculate what your average tip and if its a good or bad shift in terms of tips.

var tipsGlobal = prompt("What is the number of tips you received today?", " ");//declares variable and asks user to enter amount of tips
(tipsGlobal <= 5)? alert("Wow that's pretty bad!") : alert("That's not too bad!");//conditional statement - ternary.

var moneyGlobal = prompt("What is the dollar amount you made in tips today?", " ");//declared and defined variable.  prompt asks user to enter the dollar amount they earned.
var calcTips = function (tips,money){ //function with its two parameters.
    var total =  money/tips;//variable total declared and defined.
    console.log("You averaged $" + total +" per tip today.");//Prints out to console.
    if (Number(total)<= 49){//if statement to check if total is less than or equal to 49
        alert("Anytime you make less than $50 its a bad day.");
    }



}

console.log(calcTips(tipsGlobal, moneyGlobal));//Prints to console.


