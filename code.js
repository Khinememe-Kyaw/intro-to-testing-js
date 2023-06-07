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

function isVowel(input){
    if (typeof input !== 'string' || input.length !== 1) {
        return false;
    }
    else if(input.toLowerCase()=== "a" ||input.toLowerCase()=== "e" ||input.toLowerCase()=== "i" ||input.toLowerCase()=== "o" ||input.toLowerCase()==="u"){
        return true;
    }else{
        return false;
    }
}
function add(input1, input2){
    if(typeof input1 === "number" && typeof input2 ==="number") {
        return input1+ input2;
    }else{
        return NaN;
    }
}