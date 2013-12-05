// Marlon Torres - December 5, 2013 - Web Programming Fundamentals - Discounts Problem

// Calculate the discounted price for an item. Create an expression that will calculate the discounted price with
// and without sales tax. (It is acceptable for the result to have more than two digits after the decimal. $345.896 for example.)

var originalPrice = 20; // Original price of item.
var discountPercentage = .9; //Discount of 10%.
var item = "Nerf Gun"; //Defining item as a variable.
var salesTax = 1.07; //Sales tax of 7%
var withTax = (originalPrice * discountPercentage) * salesTax;
var withOuttax = (originalPrice * discountPercentage);

console.log("Your"+ " " + item + " was originally $" + originalPrice + ", but after a" + " " + discountPercentage + "% discount, it is now $" + withOuttax + " " + "without tax, and $" + withTax + " " + "with tax.")
