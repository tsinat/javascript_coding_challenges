//How do get nth Fibonacci number?

function Fibonacci(num) {
    let initial = 1,
        previous = 1;
        sum = 0;
    if(num == 0 || num == 2) {
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

let test = Fibonacci(0);
console.log('test:', test);
