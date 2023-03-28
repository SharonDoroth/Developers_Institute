Daily Challenge

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0,1);
fruits.sort();
fruits.push("kiwi");
let newFruits = fruits.filter( fruit => fruit !=="Apples");
newFruits.reverse();
console.log(newFruits);

Daily Challenge 2

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0]);