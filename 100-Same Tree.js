var isSameTree = function (p, q) {
  // Case 1: both nodes are null → same (base case)
  if (p === null && q === null) {
    return true;
  }

  // Case 2: only one is null → different structure
  if (p === null || q === null) {
    return false;
  }

  // Case 3: values differ → not same
  if (p.val !== q.val) {
    return false;
  }

  // Case 4: recursively check left & right subtrees
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
