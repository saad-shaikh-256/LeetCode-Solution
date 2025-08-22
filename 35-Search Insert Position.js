var searchInsert = function (nums, target) {
    // Loop through the array
    for (i = 0; i < nums.length; i++) {

        // If current element is greater than target,
        // target should be inserted before this element
        if (nums[i] > target) {
            return i;
        }

        // If target is found, return its index directly
        else if (nums[i] == target) {
            return i;
        }
    }

    // If we finish the loop, it means target is larger
    // than all elements, so insert at the end
    return nums.length;
};
