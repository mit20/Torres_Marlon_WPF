//// Marlon Torres - December 5, 2013 - Web Programming Fundamentals - Average shopping bill


//You are budgeting your money for the year and must calculate your average weekly grocery shopping spending over the
//past five weeks. Store the past five grocery totals as a list in an array. Create an expression that will use the
// items in the array to calculate the average amount spent on groceries. Please note: there should only be one given
//for this problem set, the array holding the five weekly totals.  You should be able to access the array using the
//array access notation discussed earlier in the course.

var wkGrocerytotals = [40, 60, 35, 80, 100]; //declaring and defining variable with array.

var weeklyAVG = (wkGrocerytotals [0] + wkGrocerytotals [1] + wkGrocerytotals [2] + wkGrocerytotals [3] + wkGrocerytotals[4]) / 5;
//This variable holds the total of the weekly grocery shopping, adds them up and then divides them by 5 (last five weeks). The numbers
//in the brackets are the index numbers assigned to the item we want to access.
console.log(weeklyAVG); //prints out the anwser in the console.


