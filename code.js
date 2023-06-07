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
console.log(isFive(5));
console.log(isFive("5"));
console.log(isFive(6));