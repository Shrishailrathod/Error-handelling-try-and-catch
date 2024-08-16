// Error handellinf in js 


// try catch and finally
// 
let a = prompt("Enter first number")

let b = prompt("Enter secound number")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed  in js")
}
// parseint is used to convert string into integer 
let sum = parseInt(a) + parseInt(b)

function main() {
    let x = 1;
    try {
        console.log("the sum is", sum * x)
        return true
    } catch (error) {
        console.log("Rathod error agya")
        return false
    }
    {
        console.log("Hello rathod db is closed ")
    }

}

main()
