var inorderTraversal = function (root) {
  const result = []; // stores the inorder sequence
  const stack = []; // stack to simulate recursion
  let current = root; // start with root node

  // Traverse until all nodes are processed
  while (current !== null || stack.length > 0) {
    // Step 1: Reach the leftmost node of the current node
    while (current !== null) {
      stack.push(current); // push current node to stack
      current = current.left; // move left
    }

    // Step 2: Current is null, so backtrack
    current = stack.pop(); // pop the last node
    result.push(current.val); // visit the node

    // Step 3: Move to right subtree
    current = current.right;
  }

  return result;
};
