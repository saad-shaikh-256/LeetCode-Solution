var strStr = function (haystack, needle) {
  const haystackLength = haystack.length;
  const needleLength = needle.length;

  // Edge case: empty needle always matches at index 0
  if (needleLength === 0) return 0;

  // Slide a window of size needleLength across haystack
  for (
    let startIndex = 0;
    startIndex <= haystackLength - needleLength;
    startIndex++
  ) {
    let matchIndex = 0;

    // Check if the substring starting at startIndex matches needle
    while (
      matchIndex < needleLength &&
      haystack[startIndex + matchIndex] === needle[matchIndex]
    ) {
      matchIndex++;
    }

    // If we compared all chars successfully, we found the needle
    if (matchIndex === needleLength) return startIndex;
  }

  // Needle not found in haystack
  return -1;
};
