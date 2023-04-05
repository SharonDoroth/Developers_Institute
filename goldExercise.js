let userInput = prompt("Hello","World","in","a","frame");
let words = userInput.split(",").map(word => word.trim());
let wordsArray = words;
let maxLength = Math.max(...words.map(word => word.length));

console.log("*".repeat(maxLength + 4));

words.forEach(word => {
    let spaces = " ".repeat(maxLength - word.length);
    console.log(`*${word}${spaces} *`);
});

console.log("*".repeat(maxLength + 4));