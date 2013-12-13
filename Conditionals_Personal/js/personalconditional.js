//Marlon Torres - December 12, 2013 - Web Programming Fundamentals - Conditional - Personal
//You will create three separate projects, each a set of files and folders. Each set will be a calculator that collects
//information from the user with prompts, calculates some sort of useful result with that information and print a result
//to the console.
//Personal: The first set should be something personal to you. Some examples

//This problem will help you decide if it is better for you to move to Atlanta or Miami based on employment opportunity.


var move =prompt("Where do you plan on moving to? Atlanta or Miami?", " ");

if(move == "Atlanta"){
    var empOp = prompt("Are there better employment opportunities in Atlanta? yes/no", " ");
    if(empOp == "yes"){
        console.log("You should move to Atlanta.");
    }else if(empOp == "no"){
        console.log("You should consider another city.");
    }else{
        console.log("Invalid answer! You must yes or no.");
    }
}

