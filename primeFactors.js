// how to find all prime factors of a number


function getPrimeFactors(number){
  let factors = [],
      divisor = 2;

  while(number > 2){
      console.log('divisor', divisor);
    if(number % divisor == 0){
       factors.push(divisor);
       number= number/ divisor;
    }
    else{
      divisor++;
    }
  }
  return factors;
}


let test = getPrimeFactors(12);

console.log('result', test);
