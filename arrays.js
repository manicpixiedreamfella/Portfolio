// ____________Creating A List______________________________________________
//first create a variable
//then put the values inside square brackets and separate them with commas
let favFilms = [
    "The VVitch",
    "Everything Everywhere All At Once",
    "Scott Pilgrim VS The World",
    "The Spongebob Movie",
    "Coraline"
]

console.log(favFilms)

console.log(favFilms[0])
//here we will only print the first item in the list
//because the first item will always have an index of 0

favFilms[0] = "Skinamarink"
//here we UPDATED the list by saying index 0 should be skinamarink instead of The VVitch
console.log(favFilms)

//___________METHODS VS PROPERTIES___________
//methods are used to manipulate data
//properties give us information about data
//___________________________________________

console.log(favFilms.length)
//.length is a PROPERTY that tells us the number of items in an array

console.log(favFilms[0, 1, 2, 3].length)
//this way we can count the length of the CHARACERS of specified items in the list

console.log(favFilms.pop())
//this gets rid of the last item in the list

console.log(favFilms.push("Hocus Pocus"))
//this ADDs a NEW item to the end of an array

console.log(favFilms)

console.log(favFilms.shift()) 
//SHIFT removes the first index in a list and adjusts the index of each other item accordungly
//so it will remove skinamarink and EEAAO will become index 0 instead

console.log(favFilms.unshift("The Babadook"))
//UNSHIFT adds a new value to the start of the list and makes it index 0

console.log(favFilms.splice(2, 0, "The Craft", "It Follows"))
//SPLICE adds new items to a specified area withiin the list, and can delete or not delete other items
//the FIRST parameter "2" is the INDEX where the new item(s) will be added
//the SECOND parameter is the amount of items to be deleted. ) will not delete any

//we can also use SPLICE to REMOVE elements from anarray like so:
//console.log(favFilms.splice(0, 1))
//0 selects the index of 0 in the list (the first item) and 1 is the amount of items to be added
//however, since the brackets are empty, nothing is added to the list, essentially deleting the first item

console.log(favFilms)

console.log(favFilms.slice(3, 5))
//SLICE will print a SECtION of the array, startng from the specified index
//so since it starts at the index of 3, it will only print elements from index 3 and after

console.log(favFilms.map)


console.log(favFilms)

//_________________Activity5_______________________________________________________________

favSongs = [
    ""
]