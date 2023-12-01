// Using .includes() with Arrays:
const numbers = [1, 2, 3, 4, 5];

const hasThree = numbers.includes(3); // true
const hasTen = numbers.includes(10);   // false

// Using .includes() with Strings:
const message = "Hello, world!";

const hasHello = message.includes("Hello"); // true
const hasGoodbye = message.includes("Goodbye"); // false

// Using .includes() with an Optional fromIndex Parameter:
const fruits = ["Apple", "Banana", "Cherry", "Date", "Banana"];

const includesBanana1 = fruits.includes("Banana"); // true
const includesBanana2 = fruits.includes("Banana", 2); // true (search starts from index 2)
const includesBanana3 = fruits.includes("Banana", 3); // false (search starts from index 3)
console.log(fruits);