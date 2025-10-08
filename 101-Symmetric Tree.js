var isSymmetric = function (root) {
  // If the tree is empty, it's symmetric
  if (!root) return true;

  // Helper function to check mirror symmetry between two subtrees
  function isMirror(t1, t2) {
    // Case 1: Both nodes are null → symmetric at this level
    if (!t1 && !t2) return true;

    // Case 2: Only one is null → not symmetric
    if (!t1 || !t2) return false;

    // Case 3: Both exist → check value and mirror subtrees
    return (
      t1.val === t2.val && // values must match
      isMirror(t1.left, t2.right) && // left subtree of t1 mirrors right of t2
      isMirror(t1.right, t2.left) // right subtree of t1 mirrors left of t2
    );
  }

  // Start comparing left and right subtrees of the root
  return isMirror(root.left, root.right);
};
