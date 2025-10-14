var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null; // base case
  }

  // find middle element
  const mid = Math.floor(nums.length / 2);

  // middle element becomes root
  const root = new TreeNode(nums[mid]);

  // recursively build left and right subtrees
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
};
