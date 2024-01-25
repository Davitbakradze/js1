//დავალება 2.1
for (let i = 0; i < 101; i++) {
  console.log(i);
}

//დავალება 2.2
let i = 0;
while (i < 51) {
    console.log(i);
    i++;
}

//დავალება 2.3
const zoo = ["cow", "zebra", "elephent", "tiger"];
zoo.push("hippo", "woolf");
console.log(zoo);

//result - [ 'cow', 'zebra', 'elephent', 'tiger', 'hippo', 'woolf' ]

zoo.pop();
console.log(zoo);
//result - [ 'cow', 'zebra', 'elephent', 'tiger', 'hippo' ]

zoo.shift();
console.log(zoo);
//result - [ 'zebra', 'elephent', 'tiger', 'hippo' ]

zoo.unshift(zoo[0]);
console.log(zoo);
//result - [ 'zebra', 'zebra', 'elephent', 'tiger', 'hippo' ]

//დავალება 2.4
let numbers = [];
for (let i = 1; i <= 10000; i++) {
  numbers.push(i * i);
}

console.log(numbers);

//დავალება 2.5
let points=[25.5, 45, 65, 23.1, 50];
let sum=0
for (let i = 0; i < points.length; i++){
  const number = points[i];
  sum = sum + number
}
console.log(sum);

//result 208.6

//დავალება 2.6
function isOdd(number) {
  return number % 2 !== 0;
}

// Example usage:
const exampleNumber = 8;
const result = isOdd(exampleNumber);

console.log(result);

//დავალება2.7
function convertToLowerCase(uppercaseString) {
  return uppercaseString.toLowerCase();
}

let uppercaseString = "MY NAME IS JOHN";
let lowercaseString = convertToLowerCase(uppercaseString);

console.log(lowercaseString);
//result "my name is john"

//დავალება 2.8
function filterEvenNumbers(array) {
  return array.filter(number => number % 2 === 0);
}

const filteredNumbers = [19, 27, 36, 43, 54, 68, 72, 81, 97, 10];
const evenNumbers = filterEvenNumbers(filteredNumbers);

console.log(evenNumbers);

//result - [ 36, 54, 68, 72, 10 ]
