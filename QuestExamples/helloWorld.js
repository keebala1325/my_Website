console.log("Hello, World!");
let myBestFriend = "Karthika";
//let funFact = myBestFriend + " is my sister";
let funFact = `${myBestFriend} is my sister`;
console.log(funFact);
let exampleVariable =null;
console.log(typeof exampleVariable)
let example2 = 43;
console.log(typeof example2);

const str = "I am learning JavaScript.";
let output = str.indexOf("Javascript"); //it is JavaScript not Javascript, hence -1
console.log(output);

//let result = prompt("Enter a number:");
//console.log("You entered: " + result);

let character = "d";
console.log(character.charCodeAt(0));


let symbol = "!";
console.log(symbol.charCodeAt(0));  // 33

console.log(String.fromCharCode(66));//B

let input = "Java is fun";
let result = input.slice(0,5)
console.log(result);

let message = "Hello, world!";
let world = message.slice(7);
console.log(world);  //world

let message1 = "JavaScript is fun!";
let lastWord = message1.slice(-4);
console.log(lastWord);  // fun!

let message2 = "I love JavaScript!";
let language = message2.slice(7, 17);
console.log(language);  // JavaScript

let text = "JavaScript is awesome!";
let finalOutput = text.slice(0, 9);
console.log(finalOutput);

let sentence = "Learning JavaScript is fun!";
let extracted = sentence.slice(9, -5);
console.log(extracted);

//trim white space
let sampleMessage = "   Hello!   ";
console.log(sampleMessage);
console.log(sampleMessage.trim());
console.log(sampleMessage.trimEnd());
console.log(sampleMessage.trimStart());

let repeatMethod = "ha";
console.log(repeatMethod.repeat(3));

let text1 = " they love as they are so nice";
const result2 = text1.replace("they","he");
const result3 = text1.replaceAll("they","he");
console.log(result2);
console.log(result3);

let phrase = "freeCodeCamp is awesome!";
let updatedPhrase = phrase.replace("freecodecamp", "fCC");

console.log(updatedPhrase);

let result5 = "*".repeat(3);
console.log(result5);
let result6 = "*".repeat(0);
console.log(result6);