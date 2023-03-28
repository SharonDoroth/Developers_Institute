 
Exercise1

let favoriteFood = " coffee"
let favoriteMeal = " breakfest."
console.log(`I eat ${favoriteFood} at every ${favoriteMeal});

Exercise2

const myWatchedSeries = ["black mirror", "money heist", "and "+ "the big bang theory"];
myWatchedSeries[2] = "friends";
myWatchedSeries.push("The walking dead");
myWatchedSeries.unshift("emily in paris");
myWatchedSeries.splice(1, 1);
const myWatchedSeriesSentence = `${myWatchedSeries.join(", ")}.`;
const myWatchedSeriesLength =  myWatchedSeries.length;
console.log(`I have watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`);
console.log(myWatchedSeries);
console.log(myWatchedSeries[1][2])

Exercise3
let celsiusTemp = 20.0;
let fahrenheitTemp = (celsiusTemp * 9/5) + 32; 
console.log(celsiusTemp + "°C is " + fahrenheitTemp + "°F");

Exercise4

let c;
let a = 34;
let b = 21;

console.log(a+b)

a = 2;

console.log(a+b);

Exercise5

typeof(15)
 Prediction:number
 Actual:

typeof(5.5)
 Prediction:number
 Actual:

typeof(NaN)
 Prediction:number
 Actual:
typeof("hello")
 Prediction:string
 Actual:

typeof(true)
 Prediction:boolean
 Actual:

typeof(1 != 2)
 Prediction:boolean
 Actual:

"hamburger" + "s"
 Prediction:hamburgers
 Actual:

"hamburgers" - "s"
 Prediction:NaN
Actual:

"1" + "3"
 Prediction:13
 Actual:

"1" - "3"
 Prediction:-2
 Actual:

"johnny" + 5
Prediction:johnny5
Actual:

"johnny" - 5
 Prediction:NaN
 Actual:

99 * "hello"
 Prediction:NaN
 Actual:

1 != 1
 Prediction:false
 Actual:

1 == "1"
Prediction:true
 Actual:

1 === "1"
 Prediction:false
Actual:

