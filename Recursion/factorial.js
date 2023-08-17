function factorialIterative(num) {
    if(num <= 1) return 1
    let result = 1;
    for(let i=2; i<=num; i++){
        result *= i;
    }
    return result;
}
console.log(factorialIterative(6));


function factorialRecursive(num) {
    if(num<=1) return 1
    return num * factorialRecursive(num-1);
}
console.log(factorialRecursive(6));