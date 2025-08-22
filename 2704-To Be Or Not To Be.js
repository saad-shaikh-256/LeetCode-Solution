var expect = function (val) {
  return {
    // Method to check equality
    toBe: function (otherValue) {
      if (val === otherValue) {
        return true; // ✅ values match
      } else {
        throw new Error("Not Equal"); // throw error if mismatch
      }
    },

    // Method to check inequality
    notToBe: function (otherValue) {
      if (val !== otherValue) {
        return true; // ✅ values are different
      } else {
        throw new Error("Equal"); // throw error if same
      }
    },
  };
};
