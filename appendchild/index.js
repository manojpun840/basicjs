const myList = document.getElementById("myList");
console.log(myList);
let newListItem = document.createElement("li");
console.log(newListItem);
newListItem.textContent="Banana";

myList.appendChild(newListItem);