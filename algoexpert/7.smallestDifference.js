//O(nlogn+mlog(m)) time o(1) space
function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
      arrayOne.sort((a,b) => a-b);
      arrayTwo.sort((a,b) => a-b);
      
      let minDifference = Infinity;
      let idxOne=0;
      let idxtwo =0;
      let smallest = Infinity;
      let current = Infinity;
      let smallestPair =[];
      while(idxOne <arrayOne.length && idxtwo < arrayTwo.length){
          let firstNum = arrayOne[idxOne];
          let secondNum = arrayTwo[idxtwo];
          if(firstNum<secondNum){
              current = secondNum - firstNum;
              idxOne++;
          } else if( secondNum< firstNum){
              current = firstNum - secondNum;
              idxtwo++;
          } else{
              return [firstNum,secondNum];
          }
          if(smallest > current){
              smallest = current;
              smallestPair =[firstNum, secondNum];
          }
      }
      return smallestPair;
  }
  
  // Do not edit the line below.
  exports.smallestDifference = smallestDifference;