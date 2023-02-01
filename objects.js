//___________Objects !____________________
let day = "Monday"

const person = {
    firstName: "Jack",
    lastName: "Hartley",
    age: 23,
    occupation: "Girlboss",
    married: false,
    homeOwner: false,
    hobbies: ["sleeping", "skipping", "socialising"]
}

if (day === "Saturday" || day === "Sunday")
console.log(`SLAY its${day}! Perfect for ${person.hobbiies[2]}`)
else {
    console.log(`Can't believe it's ${day}! Guess I'll just be a ${person.occupation}`)
}

//KEY VALUE PAIRS: KEY: "VALUE",
//objects are basically variables filled with key value pairs
//they can als ocontains functions and conditionals as well

console.log(person.firstName)

//with ARRAYS we would use [0] or [any number] to select something from in the array
//however
//with OBJECTS we use DOT NOTATION to find data: person.firstName

const pet = {
    species: "dog",
    colour: "white",
    age: "1",
    temperment: "friendly",
    knownTricks: ["sit", "lie down", "shake"],
    eating: true,
    drinking: true,
    whatDogDoing () {
        if (this.eating === true && this.drinking === true){
            return "your pet is eating and drinking"
        }
        else if (this.eating === true && this. drinking === false){
            return "Your pet is eating but not drinking"
        }
        else if (this.eating === false && this.drinking === true){
            return "Your pet is drinking but not eating"
        }
        else { 
            return "Your pet is not eating or drinking"
        }
    }
}
console.log(pet.whatDogDoing())

//we can use ARRAYS within objects

console.log("Eddie is a",pet.colour, pet.species, "with a",pet.temperment,"personality. He is",pet.age,"years old." )

pet.colour = "black"
//console.log(pet)
//we can change data inside an object like so^^

//_______________________________________________________

const client = {
    firstName: "Lelly",
    lastName: "Kelly",
    age: "40",
    homeOwner: true,
    marketingOp ( ) {
        if (this.homeOwner == false && this.age > 25){
            return "Send mortgage offer"
        }
        else if (this.homeOwner == false && this.age < 25){
            return "Send holidayy credit card offer"
        }
        else if (this.homeOwner == true && this.age >25){
            return "Send pension offer"
        }
        else {
            return "send savings offer"
        }
    }
}

console.log(client.marketingOp())

//FUNCTION WITHIN AN OBJECT >>>>>>> functionName () {}
//___________________________________________________________

const coffeeShop = {
    
}

