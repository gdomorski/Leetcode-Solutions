var twoSum = function(numbers, target) {

    let low = 0;
    let high = numbers.length -1;

    while(low < high){
        let total = numbers[high] + numbers[low];
        if(total === target){
            return [++low, ++high]
        } else if(total < target){
            ++low;
        } else {
            --high;
        }
    }

    return [-1, -1];
};
