//Marlon Torres - December 14, 2013 - Web Programming Fundamentals - Functions Worksheet
//Calculate the circumference of a circle.

var total = circumference(30);//function is invoked here. This is where the parameters are held. 30 is passed into
//function (diameter). Variable total stores what is sent from calcCircum.
function circumference(diameter){ //diameter variable stores the value that is passed in.
    var calcCircum = diameter * 3.14;//formula for circumference
    return calcCircum;//Used keyword return for it to Spit out this information.
}
console.log("The circumference of the circle is " + total); //prints to console.
