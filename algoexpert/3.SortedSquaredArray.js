//3. sorted squared array
//O(nlogn) time /O(n) space
function sortedSquaredArray(array) {
    const sortedSquares = new Array(array.length).fill(0);
    for(let i=0; i< array.length; i++){
        sortedSquares[i] = array[i]*array[i];
      }
    return sortedSquares.sort((a,b)=>a-b);
}

//2. O(n) time )(n) space

function sortedSquaredArray(array) {
    const sortedSquares = new Array(array.length).fill(0);
      let smallerValueIdx =0;
      let largerValueIdx = array.length-1;
      
      for( let i= array.length-1; i>=0; i--){
          const smallerValue = array[smallerValueIdx];
          const largerValue = array[largerValueIdx];
          
          if(Math.abs(smallerValue)> Math.abs(largerValue)){
              sortedSquares[i] = smallerValue * smallerValue;
              smallerValueIdx++;
          }else{
              sortedSquares[i] = largerValue * largerValue;
              largerValueIdx--;
          }
      }
      return sortedSquares;
  }

  