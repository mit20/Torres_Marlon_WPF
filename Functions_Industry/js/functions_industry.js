//Marlon Torres - December 18, 2013 - Web Programming Fundamentals - Functions Industry
//Problem: Calculate how many songs your iPod will hold based on the capacity of your iPod and bit rate of your songs.

alert("This calculator will calculate how many songs your iPod can hold based on the capacity of your iPod and bit rate of your songs.");//Shows this message to user.
alert("Based on a 128 bit rate, the average song is about 4 megabytes (1 megabyte per minute of a song, for 256 bit rate its 2 megabytes per minute).");//Alerts user of bit rate information.
var songsGlobal = prompt("How many songs would you like to load on to your iPod?", " ");
var gigabytesGlobal = prompt("How many gigabytes is your iPod? 8 gb, 16 gb or 32 gb? Please enter a number only.", " ");//declared and defined variable. Prompt asks user question for he/she to input.
var bitrateGlobal = prompt("What bit rates are your songs? (Enter 128 or 256)");//declared and defined variable bit rate. Prompt asks user question.
if(bitrateGlobal != 128 && bitrateGlobal !=256 ){//if statement that has the Logical operator && in it.
    prompt("You must enter 128 or 256.");
}
var averageSongLengthGlobal =prompt("What is the average length of each of your songs (minutes)? Please enter a whole number i.e. 3, 4 or 5.", " ");

(bitrateGlobal == 128)? alert("Song that have 128 may not have the best sound quality, but save a lot of space"): alert("Songs that have a bit rate higher than 128 will take up more space."); //ternary with ? question mark operator.

function calcSongs(songs, averageSongLength, bitrate){ //named function that includes three parameters.

    if(bitrate == 128){//if statement (conditional statement if,else if, else).
        return mbOne = (songs * averageSongLength);//return statement. This will spit this information out.

    }else if(bitrate == 256){//else if statement.
        return mbTwo = (songs * averageSongLength)*2;//return statement. This will spit this information out.

    }else{//else statement
        return "Refresh your page to start over.";//return statement. This will spit this information out.
    }
}
console.log("If you upload " + songsGlobal + " songs, it will use " + calcSongs(songsGlobal, averageSongLengthGlobal, bitrateGlobal) + " megabytes.");//Prints to console.

var calcRemainingSpace = function (gigabytesGlobal, mbOne, mbTwo){//anonymous function.
    var oneGig = 1024;//The oneGig variable holds the value of 1024.
    if(mbOne){
        return (gigabytesGlobal * oneGig) - mbOne;//Expression that has two arithmetic operators ( * and -). This multiplies the gigabyte of the iPod multiply it by 1024 and then subtract the total from the calcSongs calculation to let you know much space you have left in your iPod.
    }if(mbTwo){
        return (gigabytesGlobal * oneGig) - mbTwo;//Expression that has two arithmetic operators ( * and -). This multiplies the gigabyte of the iPod multiply it by 1024 and then subtract the total from the calcSongs calculation to let you know much space you have left in your iPod.
    }
}
console.log("You will have " + calcRemainingSpace(gigabytesGlobal, songsGlobal) + " megabytes left on your iPod.");//prints to console.