//Marlon Torres - December 18, 2013 - Web Programming Fundamentals - Functions Industry
//Problem: Calculate how many songs will fit on a 16 gigabyte iPod.

alert("This calculator will calculate how many songs your iPod can hold based the capacity of your iPod and bit rate of your songs.");//Shows this message to user.
alert("Based on a 128 bit rate, the average song is about 4 megabytes (1 megabyte per minute of a song, for 256 bit rate its 2 megabytes per minute.");//Alerts user of bit rate information.

var gigabytes = prompt("How many gigabytes is your iPod? 8 gb, 16 gb or 32 gb? Please enter a number only.", " ");//declared and defined variable. Prompt asks user question for he/she to input.
var bitrates = prompt("What bit rates are your songs? (Enter 128 or 256)");//declared and defined variable bitrates. Prompt asks user question.
var averageSongLength =prompt("What is the average length of each of your songs (minutes)? Please enter a whole number i.e. 3, 4 or 5.", " ");
var songsPerGigabyte = 256;//variable is for songs per Gigabyte.  1024kb = 1 mb Avg. song is 4 min. so 1024/4 = 256.



