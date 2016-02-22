var permute = function(nums) {
    //create a results array
    var result = [];

    //create a subRoutine function that will go through all our options
    function getPermutations (currentArray, numbersLeft) {
        //check to see if it has a length, this will be the base case
        if (numbersLeft.length < 1) {
            //push it into a results array
            console.log(currentArray);
            //we need to make a copy of the array, or else it will return empty arrays
            result.push(currentArray.slice());
        } else {
            //loop through the current options
            for (var i = 0; i < numbersLeft.length; i++) {
                //make a copy of the array, because we will be mutating it
                var copy = numbersLeft.slice();
                //push the value we are currently at...
                currentArray.push(numbersLeft[i]);
                //take out the value of i, so we don't use it again
                copy.splice(i, 1);
                //call the function recursively, passing in our current array and the values we have left...
                getPermutations (currentArray, copy);
                //this will reset the values of the array,
                currentArray.pop()
            }
        }
    }

    //kick off the subRotuine function
    getPermutations([], nums);

    //return all the permutations
    return result;
};