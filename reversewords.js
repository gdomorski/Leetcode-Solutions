var reverseWords = function(str) {
  //get rid of the spaces in the beginning... edge case
  str = str.trim();
  //make an empty string to store answer
  var answer = "";
  //if there is no string or it doesn't have a length, just return an empty string
  if(!str || str.length === 0) return "";

  //split the strings to an array, reverse them, and join them
  var strings = str.split(" ").reverse().join(" ");

  //loop through the strings
  for(var i = 0; i < strings.length; i++){
      //check to see if there are any extra spaces between the words(edge case)
      answer += (strings[i] === " " && strings[i - 1] === " ") ? "" : strings[i];
  }
  return answer;
};