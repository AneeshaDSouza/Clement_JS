import java.util.*;

class Program {
  public static List<Integer[]> threeNumberSum(int[] nums, int targetSum) {
    Arrays.sort(nums);
		List<Integer[]> res = new ArrayList<Integer[]>();
  for (int i = 0; i < nums.length - 2; i++) {
    
    int start = i + 1,
      end = nums.length - 1;

    while (start < end) {
      int sum = nums[i] + nums[start] + nums[end];

      if (sum == targetSum) {
				Integer[] newTriplet = {nums[i], nums[start], nums[end]};
				res.add(newTriplet);
        start++;
        end--;
        
      } else if (sum < targetSum) {
        start++;
      } else {
        end--;
      }
    }
  }

  return res;
}
}