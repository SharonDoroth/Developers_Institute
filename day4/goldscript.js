let sentence = ["The food was not bad, but it could have been better."]

let wordNot = sentence.indexOf("not");

let wordBad = sentence.indexOf("bad");

if (wordNot !== -1 && wordBad !== -1 && < wordBad) {
    let newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
    console.log(newSentence);
} else {
    console.log(sentence);
}