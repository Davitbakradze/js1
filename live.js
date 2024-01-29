/** @format */

//დავალება 1
function isDivisibleByThree(number) {
  return number % 3 === 0;
}

console.log(isDivisibleByThree(10));

//დავალება 2

function getCurrencySymbolFromCode(amountOfMoney) {
  if (amountOfMoney === "USD") {
    return "$";
  } else if (amountOfMoney === "EUR") {
    return "€";
  } else if (amountOfMoney === "GEL") {
    return "ლ";
  } else {
    return "Error";
  }
}

console.log(getCurrencySymbolFromCode("USD"));
console.log(getCurrencySymbolFromCode("EUR"));
console.log(getCurrencySymbolFromCode("GEL"));
console.log(getCurrencySymbolFromCode("RUb"));

//დავალება 3

function convertToUpperCase(lowercaseString) {
  return lowercaseString.toUpperCase();
}

let lowercaseString = "my name is joe";
let uppercaseString = convertToUpperCase(lowercaseString);

console.log(uppercaseString);

//დავალება 4

function profit(money, percentage) {
  return `თქვენი მოგებაა ${money} ₾, ის შეადგეანს ასაღები ფასის ${percentage}%-ს`;
}

let groundPrice = 10;
let sellPrice = 12;

let money = sellPrice - groundPrice;
let percentage = (money / groundPrice) * 100;

console.log(profit(money, percentage));

//თქვენი მოგებაა 2 ₾, ის შეადგეანს ასაღები ფასის 20%-ს

//დავალება 5
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let oddNumber = numbersArray.filter((number) => number % 2 === 0);
console.log(oddNumber);

//[ 2, 4, 6, 8, 10, 12 ]

//დავალება 6

let consumerInfo = [
  { name: "john", age: 16, address: "New York, NY" },
  { name: "maria", age: 36, address: "New York, NY" },
  { name: "nicholas", age: 25, address: "New York, NY" },
];

let secondElement = consumerInfo.find((element, index) => index === 1);

if (secondElement) {
  let secondElementName = secondElement.name;
  console.log("Name of the second element:", secondElementName);
} else {
  console.log("Second element not found");
}
