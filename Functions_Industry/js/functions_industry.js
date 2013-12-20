//Marlon Torres - December 18, 2013 - Web Programming Fundamentals - Functions Industry
//Problem: Calculate how many songs your iPod will hold based on the capacity of your iPod and bit rate of your songs.

alert("This calculator will calculate how many songs your iPod can hold based on the capacity of your iPod and bit rate of your songs.");//Shows this message to user.
alert("Based on a 128 bit rate, the average song is about 4 megabytes (1 megabyte per minute of a song, for 256 bit rate its 2 megabytes per minute).");//Alerts user of bit rate information.
var songsGlobal = prompt("How many songs would you like to load on to your iPod?", " ");
var gigabytes = prompt("How many gigabytes is your iPod? 8 gb, 16 gb or 32 gb? Please enter a number only.", " ");//declared and defined variable. Prompt asks user question for he/she to input.
var bitrateGlobal = prompt("What bit rates are your songs? (Enter 128 or 256)");//declared and defined variable bit rate. Prompt asks user question.
var averageSongLengthGlobal =prompt("What is the average length of each of your songs (minutes)? Please enter a whole number i.e. 3, 4 or 5.", " ");
var songsPerGigabyte = 256;//variable is for songs per Gigabyte.  1024kb = 1 mb Avg. song is 4 min. so 1024/4 = 256.

(bitrateGlobal == 128)? alert("Song that have 128 may not have the best sound quality, but save a lot of space"): alert("Songs that have a bit rate higher than 128 will take up more space."); //ternary with ? question mark operator.

function calcSongs(songs, averageSongLength, bitrate){
    var mbOne = 1;
    var mbTwo = 2;

    if(bitrate == 128){
        return "If you upload " + songs + " songs, it will take up " + (songs * averageSongLength) * mbOne + " megabytes.";
    }else if(bitrate == 256){
        return "If you upload " + songs + " songs, it will take up " + (songs * averageSongLength) * mbTwo + " megabytes.";
    }else{
        return "You must enter 128 or 256. Refresh your page to start over.";
    }
}
console.log(calcSongs(songsGlobal, averageSongLengthGlobal, bitrateGlobal));//Prints to console.

var calcRemainingSpace = function(){//anonymous function.
    return " You have " (gigabytes * 1024) - calcSong + " megabytes remaining on your iPod.";

}
