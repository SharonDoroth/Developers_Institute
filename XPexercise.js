Exercise 1
function infoAboutMe(){
    name: 'Sharon';
    age: '27';
    hobbies: 'Dance';
}
console.log(infoAboutMe);

function infoAboutPerson(personName, personAge,personFavoriteColor){

console.log("You name is " + personName +", you are "+ personAge +" years old, your favorite color is "+ personFavoriteColor+ ".");
}
infoAboutPerson("David", 45, "blue");infoAboutPerson("Josh", 12, "yellow");

Exercise 2  
function calculateTip(){

    let bill = parseFloat(prompt("Amount of the bill:"));

    let tipPercent;
    if (bill <50) {
        tipPercent = 0.2;
    } else if (bill >= 50 && bill <= 200) {
        tipPercent = 0.15;
    } else{
        tipPercent = 0.1;
    }
    let tipAmount = bill * tipPercent;
    let totalAmount = bill + tipAmount;

    console.log("Tip amount: $" + tipAmount.toFixed(2));
    console.log("Total amount: $" + totalAmount.toFixed(2));
}
calculateTip();

Exercise 3 
function isDivisible(sharon) {
    for (let i = 0; i <= 500; i++){
        if (i % sharon === 0){
            console.log(i + " is divisible by " + sharon);
        }
    }
}
isDivisible(24);

Exercise 4

 const stock =  {
    banana: 6,
    apple: 0,
    pear: 12,
    orange: 32,
    blueberry: 0
 }
 console.log()
 const prices = {
    banana: 4,
    apple: 2,
    pear: 1,
    orange: 1.5,
    blueberry:10

};
let shoppingList = ["banana","orange","apple","blueberry"];
function myBill(){
    let total = 0;
    for(let item in shoppingList) {
        let element = shoppingList[item];
        console.log(element);
        let inStock = stock[element];
        console.log(inStock);
        if (inStock > 0){
            let itemPrice = prices[element];
            console.log(itemPrice);
            total += itemPrice;
        }
    }
    return total;
}

console.log("total=",myBill());

Exercise 5

function changeEnough (itemPrice, amountOfChange) {
    let sum = calculateSum (amountOfChange)
    if (sum > itemPrice ){
        return true
    }
    else {
        return false
    }
}

function calculateSum(arr){
let sum = 0
for (let i = 0; i < arr.length;i++){
    let coinValue
    const numberOfCoins = arr[i]
    if(i === 0){coinValue = 0.25}
    if(i === 1){coinValue = 0.10}
    if(i === 2){coinValue = 0.05}
    if(i === 3){coinValue = 0.01}
    console.log("total coins ",numberOfCoins,"that have a value of" ,coinValue)

    sum = sum + numberOfCoins * coinValue
    }  
    return sum
}
console.log(changeEnough(0.75, [0,0,20,5]))

Exercise 6 

function hotelCost(){
let isANumber = true
while (isANumber){
    answer = prompt("How long you would like to stay in our hotel?")
    if(isNaN(answer)){
        alert('Please try again')
    }
    else {
        isANumber = false
const numberOfNigths = Number(answer)
const costPerNigth = 140
const totalPrice = numberOfNigths * costPerNigth
return totalPrice
console.log('Total price:', totalPrice)
    } 
}
}
let ret = hotelCost()
console.log(ret);