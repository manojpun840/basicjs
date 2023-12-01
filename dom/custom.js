// document.body.innerHTML="Manoj";
// document.title="Changed";   

//document.body is a very special property.This will literally get body html element and put it inside our JS.
// console.log(document.body);

//The document object or DOM combines JS and HTML together and it gives JS control of the webpage.

//Important thing to note is that when our html element is inside our JS then an HTML element is converted into a JS object.For eg:
// console.log(typeof document.body);

//innerHTML controls all the HTML inside the body element that's why its called innerHTML.
// console.log(document.body.innerHTML);
// document.body.innerHTML = "changed";//So this will replace all the html inside the body with a text changed.We can confirm this by:
// console.log(document.body);//This shows that innerHTML gives us control of all the HTML inside the body.
// //Another feature of innerHTML is we can replace the above HTML of with new HTML code,not just text,instead of text we can replace with button.
// document.body.innerHTML = "<button>Hello</button>";

//We learnt that document.body let us get the body element and put it inside our JS while document.queryselector() lets us get any element from the page and put it inside our JS.
// document.querySelector("button")//Between these brackets we gonna put string.This string tells JS which HTML element to get from the page.This will get the first button element from the page and put it inside our JS.
// console.log(document.querySelector("button"));
// console.log(document.querySelector("button").innerHTML);//Here .innerHTML gives us the HTML inside the button.
// document.querySelector("button").innerHTML="changed";//Here .innerHTML changes the HTML inside the button(Hello) to changed.

//Note document the queryselector only gets the first button so to get the second button we have to give class attribute.
// console.log(document.querySelector(".js-button"));

//We know html element inside JS are objects and since objects are values we can save it in variable.
// const buttonElement = document.querySelector(".js-button");
// console.log(buttonElement);

//Onclick is an HTML attribute which runs some JS when we click an element.
//HTML has another attribute call onkeydown which runs some js when we press a key down on our keyboard.
//clicks,keydowns are events.
//While onclick and onkeydown are event listeners.They check for some events and runs some js when those events happen.
//There are other event listeners like onscroll,onmouseenter etc 