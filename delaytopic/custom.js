//Synchronous:
//Synchronous means the code runs line by line.
console.log("I");
console.log("eat");
console.log("ice-cream");
console.log("with a");
console.log("spoon");

//Asynchronous:
//Asynchronous means the lines of code has their independent executing time.They do not wait for the lines to finish.
console.log("I");
console.log("eat");
setTimeout(() => {
    console.log("ice-cream")
},4000);
console.log("with a");
console.log("spoon");
