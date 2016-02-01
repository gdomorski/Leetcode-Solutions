/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */

/*

var root = new TreeLinkNode(1);
var two = new TreeLinkNode(2);
var three = new TreeLinkNode(3);
var four = new TreeLinkNode(4);
var five = new TreeLinkNode(5);
var six = new TreeLinkNode(6);
var seven = new TreeLinkNode(7);

root.left = two;
root.right = three;
root.left.left = four;
root.left.right = five;
root.right.left = six;
root.right.right = seven;

*/

var connect = function(root) {

var obj = {};

function traverse (rooty, level) {
    if(rooty === null) return;

    if(!obj[level]) {
        obj[level] = [rooty];
    }else{
        obj[level].push(rooty);
    }
    traverse(rooty.left, level + 1);
    traverse(rooty.right, level + 1);
}

traverse(root, 0);

for(var key in obj){
    for(var i = 0; i < obj[key].length - 1; i++){
     obj[key][i].next = obj[key][i + 1];
    }
}

return root;

};