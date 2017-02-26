//How do get nth Fibonacci number?

// iterative Fibonacci
function FibonacciIterative(num) {
    let initial = 1,
        previous = 1;
        sum = 0;
    if(num < 2) {
        return 1;
    }
    while(num > 1) {
        sum = initial + previous;
        initial = previous;
        previous = sum;
        num--;
    }
    return sum;
}

// recursive Fibonacci
let memo = []
function Fibonacci(num) {
    if(memo[num]) {
        return memo[num];
    }
    else if(num < 2) {
        return 1;
    }
    else {
        memo[num] = Fibonacci(num - 1) + Fibonacci(num - 2);
        return memo[num];
    }
}

let testIterative = FibonacciIterative(10);
let testRecursive = Fibonacci(1200);
