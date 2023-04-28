import java.util.*;

class Program {
  public static int[] subarraySort(int[] array) {
  // Write your code here.
	int left =-1;
	int right = -1;
	for(int i=0; i<array.length-1; i++){
		if(array[i] > array[i+1]){
			left =i;
			break;
		}
	}
	for(int i=array.length-1; i>0; i--){
		if(array[i] < array[i-1]){
			right =i;
			break;
		}
	}
	if(left ==-1 && right ==-1) return new int[] {left,right};
	int minEle = Integer.MAX_VALUE;
	int maxEle = Integer.MIN_VALUE;
	for (int i =left ; i<=right; i++){
		minEle = Math.min(array[i], minEle);
		maxEle = Math.max(array[i], maxEle);
	}
	for (int i=0; i<left; i++){
		if(array[i] > minEle){ //should not include equal here check if 
			//any element in left group greater than the minimum of left-right group
			left=i;
			//break;- will give error if we add 
		}
	}
	for(int i=right; i<array.length; i++){
		if(array[i] < maxEle){//should not include equal here check if 
			//any element in right group lesser than the maximum of left-right group
			right=i;
			//break;
		}
	}

    return new int[] {left,right};
  }
}