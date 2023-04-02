/* Exercise 1
let people = ["Mary", "Greg", "James", "Devon"];
let indexMary = people.indexOf("Mary"); 


people.splice(people.indexOf("Greg"), 1);


people[people.indexOf("James")] = "Jason";


people.push("Ann");


console.log(indexMary);


let peopleCopy = people.slice(1, 3);


console.log(people.indexOf("Foo"));


let last = people[people.length - 1];

let people = ["Mary", "Greg", "Jason", "Devon"];

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}


for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Jason") {
    break;
  }
} 

Exercise 2
let colors = ['red','blue','green','black'];
for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i+1} choise is ${colors[i]}`);
} 

Exercise 3

let num;

do {
  num = prompt("Please enter a number:");
  console.log(`You entered: ${num}`);
} while (typeof num === "string" && parseInt(num) < 10);


Exercise 4

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
  };
  
  console.log(`The building has ${building.numberOfFloors} floors.`);
  
  console.log(`There are ${building.numberOfAptByFloor.firstFloor} apartments on the first floor and ${building.numberOfAptByFloor.thirdFloor} apartments on the third floor.`);
  
  const secondTenant = building.nameOfTenants[1];
  const secondTenantRooms = building.numberOfRoomsAndRent[secondTenant][0];
  console.log(`${secondTenant} has ${secondTenantRooms} rooms in their apartment.`);
  const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}

console.log(building.numberOfRoomsAndRent.dan[1]);
  
//Exercise 5

const family = {
    father: "John",
    mother: "Mary",
    son: "David",
    daughter: "Emily",
  };
  
  for (let key in family) {
    console.log(key);
  }
  
  for (let key in family) {
    console.log(family[key]);
  }
  

  //Exeecise 6

  const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  };
  
  let sentence = "";
  
  for (let key in details) {
    sentence += details[key] + " ";
  }
  
  console.log(sentence.trim());
*/  

//Exercise 7

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const firstLetters = names.map(name => name.charAt(0)); 
const sortedLetters = firstLetters.sort(); 
const societyName = sortedLetters.join(''); 

console.log(societyName); 