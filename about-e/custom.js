//Basically e is an object containing information about the event which has just occured.

const clickBtn = document.querySelector(".js-button");

clickBtn.addEventListener("click",function(e){
    if(e.shiftKey){
        console.log("Shift");
    }else{
        console.log("Shift not pressed");
    }
    // console.log(e);
})