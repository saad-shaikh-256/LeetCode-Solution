var merge = function (nums1, m, nums2, n) {
  // nums1 has extra space at the end (size m+n)
  // index1 → last valid element in nums1
  let index1 = m - 1;
  // index2 → last element in nums2
  let index2 = n - 1;
  // mergeIndex → position to fill from the back in nums1
  let mergeIndex = m + n - 1;

  // Keep going until all elements of nums2 are merged
  while (index2 >= 0) {
    // Case 1: nums1[index1] is bigger → put it at the back
    if (index1 >= 0 && nums1[index1] > nums2[index2]) {
      nums1[mergeIndex] = nums1[index1];
      index1--;
    }
    // Case 2: nums2[index2] is bigger (or nums1 exhausted) → use nums2
    else {
      nums1[mergeIndex] = nums2[index2];
      index2--;
    }
    // Move the mergeIndex backward
    mergeIndex--;
  }
};
