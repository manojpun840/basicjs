// const function1 = function greeting(){
//     console.log("Hello");
// }
// console.log(function1);//This shows that the variable function1 contains function.
// console.log(typeof function1);
// function1();

//As long as there is a way to access function we don't need function name.This is called anonymous function which means a function without a name.
// const function1 = function (){
//     console.log("Hello");
// }
// console.log(function1);
// console.log(typeof function1);
// function1();

// greeting();//This is called hoisting which means we can call this function before we create it.Hoisting doesnot work when we create function and save it in a variable.
// function greeting(){
//     console.log("Hello");
// }
// greeting();

// const object1 = {
//     num:2,
//     fun:function (){
//         console.log("Hello");
//     }
// };
// console.log(object1.num);
// object1.fun();

// function display(param){
//     console.log(param);
// }
// display(5);//This is called passing a value into a function.

//Since function are values,we can pass function into function.
// function run(param) {
//     console.log(param);
//     param();//Because param contains function we can call it using brackets.
// }
// run(function() {
//     console.log("Hello");
// });

//setTimeout() allows us to run a function in future.
// setTimeout(function(){//setTimeout takes two parameters first one is function we want to run in future and second one is the number in milliseconds.
//     console.log("Timeout");
// },3000);//setTimeout will wait for three seconds and call this function.

// console.log("Hello");
// console.log("Hello1");
// console.log("Hello2");
// setTimeout(function(){
//     console.log("Timeout");
// },3000);//setTimeout doesnot wait for three seconds to finish.It just sets timer for three seconds and goes to next line.This is called asynchronous code means it won't wait for a line to finish before going to next line.While synchronous code means it will wait for line to finish.We have been using synchronous code.
// console.log("Next");
// console.log("Hello2");
// //Like the timer in mobile phone use the concept of asynchronous code.After setting time on mobile phone we don't wait for timer to finish instead we do other works.

// setInterval(function (){//setInterval takes the same parameter as serTimeout.It will run this function three seconds in future but this time it will keep running this function every three seconds.
//     console.log("Interval");
// },3000);//This will set the timer for three seconds and goes to the next line.
// console.log("Next line"); 

// [
//     "make dinner",
//     "watch dishes",
//     "watch youtube"
// ].forEach(function(value){//This is a forEach method and it allows us to loop through this array.
//     console.log(value);//value is a parameter and it loops through the array and for each of these values it will save the value in the parameter and run the function.
// });

// const myArray = [1,2,3,4,5];
// myArray.forEach(function(value){
//     console.log(value);
// });

// const numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers [i]);
// }

// [
//     "make dinner",
//     "manoj",
//     "pun"
// ].forEach(function(value,index){//Second parameter is the position of the value in the array
//     console.log(index);
//     console.log(value);
// })  //You can write this code using for loop.

// const arr = [
//     "make dinner",
//     "manoj",
//     "pun"
//   ];
  
//   for (let i = 0; i < arr.length; i++) {
//     console.log(i);
//     console.log(arr[i]);
//   }

[
    "make dinner",
    "manoj",
    "pun"
].forEach(function(value,index){
    if(value === "manoj"){
        return;//However this is not a good practise.If you need to use break then its better to use regular for loop.
    }
    console.log(index);
    console.log(value);
})
  




