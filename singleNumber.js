var singleNumber = function(nums) {
    var obj = {};
    for(var i = 0; i < nums.length; i++){
        if(obj[nums[i]] === undefined){
            obj[nums[i]] = 0;
        }else{
            obj[nums[i]]++;
        }
    }
    for(key in obj){
        if(obj[key] === 0){
            return parseInt(key);
        }
    }
};


singleNumber([1,1,2,2,3,4,4,5,5])
