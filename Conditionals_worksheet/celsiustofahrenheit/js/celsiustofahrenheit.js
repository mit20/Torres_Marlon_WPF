//Marlon Torres - December 11, 2013 - Web Programming Fundamentals - Celsius to Fahrenheit converter.

//Convert a temperature to either degrees Celsius or degrees Fahrenheit depending on what the user has entered. If the
//user puts a “C” for the unit, the calculator should convert to Celsius. If the user puts “F” for the unit, the
//calculator should convert to Fahrenheit.


var temp = prompt("Enter temperature:");//Requests actual temperature that user wants converted.
var celOrFahren = prompt("Enter C or F.");//Requests the letter C for Celsius or F for Fahrenheit.

//If the temperature is in celsius(c) then it converts to fahrenheit, otherwise it will convert to celsius.
if(celOrFahren == "c"){
    //Converts celsius to fahrenheit.
    var cel=parseFloat(temp)*(9/5)+32;
    console.log("The temperature is " +cel+ " degrees Fahrenheit.");//prints to console
}else {
    //Converts from fahrenheit to celsius if f was entered.
    var cel=(parseFloat(temp)-32)*(5/9);
    console.log("The temperature is " + cel + " degrees Celsius.")//prints to console
}
