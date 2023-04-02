Exercise1
let x = 10;
let y = 20;

if (x>y){
    console.log('x is bigger then y');
}
else {
    console.log('y is bigger then x');
}

Exercise2
var newDog = "Chihuahua";
let numLetters = newDog.length;
let newDog = "Chihuahua";

console.log(" The word " + newDog + " has " + numLetters + " letters.");
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
if (newDog === "Chihuahua") {
    console.log("I love Chihuahua,it's my favorite dog breed");
}
else {
    console.log("I don't care,I prefer cats");
}

Exercise3
let num = parseInt(prompt("10: "));
if (num% 2== 0) {
    console.log(num + "20");
} 
else {
    console.log(num + "30");
}

Exercise4
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if (users.length === 0) {
    console.log("no one is online");
}
else if (users.length === 1) {
    console.log(users[0] + " is online");
}
else if (users.length === 2) {
    console.log(users[0] + "and" + users[1] + " are online");
}
else {
    console.log(users[0] + ", " + users[1] + ", and " + (users.length - 2) + " more are online")
}