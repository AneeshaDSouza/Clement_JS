//Bruteforce

function twoNumberSum(array, targetSum) {
    // Write your code here.
      
      for( let i=0; i< array.length-1; i++){
          
          const firstNum = array[i];
          for( let j=i+1; j<array.length; j++){
               const secondNum = array[j];
               if(firstNum+secondNum === targetSum)
               return [firstNum, secondNum];
          }
          
      }
      return [];
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;

  //storing hashmap
  //O(n) time O(n) space


  function twoNumberSum(array, targetSum) {
       numsIndexes = {};
   
       for (let i = 0; i < array.length; i += 1) {
           let currentDifference = targetSum - array[i];
   
           if (numsIndexes[currentDifference] !== undefined && numsIndexes[currentDifference] !== i) {
               return [array[i], array[numsIndexes[currentDifference]]];
           } else {
               numsIndexes[array[i]] = i;
           }
       }
       return [];
   };
   
   // Do not edit the line below.
   exports.twoNumberSum = twoNumberSum;

   //solution 3 
   //O(nlogn) Tc space - O(1)
   function twoNumberSum(array, targetSum) {
    array.sort((a,b) => a-b);
      let left = 0;
      let right = array.length-1;
      while(left<right){
          
          const currentSum = array[left]+array[right];
          if(currentSum === targetSum){
              return [array[left], array[right]];
          }
          else if(currentSum< targetSum){
              left++;
          } else{
              right--;
          }
      }
      return [];
  
  
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;