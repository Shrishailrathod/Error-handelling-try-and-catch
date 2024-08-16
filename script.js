// hoisting means that we can use function and variables before they are actually declared in the code

// using function

greet();

function greet(){
    console.log("Rathod")
}


// using variable
console.log(x);     //   undefined, because the declaration is hoisted, but not the initialization
var x = 20;
console.log(x)