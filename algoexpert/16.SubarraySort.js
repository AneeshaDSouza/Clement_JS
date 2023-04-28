//o(n) time o(1) space
function subarraySort(array) {
    // Write your code here.
      let left =-1;
      let right = -1;
      for(let i=0; i<array.length-1; i++){
          if(array[i] > array[i+1]){
              left =i;
              break;
          }
      }
      for(let i=array.length-1; i>0; i--){
          if(array[i] < array[i-1]){
              right =i;
              break;
          }
      }
      if(left==-1 && right ==-1) return [-1,-1];
      let minEle = Infinity;
      let maxEle = -Infinity;
      for (let i =left ; i<=right; i++){
          minEle = Math.min(array[i], minEle);
          maxEle = Math.max(array[i], maxEle);
      }
      for (let i=0; i<left; i++){
          if(array[i] > minEle){ //should not include equal here check if 
              //any element in left group greater than the minimum of left-right group
              left=i;
              //break;- will give error if we add 
          }
      }
      for(let i=right; i<array.length; i++){
          if(array[i] < maxEle){//should not include equal here check if 
              //any element in right group lesser than the maximum of left-right group
              right=i;
              //break;
          }
      }
      return [left, right];
  }
  
  // Do not edit the line below.
  exports.subarraySort = subarraySort;

  //leetcode -subarray length
  var findUnsortedSubarray = function(array) {
	let left =-1;
	let right = -1;
	for(let i=0; i<array.length-1; i++){
		if(array[i] > array[i+1]){
			left =i;
			break;
		}
	}
	for(let i=array.length-1; i>0; i--){
		if(array[i] < array[i-1]){
			right =i;
			break;
		}
    }
    if(left==-1 && right ==-1) return 0;
	let minEle = Infinity;
	let maxEle = -Infinity;
	for (let i =left ; i<=right; i++){
		minEle = Math.min(array[i], minEle);
		maxEle = Math.max(array[i], maxEle);
	}
	for (let i=0; i<left; i++){
		if(array[i] > minEle){ //should not include equal here check if 
			//any element in left group greater than the minimum of left-right group
			left=i;
			//break;- will give error if we add 
		}
	}
	for(let i=right; i<array.length; i++){
		if(array[i] < maxEle){//should not include equal here check if 
			//any element in right group lesser than the maximum of left-right group
			right=i;
			//break;
		}
	}
    
	return  right-left+1;
};
  