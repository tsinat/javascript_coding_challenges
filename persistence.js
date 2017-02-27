/*
    Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
    which is the number of times you must multiply the digits in num until you reach a single digit.
*/
'use strict';

function persistence(num) {
   let count = 0;
   let prod = num.toString().split('');

   if(prod.length == 1 || prod.indexOf('0') != -1) {
       return 1;
   }
   
   while(prod.length > 1){
   		 let temp = prod.reduce((first, second) => {
              return Number(first) * Number(second);
          }, 1);
         prod = temp.toString().split('');
         count++;
   }
   return count;
}

let test = persistence(32343410);
console.log('persistence:', test);
