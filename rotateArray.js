let reverse = (start, end, nums) => {
    if(nums.length !== 1){
      while(start < end){
        let temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp;
        start++;
        end--;
      }
  }
}



var rotate = function(nums, k) {
    k = k % nums.length;
    if(nums.length !== 1){
      reverse(0, nums.length -1, nums)
      reverse(0, k - 1, nums)
      reverse(k, nums.length - 1, nums)
    }
};
