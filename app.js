const number = 9; // Replace 9 with the number you want to generate the table for

if (typeof number !== "number" || isNaN(number)) {
  console.log("Please enter a valid number.");
} else {
  console.log(`Multiplication table for ${number}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

const str = "madam"; // Replace "madam" with the string you want to check

// Remove spaces and convert the string to lowercase for case-insensitive comparison
const cleanStr = str.replace(/\s/g, "").toLowerCase();

// Reverse the string
const reversedStr = cleanStr.split("").reverse().join("");

if (cleanStr === reversedStr) {
  console.log(`'${str}' is a palindrome.`);
} else {
  console.log(`'${str}' is not a palindrome.`);
}

const centimeters = 100000; // Replace 100000 with the number of centimeters you want to convert

const kilometers = centimeters / 100000; // There are 100000 centimeters in 1 kilometer

console.log(`${centimeters} cm is equal to ${kilometers} km`);

// lkplk

const numb = 1000; // Replace 1000 with the number you want to format as currency

const formattedCurrency = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(numb);

console.log(formattedCurrency);

// kjkj

let string = "Hello world"; // Replace with your input string
const searchString = "ell"; // Replace with the search string

const index = string.indexOf(searchString);

if (index !== -1) {
  string = string.slice(0, index) + string.slice(index + searchString.length);
}

console.log(string);

// lojkosu
let inputString = "hello world"; // Replace with your input string

const words = inputString.split(" ");
const capitalizedWords = [];

for (const word of words) {
  if (word.length > 0) {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedWords.push(capitalizedWord);
  } else {
    capitalizedWords.push(word); // Preserve empty strings
  }
}

const capitalizedString = capitalizedWords.join(" ");

console.log(capitalizedString);

// kjk
let inpString = "hello"; // Replace with your input string
let reversedString = "";

for (let i = inpString.length - 1; i >= 0; i--) {
  reversedString += inpString[i];
}

console.log(reversedString);

// ll
let inputStrin = "The QuiCk BrOwN Fox"; // Replace with your input string
let swappedString = "";

for (let i = 0; i < inputStrin.length; i++) {
  const char = inputStrin[i];
  if (char === char.toLowerCase()) {
    swappedString += char.toUpperCase();
  } else {
    swappedString += char.toLowerCase();
  }
}

console.log(swappedString);

const a = 42; // Replace with your first number
const b = 27; // Replace with your second number
const c = 18; // Replace with your third number

let smallest, middle, largest;

if (a <= b && a <= c) {
  smallest = a;
  if (b <= c) {
    middle = b;
    largest = c;
  } else {
    middle = c;
    largest = b;
  }
} else if (b <= a && b <= c) {
  smallest = b;
  if (a <= c) {
    middle = a;
    largest = c;
  } else {
    middle = c;
    largest = a;
  }
} else {
  smallest = c;
  if (a <= b) {
    middle = a;
    largest = b;
  } else {
    middle = b;
    largest = a;
  }
}

console.log(`Sorted numbers: ${smallest}, ${middle}, ${largest}`);

const inputData = "hello"; // Replace with your input

if (typeof inputData === "string") {
  console.log("1");
} else if (typeof inputData === "number") {
  console.log("2");
} else {
  console.log("3");
}

let inputStr = "An apple a day keeps the doctor away"; // Replace with your input string
let modifiedString = "";

for (let i = 0; i < inputStr.length; i++) {
  if (inputStr[i] === "a" || inputStr[i] === "A") {
    modifiedString += "*";
  } else {
    modifiedString += inputStr[i];
  }
}

console.log(modifiedString);
