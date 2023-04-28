//o(n) time O(1) space
import java.util.*;

class Program {
  public static boolean isValidSubsequence(List<Integer> array, List<Integer> sequence) {
     int arrIdx =0;
	  int seqIdx=0;
	
	while(arrIdx<array.size() && seqIdx < sequence.size()){
		if(array.get(arrIdx).equals(sequence.get(seqIdx))){
			seqIdx++;
		}
		arrIdx++;
	}
	return seqIdx == sequence.size();
  }
}


//2 O(n) time O(1) space 
import java.util.*;

class Program {
  public static boolean isValidSubsequence(List<Integer> array, List<Integer> sequence) {
   int seqIdx=0;
	
	for(var value: array){
		if(seqIdx == sequence.size()){ break;}
		if(sequence.get(seqIdx).equals(value)) seqIdx++;
	}
	return seqIdx == sequence.size();
  }
}