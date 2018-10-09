var animalArray = ["Dog", "Cat", "Fish", "Lizard", "Whale", "Cheetah"];


animalArray.push("elefante", "jirafa");
console.log(animalArray);

animalArray.splice(0, 2);
console.log(animalArray);

var lastIndex = animalArray.length - 1;
animalArray[lastIndex] = "last";

console.log(animalArray);