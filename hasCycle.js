var hasCycle = function(head) {
  //if there is nothing in the list, run false because there is no cycle
  if(!head) return false
  var slow = head;
  var fast = head;
  var pause = true;

  //while there is a next value
  while(fast = fast.next) {
    //check if the two are the same... and if they are return true
    if (fast === slow) { return true; }
    //flip the pause so the slow goes every other cycle
    slow = pause ? slow : slow.next;
    pause = !pause;
  }

  //if we go all the way through and there is no time the two nodes touch, if must not have an infinite loop
  return false;
};