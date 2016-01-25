var maxDepth = function(root) {
  //create a base case for the recursive function, saying if there is no root, return 0
  if(root === null){
      return 0;
  }
  //call our function over again on the left and right side of the root, while adding one each time.
  //Use Math.max to get the larger of the two sides.
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};