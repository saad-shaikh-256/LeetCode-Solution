var isEmpty = function (obj) {
  // If it's an array, check its length
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }

  // If it's an object, check the number of keys
  return Object.keys(obj).length === 0;
};
