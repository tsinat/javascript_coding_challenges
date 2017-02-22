// How would you verify a prime number?

function isPrime(number) {
    let divisor = 2;

    while(number > divisor) {
        if(number % divisor == 0) {
            return false;
        } else {
            divisor++;
        }
    }
    return true;
}

let test1 = isPrime(49);
let test2 = isPrime(17);

console.log('test1', test1);
console.log('test2', test2);
