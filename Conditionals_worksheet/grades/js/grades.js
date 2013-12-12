//Marlon Torres - December 11, 2013 - Web Programming Fundamentals - Grade Letter Calculator

//Problem: A student earns a number grade at the conclusion of a course at Full Sail.  Determine the appropriate letter
//grade for that number using conditional statements.

numberGrade = prompt("Enter your grade as a whole number:")//Prompts user to enter their grade as a whole number.

//If the grade is greater or equal to 95 then the Letter grade is A+.
//Used the else if  with their respective conditions since I have more than one option or more than one block of code to choose from.
if(numberGrade >= 95){
    letterGrade ="A+";
}else if(numberGrade >= 90){
    letterGrade ="A";
}else if(numberGrade >= 85){
    letterGrade ="B+";
}else if(numberGrade >= 80){
    letterGrade = "B";
}else if(numberGrade >= 76){
    letterGrade = "C+";
}else if(numberGrade >= 73){
    letterGrade = "C";
}else if(numberGrade >= 70){
    letterGrade = "D";
 }else if(numberGrade < 69){
    letterGrade = "F";
}

console.log("You have a " + numberGrade + "%, which means you have earned an " + letterGrade + " in the class!");//prints to console