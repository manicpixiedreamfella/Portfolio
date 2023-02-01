// cntrl forward slash to comment out or do two slashes
// console.log is the same as print in python but for javascript
//the white dot of doom means you need to save
//type node and then the file name examples.js in the terminal like so: "node examples.js" and press enter to run 
// use the up arrow key as a shortcut insteas of manually typing node filename.js each time

console.log("Hello World !");
console.log("wowzers".length);

// adding .length will utput the nukber of characters within the string, but will not print the letters themselves. It should output 7

console.log("Hello gorgeous <3 Hope ur having a nice day !".length);

//add semicolons at the end of each line;
//this is because it is professional to do, and coding outside of vscode might not automatically understand that a line has ended

console.log("heLlo".toLowerCase())

// .toLowerCase() is a method that will turn all lletters in a string to lowecase; toLowerCase is case sensitive and must be written correctly

console.log("       SLAAAAAAAAAAy        ".trim())
console.log((54).toString());
//.trim gets rid of empty spaces at edges
//.toString converts a number into a string

//_______________________VARIABLES____________________________
//let declares a value that CAN be changed
//const declares a value that CANNOT be changed
//var declares a value that Can be changed and is considered a legacy command

let i = 10;
const x = 10;
var y = 10;

//variables should have a meaningful name for readability
//for example:

let applesAmount = 10

//in javascript we use camelCase which means we capitalise the first letter of each word after the first one

let firstName = "Jack";
let age = 26;
let uniStudent = true;

firstName = "John"
// here we have assigned a new value to the varable WITHOUT "let"-- this way we UPDATE the variable later in the code
// if we had "const" instead of let, the variable will not be updated

console.log(firstName)
//here we are printing our variable, so in the terminal we will see "Jack"

//           CONCATENatION
//this is adding a string and a variable together like so:
let carModel = "Volvo";

console.log("I drive a " + carModel)

// we can add lots together too like so :

let colour = "Pink"

console.log(firstName + " drives a " + colour + " " + carModel)

//to make this easier we can use TEMPLaTE lITERAls using BACKTICK "`", "$"" and "{}"
//like so:

console.log(`${firstName} drives a ${colour} ${carModel}`)

//another example:

let myName = "jack"
let favColour = "periwinkle"
let myAge = "23"

console.log(`Hi ! I'm ${myName}, I'm ${myAge} and my favourite colour is ${favColour}`)

// MATHS PRACTICE

let a = 5
//assign the value

//a = a + 3
// reassign value to ass 3 to the original value

//console.log(a)

// the answer that prints is 8 because 5 + 3 = 8
// we can write this more simply as:

console.log(a+=3)

console.log(myName.charAt(0).toUpperCase() + myName.slice(1,myName.length).toLowerCase())
// variable.charAt(0)-- knows to use the character in position 0 and -.toUpperCase- make it uppercase.
//then variable.slice(1) selects every character including and after position 1, and.toLowerCase makes it lowercase
//the result is "Jack with a capital J and the rest in lowercase

let singSong = "a sailor went to sea sea sea"

console.log(singSong.charAt(0).toUpperCase() + singSong.slice(1,singSong.length).toLowerCase())
