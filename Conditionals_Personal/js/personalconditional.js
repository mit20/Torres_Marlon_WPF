//Marlon Torres - December 12, 2013 - Web Programming Fundamentals - Conditional - Personal
//You will create three separate projects, each a set of files and folders. Each set will be a calculator that collects
//information from the user with prompts, calculates some sort of useful result with that information and print a result
//to the console.
//Personal: The first set should be something personal to you. Some examples

//This problem will help you decide if it is better for you to move to Atlanta or Miami based on employment opportunity.


var move =prompt("Where do you plan on moving to? Atlanta or Miami?", " ");//prompts user with question, user must enter Atlanta or Miami.

if(move == "Atlanta"){//If statement compares users input to Atlanta if answer is Atlanta then prompts user to ask if next question.
    var empOp = prompt("Are there better employment opportunities in Atlanta than Miami? yes/no", " ");
    if(empOp == "yes"){
        console.log("You should move to Atlanta.");
    }else if(empOp == "no"){
        console.log("You should move to Miami.");
    }else{
       console.log("Invalid answer! You must enter yes or no.");
    }
}else if(move == "Miami"){
    var empOpMia = prompt("Are there better employment opportunities in Miami than Atlanta? yes/no");
    if(empOpMia == "yes")
    console.log("You should move to Miami.");
    }if(empOpMia == "no"){
    console.log("Maybe Atlanta has better opportunities.");
}else{
    console.log("Invalid answer! You must yes or no.");
}

