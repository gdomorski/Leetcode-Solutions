var twoSum = function(nums, target) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
        let total = target - nums[i];
        if(map.has(total)){
            return [map.get(total), i]
        } else {
            map.set(nums[i], i)
        }
    }  
};
