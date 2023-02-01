//______________________________________
let firstName = "Jack"

//assigning a variable with a STRING datatype

console.log(firstName)
//type node filename.js in terminal to print

let age = 5000

//assigning a NUMBER datatype to a variable

console.log(age)

let jackAge = false

//useing BOOLEAN datatype assigned to a variable

console.log(firstName.toUpperCase)
//can use DOT NOTATION to change stuff

let myArray = ["strawberry", "cherry", "rasperry" ]

console.log(myArray) // print ENTIRE array
console.log(myArray[0]) //prints FIRST item in array

//________________________________________
//WE CAN PUT AN ARRAY INSIDE AN ARRAY

let coffeeShop= [["latte", 2], ["Mocha", 3]]

console.log(coffeeShop[0][1]) // logs latte 2

//WE CaN PUT OBJE$CTS INSIDE ARRAYS let newArray = [{}, {{}}]

const person = {
    firstName: "Arben",
    job: "Developer"
}

let newArray = [{name: "Jenny"}, {occupation : "Developer"}]

console.log(newArray[0])