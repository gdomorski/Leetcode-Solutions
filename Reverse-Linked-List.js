var reverseList = function(head) {

  //set the head as a the default node
  var node = head;
  //have it point to null, because the last pointer in the list points to null
  var previous = null;

  //while there is a node..
  while (node) {
    //save the next node in a temp variable, so we will have access to it later.
    var temp = node.next;
    //point node's next pointer to the previous node
    node.next = previous;
    //set the previous to the current node
    previous = node;
    //set the current node to the one after it.
    node = temp;
  }
  return previous;
};