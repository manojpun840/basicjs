const myList = document.getElementById("myList");

const fruitList = ["Banana","Mango","Grapes"];
for(let fruit of fruitList){
    let newListItem = document.createElement("li");
    newListItem.textContent = fruit;

    myList.appendChild(newListItem);
}

///Just practice

const fruits = ["Banana","Mango","Grapes"];
for(let fruit of fruits){
    console.log(fruit);
}