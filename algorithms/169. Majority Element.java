/*
169. Majority Element
*/

class Solution {
  public int majorityElement(int[] nums) {
    //return this.solution1(nums);
    return this.solution2(nums);
  }
  
  int solution2(int[] nums) {
    int count = 0;
    int candidate = 0;
    for (int num: nums) {
      if (count == 0) candidate = num;
      count += num == candidate ? 1 : -1;
    }
    return candidate;
  }
  
  int solution1(int[] nums) {
    HashMap<Integer, Integer> count = new HashMap();
    for (int i = 0; i < nums.length; ++i) {
      count.put(nums[i], count.getOrDefault(nums[i], 0) + 1);
      if (count.get(nums[i]) > nums.length/2) return nums[i];
    }
    throw new RuntimeException("No majority element");
  }
}


