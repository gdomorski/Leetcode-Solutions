var reverseVowels = function(s, first, second) {
    if(!Array.isArray(s)){
       s = s.split("")
    }
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let firstPointer = first || 0;
    let secondPointer = second || s.length - 1;

    while(vowels.indexOf(s[firstPointer]) < 0 && !(firstPointer >= secondPointer)) {
        firstPointer++
    }

    while(vowels.indexOf(s[secondPointer]) < 0 && !(firstPointer >= secondPointer)) {
        secondPointer--
    }

    if(firstPointer >= secondPointer){
      return s.join("")
    }

    let temp = s[firstPointer];
    s[firstPointer] = s[secondPointer]
    s[secondPointer] = temp;
    return reverseVowels(s, ++firstPointer, --secondPointer);
};
