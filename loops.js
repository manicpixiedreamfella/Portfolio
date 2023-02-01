//______________FOR LOOPS_______________________

let countries = [
    "UK",
    "Turkey",
    "US"
]

console.log(countries.push("Ireland", "Greece"))
console.log(countries)

for (let i = 0; i < countries.length; i++) {
    console.log(countries[i])
}
 //++ is for INCREMENTS- basically meaning +1
 //the above code will print each item in the list until i = the length of the list

 //so i = 0
 //when i is less than the length of the list, 
 //print the items and +1 to i
 // when i is no longer less than the length the lopp will stop

 //for (initialExpression; condition; increment/decrementExpression){do stuff}

for (let i =0; i <= 10; i++) {
    console.log(i)
}
//start at index 0, for every i less than or equal to 10, increment by 1 {then print each i}
//this will count to 10 in the terminal

let evenNumbers = []
for (let n = 0; n < 20; n++) {
    if (n % 2 == 0) {
        (evenNumbers.push(n))
    }
}

//for ODD numbers, use n % 2 != 0
console.log(`The even numbers are as follows : ${evenNumbers}`)
//create empty array called evenNumbers
// start at 0, for numbers less than 20, go up in increments of 1
//if a number is divisible by 2 with a remainer of 0, add that number to evenNumbers
//print

//__________________________________________________

let lives = 3

while (lives > 0) {
    console.log(`You have ${lives} lives remaining !`);
    lives--
}

console.log("Game Over.")

//___________________________________________________________

let diceRoll = 3

while(diceRoll != 1) {
    console.log(diceRoll)
    diceRoll = Math.floor(Math.random()*6)+1
}

// console.log(diceRoll)
//Math.floor rounds down

console.log(Math.floor(Math.random)*6)

//___________________________________________________________

let age = 3

while (age < 18) {
    console.log(age, "ThAtS a ChIlD")
    age++
    if (age > 18 && age < 30) {
    console.log(`${age} And thats an ugly pimply witch !!`)
    
    
}
}

