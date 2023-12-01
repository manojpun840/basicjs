const buttonElement = document.querySelector(".js-button");
// console.log(buttonElement);
//addEventListener takes two parameter 1)event and 2)function we want to run.Also addEventListeners allows us to add multiple event listeners.It is better to use addEventListener instead of onclick.
buttonElement.addEventListener("click", () => {
    console.log("click");
})
buttonElement.addEventListener("click", () => {
    console.log("click2");
})

document.body.addEventListener("keydown",(event) => {
    console.log(event.key);
})