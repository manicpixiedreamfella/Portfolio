//_______________Functions !________________________________

//const holDestination = () => {
//    console.log("SLAY ! I'm going on holiday !")
//}

// we declare functions with const bc we don't want it to channge
// => is an arrow function
// inside {} is DO SOMETHING

//holDestination()

//________________________________________________

let myName = "Jack"
let drink = "water"

const smallTalk = (myName, drink) => {
    console.log(`Hi ${name}, do you want some ${drink}`)
}

smallTalk(myName, drink)

//________________________________________________

let country = [
    "Spain", 
    "Turkey",
     "Prague"
    ]
let month = [
    "January",
     "Febuary",
      "March",
      "April",
    "May",]

const holDest = (country, month) => {
    console.log(`SLAY !! We're going to ${country[1]} in ${month[2]} girlie!!!`)
}

holDest(country, month)

//________________________________________________


const multiply = (num1, num2) => {
    return num1 * num2
}

console.log(multiply(2,5))

//________________________________________________