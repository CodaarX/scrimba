// pushingg an itiration to an array

var myArray = []
for(i = 0; i < 9; i++){
    myArray.push(i)
}

console.log(myArray)


// -------------------------------------------------------------------------------------------------------------------

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var myArray = []
for(i = 0; i < fruit.length; i++){
   myArray.push(fruit[i])
}
console.log(myArray)



//  -------------------------------------------------------------------------------------------------------------------

var nameArray = []
var occupationArray = []
var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

for(i = 0; i < peopleArray.length; i++){
    nameArray.push(peopleArray[i].name)
    occupationArray.push(peopleArray[i].occupation)
}

console.log('names = ' + nameArray)
console.log('occupation = ' + occupationArray)



