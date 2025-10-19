var relativeSortArray = function (arr1, arr2) {
  let orderMap = new Map();
  arr2.forEach((num, index) => orderMap.set(num, index));

  return arr1.sort((a, b) => {
    let indexA = orderMap.has(a) ? orderMap.get(a) : 1000 + a;
    let indexB = orderMap.has(b) ? orderMap.get(b) : 1000 + b;
    return indexA - indexB;
  });
};
