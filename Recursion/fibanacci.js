// 0 1 1 2 3 5 8 13


function fibanacciIterative(n) {
    if(n==1) return 0
    if(n==2) return 1
    let a = 0;
    let b = 1;
    for(let i=2; i<=n; i++){
        let temp = a+b;
        a = b;
        b = temp;
    }
    return b;
}
console.log(fibanacciIterative(9));


function fibanacciRecursive(n) {
    if(n<2) return n
    return fibanacciRecursive(n-1) + fibanacciRecursive(n-2)
}
console.log(fibanacciRecursive(9));