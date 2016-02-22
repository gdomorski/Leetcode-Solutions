var largestNumber = function(nums) {

		//create a variable that will hold the result
    var result = '';
    //create a boolean, to make sure our array isn't just full of zeros (edge case)
    var numsAllZeros = true;

    //sort the array, putting all the largest numbers in order
    nums.sort(function(a, b){
        var x = a + '' + b,
            y = b + '' + a;
        return parseInt(y) - parseInt(x);
    });

    //loop through the array
    for (var i = 0; i < nums.length; i++) {
    		//check if the nums are all zeros
        if(nums[i] === 0 && numsAllZeros){
        		//if it is, return zero
            return '0'
        }else{
        		//if the first number isn't a zero, switch the boolean
            numsAllZeros = false;
            //add to the result variable our total
            result += nums[i];
        }
    }
    //return the result;
    return result;
};