//this actually refers to depends on how and where it is used in your code. 

// Object Method:
// Inside an object method, this refers to the object that contains the method.
const person = {
    name: 'John',
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
person.greet(); // 'this' refers to the 'person' object

// Constructor Function:
// When you use a constructor function to create objects, this refers to the newly created instance.
function Person(name) {
    this.name = name;
  }
  
const john = new Person('John');
console.log(john.name); // 'this' refers to the 'john' object

// Event Handlers:
// In event handlers, this often refers to the DOM element that triggered the event.
document.getElementById('myButton').addEventListener('click', function() {
    console.log(this); // Refers to the button element
});



// Arrow Functions:
// Arrow functions do not have their own this. They inherit the this from the surrounding code.
const person1 = {
    name: 'John',
    greet: () => {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
person1.greet(); // 'this' refers to the global context (window or global)
  
  
  