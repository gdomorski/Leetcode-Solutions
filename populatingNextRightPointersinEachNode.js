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

var connect = function(root) {
	root.next = null;

	//loop down the tree
	//link the left pointers to the right pointers, forming a linked list
	//have the one at the end point to null
	//call it recursively.

	//return the root


};