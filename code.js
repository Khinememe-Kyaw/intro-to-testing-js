// helloWorld function 
function helloWorld() {
    console.log("Hello, World!");
    return "Hello, World!";
}
function sayHello(input) {
    if(input ==="Jane" || input === "Alex" || input ==="Pat"){
        return "Hello, " + input + "!";
    } else{
        return "Hello, World!";
    }
}
function isFive(input){
    if(input == 5){
        return true;
    }else{
        return false;
    }
}

function isEven(input){
   if (input%2===0 && input !== false){
       return true;
   }else{
       return false;
   }
}
