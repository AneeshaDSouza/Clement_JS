// o(nlogn) time o(n) space

import java.util.*;

class Program {

  public int[] sortedSquaredArray(int[] array) {
    // Write your code here.
   int[] sortedSquares = new int[array.length];
    for(int i=0; i< array.length; i++){
        sortedSquares[i] = array[i]*array[i];
      }
     Arrays.sort(sortedSquares);
		 return sortedSquares;
  }
}

//2  o(n) time and space - same solution in leetcode
import java.util.*;

class Program {

  public int[] sortedSquaredArray(int[] array) {
    // Write your code here.
    int[] sortedSquares = new int[array.length];
      int smallerValueIdx =0;
      int largerValueIdx = array.length-1;
      
      for( int i= array.length-1; i>=0; i--){
          int smallerValue = array[smallerValueIdx];
          int largerValue = array[largerValueIdx];
          
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
}