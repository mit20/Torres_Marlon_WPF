//Marlon Torres - December 11, 2013 - Web Programming Fundamentals - Tire Pressure I

//To meet maintenance standards a car’s front two tires should have the same pressure and the back two tires
//should have the same pressure.  But the front tires and the rear tires can have different pressure than each other,
//so it is not necessary for all four tires’ pressure to be the same. Create a single conditional that would determine
//if the tires of a given car are up to spec.


var tireArray =["37","37", "38", "38"];//Array for tires

//If statements that demonstrate multiple conditions using the Logical Operator &&.

if(tireArray[0] == tireArray[1] && tireArray[2] == tireArray[3]){
    console.log("The tires pass spec")//print to console
}if(tireArray[0] != tireArray[1] && tireArray[2] == tireArray[3] ){
    console.log("Get your tires checked out!");//print to console
}if (tireArray[0] == tireArray[1] && tireArray[2] != tireArray[3] ){
    console.log("Get your tires checked out!");//print to console
}









