//O(n^2) time o(n) space
function threeNumberSum(array, targetSum) {
    array.sort((a,b)=> a-b);
      let results =[];
      for(let i=0; i<array.length-2 ; i++){
          let left = i+1;
          let right = array.length-1;
          while(left<right){
              const currentSum = array[left]+ array[right] +array[i];
              if(currentSum === targetSum){
                   results.push([array[i], array[left], array[right]]);
                  left++;
                  right--;
              } else if(currentSum> targetSum) {
                  right--;
              } else{
                  left++;
              }
          }
          
      }
  return results;
  }
  // Do not edit the line below.
  exports.threeNumberSum = threeNumberSum;

  //avoid duplicate triplets
  function threeNumberSum(nums, targetSum) {
    nums.sort((a, b) => a - b);
   
     const res = [];
   
     for (let i = 0; i < nums.length - 2; i++) {
       if (nums[i] === nums[i - 1]) {
         continue; // skip same elements to avoid duplicate triplets
       }
       let start = i + 1,
         end = nums.length - 1;
   
       while (start < end) {
         const sum = nums[i] + nums[start] + nums[end];
   
         if (sum === targetSum) {
           res.push([nums[i], nums[start], nums[end]]);
           start++;
           end--;
           while (start < end && nums[start] === nums[start - 1]) {
             start += 1; // skip same elements to avoid duplicate triplets
           }
           while (start < end && nums[end] === nums[end + 1]) {
             end -= 1; // skip same elements to avoid duplicate triplets
           }
         } else if (sum < targetSum) {
           start++;
         } else {
           end--;
         }
       }
     }
   
     return res;
   }
   
   // Do not edit the line below.
   exports.threeNumberSum = threeNumberSum;