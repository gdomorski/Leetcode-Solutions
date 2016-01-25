var invertTree = function(root){
    //if there is no root
    if(!root){
        //return out of the function, this will be the base case.
        return null;
    }
    //set a temp variable to the left pointer of the root so we will have access to it later
    var temp = root.left;
    //switch the number of the left to the right
    root.left = root.right;
    //switch the number of the right to the left
    root.right = temp;
    //call a the function recursively on each side of the tree
    invertTree(root.left);
    invertTree(root.right);
    //return the tree at the end...
    return root;
};