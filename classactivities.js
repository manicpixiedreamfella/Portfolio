//activity 1 _____________________________________

class Rental {
    constructor(storeName, adress, contactNo, filmList){
        storeName= this.storeName;
        adress= this.adress;
        contactNo= this.contactNo;
        filmList= this.filmList;
    }
}

const Test = new Rental ("Blockbusters", "Manchester", "blockbusters@gmail,com", ["The Craft", "The Lost Boys", "Fright Night", "IT", "Thee Grudge", "Nightmade On Elm Street"])

console.log(Test)
console.log(Rental)