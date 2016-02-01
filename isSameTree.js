var isSameTree = function(p, q) {

    //if there is nothing left in the tree, return true, this is the base case in recursion
    if (!p && !q) return true;

    //if there isn't a p or a q, we know it is not the same tree, also if the values do not match, it can't be the same tree
    if (!p || !q || p.val !== q.val) return false;

    //run the function recursivly, to check both sides of the tree
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
