var detectCapitalUse = function(word) {
  return /^[A-Z][a-z]+$/.test(word) ||
         /^[A-Z]+$/.test(word) ||
         /^[a-z]+$/.test(word)
};
