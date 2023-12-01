//creating array with objects.
const items = [
    {name:"Bike", price:100},
    {name:"Car", price:20},
    {name:"TV", price:5},
    {name:"Book", price:400},
    {name:"Album", price:1000},
    {name:"Keyboard", price:500}
]
//To filter the items less than or equal to hundred.
const filteredItems = items.filter((item) => {
    return item.price <= 100;
})
console.log(items);
console.log(filteredItems);

//To show  the names and price only.
const itemsName = items.map((item) => {
    return item.name;
    // return item.price;
})
console.log(itemsName);

//To find the items
const foundItem = items.find((value) => {
    // return value.name === "Bike";
    return value.price === 500;
})
console.log(foundItem);

//.some method is used to check if at least one element in an array meets a specified condition. It returns true if at least one element in the array satisfies the condition, otherwise, it returns false.
const expensiveItems = items.some((value) => {
    // return value.price <= 1000;
    return value.price = 0;
})
console.log(expensiveItems);

//Reduce
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15





