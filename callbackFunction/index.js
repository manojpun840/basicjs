//Callback:
//Calling a function inside another function is called callback function. 
function one (call_two){
    console.log("This is 1.Please call 2");
    call_two();
}

function two(){
    console.log("This is 2.");
}

one(two);