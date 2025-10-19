var relativeSortArray = function (arr1, arr2) {
  // Map to store the sorting position of numbers in arr2
  let orderMap = new Map();

  // Assign each number in arr2 a priority based on its index
  arr2.forEach((num, index) => orderMap.set(num, index));

  // Sort arr1 based on custom ranking
  return arr1.sort((a, b) => {
    // If `a` exists in arr2, get its index, else give it a large priority + its value
    let indexA = orderMap.has(a) ? orderMap.get(a) : 1000 + a;
    // Same logic for `b`
    let indexB = orderMap.has(b) ? orderMap.get(b) : 1000 + b;

    // Sort by calculated priority
    return indexA - indexB;
  });
};
