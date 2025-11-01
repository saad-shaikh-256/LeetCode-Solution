var decode = function (encoded, first) {
  // The 'arr' will store the decoded array
  // The first element is given directly as 'first'
  let arr = [first];

  // Loop through each element of the encoded array
  for (let i = 0; i <= encoded.length - 1; i++) {
    // Each encoded[i] represents the XOR of arr[i] and arr[i + 1]
    // So, arr[i + 1] = encoded[i] XOR arr[i]
    arr.push(encoded[i] ^ arr[arr.length - 1]);
  }

  // Return the fully decoded array
  return arr;
};
