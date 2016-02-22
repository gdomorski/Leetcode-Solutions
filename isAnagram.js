var isAnagram = function(s, t) {
		//put the first string in alphabetical order
    var firstWord = s.split("").sort().join("");
    //put the second string in alphabetical order
    var secondWord = t.split("").sort().join("");
    //see if the two strings are equal
    return (firstWord === secondWord) ? true : false;
};