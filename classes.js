//___________OBJECT ORIENTED PROGRAMMING________________________________

class Pet {
    constructor(name, age, breed, type, colour, time) {
        this.name = name;
        this.age= age;
        this.type= type;
        this.breed= breed;
        this.colour= colour;
        this.lastFed = time;
    }
    feedPet (time) {
        this.lastFed = time;
        return `Last feed updated to: ${this.lastFed} for ${this.name}`;
    }
}


const eddie = new Pet ("Eddie", 2, "dog", "American Bulldog", "white", "9:00");
console.log(eddie.feedPet("15:00"));

const goldie = new Pet ("Goldie", "2 weeks", "fish", "goldfish", "Orange", "8:00");
console.log(goldie.feedPet("12:00"))


console.log(eddie)
console.log(goldie)
console.log(mimsy)

class Student {
    constructor(name, age, eyeColour, favSubject, day){
    name = this.name;
    age = this.age;
    eyeColour = this.eyeColour;
    favSubject = this.favSubject;
    day = this.day;
    }
    workAlarm(day){
        if(this.day === "Saturday" || "Sunday")
        return("Take the day off angel x")
        else return ("Work hard bb x")
    }

}

const jenny = new Student ("Jenny", "21", "blue", "Coding", "Monday")
const jack = new Student ("Jack", 23, "brown", "science", "Saturday")

class PetMeds extends Pet {
    constructor(name, age, type, breed, colour, time, medtime){
        super(name, age, type, breed, colour, time);
        this.lastMeds = mtime;
    }
    giveMeds(time) {
        this.lastMeds = time;
        return `${this.name} has been given meds at ${this.time}`
    }
}
//^^^^^^^^^^^^^SUBCLASS
// keywords: EXTENDS (create subclass), SUPER (must be the same as original class's constructor)

const mimsy = new PetMeds ("Mimsy", 1, "rabbit", "space bunny", "multicoloured", "12:00", "14:00"); 
console.log(mimsy.feedPet("14:00"))
