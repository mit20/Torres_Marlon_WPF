//Marlon Torres - December 17, 2013 - Web Programming Fundamentals - Functions Personal
//This problem allows the user to calculate how much they need to save per pay period in order to save 20% of their annual net salary.

var salaryGlobal = prompt("What is your annual net salary?", " ");//Declared variable and prompt asks user to enter their annual net salary.
var payFrequencyGlobal = prompt("How often are you paid? Enter W for weekly, B for biweekly or M for monthly.");//Declared variable and prompt asks user to enter how often they are paid.
var percentToSaveGlobal = 0.2;

function howMuchToSave(){
    var W = 52;
    var B = 26;
    var M = 12;
    if (payFrequencyGlobal == W){//If statement with condition and equality operator ==.  If Variable payFrequencyGlobal is equal to W then it will continue to perform action.
        return (salary * percentToSave) / W+ " add text here";//returns or spits out this information (calculation) out of the function.
    }else if(payFrequency == B){//Else if statment with condition and equality operator ==.  If Variable payFrequencyGlobal is equal to B then it will continue to perform action. otherwise it will move on to next process.
        return salary * percentToSave / B+ " add text here";
    }
}


