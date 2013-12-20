//Marlon Torres - December 12, 2013 - Web Programming Fundamentals - Conditional - Personal
//You will create three separate projects, each a set of files and folders. Each set will be a calculator that collects
//information from the user with prompts, calculates some sort of useful result with that information and print a result
//to the console.
//Personal: The first set should be something personal to you. Some examples

//This problem will help you decide if it is better for you to move to Atlanta or Miami based on employment opportunity.

//variables (givens) move, empOp and emOpMia)


var move =prompt("Where do you plan on moving to? Atlanta or Miami?", " ");//prompts user with question, user must enter Atlanta or Miami.

if(move == "Atlanta"){//If statement compares users input to Atlanta if answer is Atlanta then prompts user to ask if next question.
    var empOp = prompt("Are there better employment opportunities in Atlanta than Miami? yes/no", " ");//prompts question
    if(empOp == "yes"){//if statement - if user answers yes then they should move to Atlanta.
        console.log("You should move to Atlanta.");//prints to console.
    }else if(empOp == "no"){//else if statement, in case user enters no then they're told to move to Miami.
        console.log("You should move to Miami.");//prints to console.
    }
}else if(move == "Miami"){//else if statment for when user enters Miami.
    var empOpMia = prompt("Are there better employment opportunities in Miami than Atlanta? yes/no");//prompts question.
    if(empOpMia == "yes")//if statement for when the user enters "yes" it then delivers message below.
    console.log("You should move to Miami.");//prints to console
    }if(empOpMia == "no"){//if statement
    console.log("Maybe Atlanta has better opportunities.");//prints to console.

}else{//else statement in case user enters something other than yes or no.
    console.log("Invalid answer! You must enter yes or no.");//prints to console.
}
