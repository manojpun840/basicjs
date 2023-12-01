try{
    console.log("Start the code.");
    unicycle;/*Since this line is error,it does not read the code below this line and goes to catch.*/
    console.log("After the undefined part.")
}
catch(error){/*However (error) is optional.*/
    console.log("Error has occured." + error/*This error is optional.*/);
}
finally{
    console.log("The code has been executed.");
}