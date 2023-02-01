//_______ IF ELSE & SWITCH ___________

let animal = "dog"

console.log("Look at my pet, his name is Petty")

if (animal == "dog") {
    console.log("OMG I love dogs !")
}
else if (animal == "cat") {
    console.log("OMG I love cats !")
}
else {
    console.log("OMG EW What is that !?")
}

//_________________________________________

if (4 === "4") {
    console.log(true)
}
else{
    console.log(false)
}
// triple equals "===" checks if the value is equal to the variavle assigned value AND if it is the same DATATYPE
//this means 4 and "4" are not seen as the same value as one is a string and one is a number
// however "==" would see them as being the same value

// we can use "!=" and "!==" in the same way, checking if the values are NOT equal and if the value AND datatype are NOT equal

let myId = 23
 console.log("Hi, can I get a raspberry martini please?")
 console.log("I'll need to see some ID please.")

 if (myId <= 18) {
    console.log("Your ID is valid. Raspberry martini coming right up!")
 }

 else {
    console.log("Apologies, I'm unable to serve you at this time.")
 }

 //_________________________&&______________________________________

 let food = "crisps"
 let hunger = "peckish"

 console.log("Do you want some food babe ?")

 if (hunger == "peckish" && food == "crisps") {
    console.log("OBVI. GIVE ME THOSE CRISPS.")
 }
 else if (hunger != "peckish" && food == "crisps") {
    console.log("Yes pls angel, crisps are the reason I live x")
 }

 else if (hunger = "peckish" && food != "crisps") {
    console.log("IF ITS NOT CRISPS I DONT WANT IT")
 }

 // we can use "&&" to check if one variable AND another variable meet the conditions

 //__________________________||______________________________________

 let foodOption = "cheesecake"

 console.log("Do you want some dessert gorgeous ? x")

 if (foodOption == "cheesecake" || "icecream") {
    console.log("UMMMMM YES ??? IS GRASS GREEN ???")
 }

 else if (foodOption == "salmon" || "radioactive waste") {
    console.log("NO OMG WHY WOULD I WANT THAT ??")
 }
 else {
    console.log("No babycakes im not thhat hungry rn x")
 }

 // the double pipe "||" is for OR, which checks for two values but only one of them needs to be correct for the sttatement to be true

// _________________________________________________________________

let weather = "sunny"
let day = "weekend"

console.log("Do you wanna go for a walk girlie ?")

if (weather == "sunny" && day == "weekend" ) {
    console.log("YES !! It's such a beautiful day !")
}
else if (weather == "sunny" && day != "weekend") {
    console.log("Aww, I would if it was a weekend ! But im too tired rn.")
}

//_______________________SWITCH______________________________________________

let toppings = "pepperoni"

console.log("Do u want some pizza bestie ? xoxo")

switch(toppings) {
    case "pepperoni" :
    case "parmesan" :
    case "garlic" :
    case "BBQ" :
        console.log(`SLAY yes pls !! i love ${toppings}`)
        break
    case "sausage" :
    case "jalepenos" :
    case "ham & pineapple" :
        console.log("No bc im not rancid x")
        break
    default:
        console.log("Let's get some later bb x")
}
    
// switch can be used similar to OR but is more efficient when we have lots of variables to check
// we use "case" as OR to list each value we want to check
// each value we want to check needs a colon after it
// after each set of values we must use "break" to let the computer know that that is the end of what we want it to check for 
// default is for if none of the values apply, similar to ELSE
//___________________________________________________________________

//______________________activity 6 ________________________________________

let myNum = 15

if (myNum %3 == 0 && myNum %5 != 0) {
    console.log("fizz")
}
else if (myNum %5 == 0 && myNum %3 != 0) {
    console.log("buzz")
}
else if (myNum %3 == 0 && myNum %5 == 0) {
    console.log("fizzbuzz")
}
else {
    console.log("num")
}

//__________________activity 7______________________________________
let currentTime = 12
let workTime = 12
let homeTime = 9

if (currentTime <= workTime) {
    console.log("I'm at work rn")
}
else if (currentTime > workTime && currentTime > homeTime) {
    console.log("I'm commuting rn")
}
else {
    console.log("I'm home rn")
}

//_______________activity 8_______________________________________________

console.log("The last vowel is:")

let vowel = ""

switch(vowel){
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log(vowel.lastIndexOf(vowel))}


//_______________activity 9__________________________________

let myWord = "girafarig"

if (myWord.lastIndexOf() == myWord.indexOf()) {
    console.log(true)
}

else {
    console.log(false)
}

//_______________activity 10___________________________________________________

let num1 = 6
let num2 = 15
let total = num1 + num2

if (total %2 == 0 ) {
    console.log(`${total}`)
}

else {
    console.log(num1 * num2)
}

