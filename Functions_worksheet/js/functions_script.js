//Marlon Torres - December 14, 2013 - Web Programming Fundamentals - Functions Worksheet
//Calculate the circumference of a circle.

var total = circumference(10, 3.14); //These are the arguments. Invokes function aka function call. Where the returned
//information is stored is established here. In this case it will be stored in the variable total.

function circumference(diameter, pi){ //Parameters - storage
    var calcCircum = diameter * pi;
    return calcCircum;//return keyword will get the information out of the function. This will return the calcCircum

}

console.log("The circumference of the circle is " + total); //prints to console.


