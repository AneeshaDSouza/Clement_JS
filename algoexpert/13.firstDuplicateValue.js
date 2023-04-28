function firstDuplicateValue(array) {
    // Write your code here.
      let freqCounter = {};
     
      for( let val of array){
          freqCounter[val] = ++freqCounter[val]||1;
                if(freqCounter[val] >1 ) return val
      }
        return -1;
      
  }
  
  // Do not edit the line below.
  exports.firstDuplicateValue = firstDuplicateValue;

  //wont work for this question, only works if there is single repeated elemnt
  function firstDuplicateValue(nums) {
    let slow = nums[0];
      let fast = nums[0];
      
      do{
          slow= nums[slow];
          fast = nums[nums[fast]];
      }
      while(slow != fast)
          
      fast = nums[0];
      while(slow!=fast){
          slow= nums[slow];
          fast = nums[fast];
      }
      return slow;
  }

  //brute force o(n^2) | o(1) space
  function firstDuplicateValue(array) {
    let minimumSecondIndex = array.length;
      for( let i=0; i< array.length; i++){
          const value = array[i];
          for (let j=i+1; j<array.length; j++){
              const valueToCompare = array[j];
              if( value === valueToCompare) {
                  minimumSecondIndex = Math.min(minimumSecondIndex, j);
              }
          }
      }
      
      if(minimumSecondIndex === array.length) return -1;
      
      return array[minimumSecondIndex];
}

//o(n )time o(n) space
function firstDuplicateValue(array) {
    const seen = new Set();
      for (const value of array){
          if(seen.has(value)) return value;
          seen.add(value);
      }
      return -1;
  }
  
  // Do not edit the line below.
  exports.firstDuplicateValue = firstDuplicateValue;
  