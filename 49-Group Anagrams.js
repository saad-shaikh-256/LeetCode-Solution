var groupAnagrams = function (strs) {
  const map = new Map(); // Map to store grouped anagrams

  for (let str of strs) {
    // Sort the string → this becomes the "signature" (key)
    // All anagrams share the same sorted version
    const key = str.split("").sort().join("");

    // If this sorted key is not in the map, create a new group
    if (!map.has(key)) {
      map.set(key, []);
    }

    // Push the original string into its anagram group
    map.get(key).push(str);
  }

  // Return all anagram groups as an array
  return Array.from(map.values());
};