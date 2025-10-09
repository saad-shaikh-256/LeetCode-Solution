var maxDepth = function (root) {
  // Base case: if the tree (or subtree) is empty, depth is 0
  if (root === null) {
    return 0;
  }

  // Recursively find the depth of the left subtree
  const leftDepth = maxDepth(root.left);

  // Recursively find the depth of the right subtree
  const rightDepth = maxDepth(root.right);

  // The depth of the current node is the greater of the two depths + 1 (for the current node)
  return Math.max(leftDepth, rightDepth) + 1;
};
