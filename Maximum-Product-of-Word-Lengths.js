var maxProduct = function(words) {
  //get the first word
  var firstWord = words.shift();
  //get all the rest
  var allWordsButFirst = words.slice(0);
  //create an array, which will hold all our numbers
  var results = [];
  //set our largest Number to be zero as a default, we will return the larges tnumber at the end
  var largestNum = 0;
  //will be defined in recursion
  var newWord;
  var currentTotal;


  //create a subRoutine Function that will check a word against all the other words, getting total if they don't have duplicates
  function findTotals(currentWord, remainingWords) {
   //need to make a copy of the array, because we are manipulating it below
   var copy = remainingWords.slice(0);
   //loop through the words and letters with nested for loops
   for(var j = 0; j < remainingWords.length; j++) {
      for(var k = 0; k < remainingWords[j].length; k++){
          //check to see if any of the letters are in the currentWord...
          if(currentWord.indexOf(remainingWords[j][k]) !== -1){
            //if it is take it out
            remainingWords.splice(j, 1);
            //reset the loop
            j = 0;
            k = 0;
            //if there is nothing left, break out of the loop
            if(remainingWords.length === 0) break;
          }
      }
   }

   //loop through the words that have no matching letters
   for(var i = 0; i < remainingWords.length; i++){
       //multiply them
       currentTotal = currentWord.length * remainingWords[i].length;
       //check if the current total is already in our total array
       if(results.indexOf(currentTotal) === -1){
         //if it isn't, push it in
         results.push(currentTotal);
       }
    }

    //we need to check if there are atleast two items left to compare
    if(copy.length > 1){
        //take out the first thing in the array
        newWord = copy.shift();
        //recursively do everything over again, until we run out of words
        findTotals(newWord, copy);
    }else{
        //return out of the function, if we can't compare at least two words
        return;
    }
  }

  //kick off the function
  findTotals(firstWord, allWordsButFirst);

  //find the largest value;
  for(var l = 0; l < results.length; l++){
      if(results[l] > largestNum){
         largestNum = results[l];
      }
  }
  //return it
  return largestNum;

};