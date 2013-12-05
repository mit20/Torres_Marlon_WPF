// Marlon Torres - December 5, 2013 - Web Programming Fundamentals - Discounts Problem

// Calculate the discounted price for an item. Create an expression that will calculate the discounted price with
// and without sales tax. (It is acceptable for the result to have more than two digits after the decimal. $345.896 for example.)

var originalPrice = 20; // Original price of item.
var discountPercentage = .9; //Discount of 10%. I'm not sure how to show or calculate with the number 10 so I used .9 instead.
var item = "Nerf Gun"; //Defining item as a variable.
var salesTax = 1.07; //Sales tax of 7%
var withTax = (originalPrice * discountPercentage) * salesTax; //expression calculates the Original price times the discount, to add the sales tax you have to multiply it by 1.07.
var withOuttax = (originalPrice * discountPercentage); //this expression calculates the original price with a 10% discounts by multiplying it by .9.

console.log("Your"+ " " + item + " was originally $" + originalPrice + ", but after a" + " " + discountPercentage + "% discount, it is now $" + withOuttax + " " + "without tax, and $" + withTax + " " + "with tax.") //prints out to console.
