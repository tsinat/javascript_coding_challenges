/*
    Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
    which is the number of times you must multiply the digits in num until you reach a single digit.
*/

function persistence(num) {
	 let count = 0;
   let temp =  num.toString().split('');
   let prod = num
   while(temp.length > 1){
   		 let prod = temp.reduce((first, second) => Number(first) * Number(second), 1);
  		 console.log('num and prod', num ,prod);
   }

}
