var compareVersion = function (version1, version2) {
  // Split both versions into arrays of numbers, e.g. "1.02.3" → [1,2,3]
  const v1 = version1.split(".").map(Number);
  const v2 = version2.split(".").map(Number);

  // Find the longer length so we can compare every corresponding position
  const maxLength = Math.max(v1.length, v2.length);

  // Compare each segment
  for (let i = 0; i < maxLength; i++) {
    // If a version has no number in this segment, treat it as 0
    const num1 = v1[i] || 0;
    const num2 = v2[i] || 0;

    // Decide the result as soon as we find a difference
    if (num1 < num2) return -1; // version1 is smaller
    if (num1 > num2) return 1; // version1 is larger
  }

  // All segments are equal
  return 0;
};
