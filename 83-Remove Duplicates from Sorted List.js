var deleteDuplicates = function (head) {
  let currentNode = head;

  // Traverse the list until the second-to-last node
  while (currentNode && currentNode.next) {
    if (currentNode.val === currentNode.next.val) {
      // Duplicate found → skip the next node
      currentNode.next = currentNode.next.next;
    } else {
      // Otherwise move forward
      currentNode = currentNode.next;
    }
  }

  return head; // return updated linked list
};
