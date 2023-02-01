class Garden {
    constructor(plantType, sunlightNeeds, potSize, inGreenhouse , dayOfWeek){
    plantType = this.plantType;
    sunlightNeeds = this.sunlightNeeds;
    potSize = this.potSize;
    inGreenhouse = this.inGreenhouse;
    dayOfWeek = this.dayOfWeek;
    }
    waterPlant(dayOfWeek) {
        this.lastWatered = dayOfWeek
        return `The ${this.plantType} has been watered at ${lastWatered}`
    }
}

const monstera = new Garden ("Monstera", "direct sunlight", "large", false, "Monday")
const cactus = new Garden ("Cactus", "direct", "large", true, "Friday")

class gardenFertiliser extends Garden {
    constructor(plantType, sunlightNeeds, potSize, inGreenhouse , dayOfWeek, fertiliser)
    super(plantType, sunlightNeeds, potSize, inGreenhouse , dayOfWeek) {
    fertiliser = this.lastFertiliserTime; }
        giveFertiliser(fertiliser) {
            this.lastFertiliserTime = dayOfWeek}

        

}

const miniRoses = new gardenFertiliser ("Mini Rose", "direct", "small", false, "Saturday", "June")
