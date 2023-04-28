//o(n) time and o(n) space 

function arrayOfProducts(array) {
    // Write your code here.
      const products = new Array(array.length).fill(1);
      const leftProducts = new Array(array.length).fill(1);
      const rightProducts = new Array(array.length).fill(1);
      let leftRunningProduct=1;
      let rightunningProduct =1;
      
      for( let i=0; i< array.length; i++){
          leftProducts[i] = leftRunningProduct;
          leftRunningProduct *= array[i];
      }
      
      for( let i=array.length-1; i>=0; i--){
          rightProducts[i] = rightunningProduct;
          rightunningProduct *= array[i];
      }
      
      for (let i=0; i< array.length ; i++ ){
              products[i] = leftProducts[i]*rightProducts[i];
          }
      
      return products;
  }
  
  // Do not edit the line below.
  exports.arrayOfProducts = arrayOfProducts;

  //o(n^2) time o(n) space

  function arrayOfProducts(array) {
    // Write your code here.
      const products =[];
      
      for(let i=0; i<array.length; i++){
          let runningProduct= 1;
          for (let j=0; j<array.length; j++){
              if(i!==j){
                  runningProduct *= array[j];
              }
              products[i] = runningProduct;
          }
      }
      return products;
  }
  
  // Do not edit the line below.
  exports.arrayOfProducts = arrayOfProducts;
//3
  function arrayOfProducts(array) {
    // Write your code here.
      const products = new Array(array.length).fill(1);
      
      let leftRunningProduct=1;
      let rightunningProduct =1;
      
      for( let i=0; i< array.length; i++){
          products[i] = leftRunningProduct;
          leftRunningProduct *= array[i];
      }
      
      for( let i=array.length-1; i>=0; i--){
          products[i] *= rightunningProduct;
          rightunningProduct *= array[i];
      }
      
      
      return products;
  }
  
  // Do not edit the line below.
  exports.arrayOfProducts = arrayOfProducts;

  //4
  /**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
   
    const n = nums.length;
    const res = Array(n).fill(1);
  
    let left = (right = 1);
     
    for (let i = 0; i < n; i++) {
      res[i] *= left;
      res[n - 1 - i] *= right;
      left *= nums[i];
      right *= nums[n - 1 - i];
    }
    return res;
  };