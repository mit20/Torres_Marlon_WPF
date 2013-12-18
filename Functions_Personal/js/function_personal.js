//Marlon Torres - December 17, 2013 - Web Programming Fundamentals - Functions Personal
//This problem allows the user to calculate how much they need to save per pay period in order to save 20% of their annual net salary.

var salaryGlobal = prompt("What is your annual net salary?", " ");//Declared variable and prompt asks user to enter their annual net salary.
var payFrequencyGlobal = prompt("How often are you paid? Enter W for weekly, B for biweekly or M for monthly.");//Declared variable and prompt asks user to enter how often they are paid.
var percentToSaveGlobal = 0.2;

function howMuchToSave(salary, payFrequency, percentToSave){//function named howMuchToSave with parameters inside the parenthesis.
    var W = 52;//variable W is for weeks, so it will calculate by 52 if W is inputted.
    var B = 26;//variable B is for weeks, so it will calculate by 26 if W is inputted.
    var M = 12;//variable M is for weeks, so it will calculate by 12 if W is inputted.
    if (payFrequencyGlobal == W){//If statement with condition and equality operator ==.  If Variable payFrequencyGlobal is equal to W then it will continue to perform action.
        return (salary * percentToSave) / W+ " add text here";//returns or spits out this information (calculation) out of the function.
    }else if(payFrequency == B){//Else if statment with condition and equality operator ==.  If Variable payFrequencyGlobal is equal to B then it will continue to perform action. otherwise it will move on to next process.
        return salary * percentToSave / B+ " add text here";
    }else{//Else if statment with condition and equality operator ==.  If Variable payFrequencyGlobal is equal to M then it will continue to perform action. otherwise it will move on to next process.
        return salary * percentToSave / M+ " add text here";
    }
}

console.log(howMuchToSave(salaryGlobal,payFrequencyGlobal, percentToSaveGlobal));//Prints to console.
