function fibonacciMaster() {
    let cache = {}
    return function fibonacci(n){
        if(cache[n]){
            return cache[n];
        }
        if(n<2) return n;

        cache[n] = fibonacci(n-1) + fibonacci(n-2);

        return cache[n];
    }
}

const fastFibonacci = fibonacciMaster();
console.log(fastFibonacci(15));