var maximum69Number = function (num) {
  let result = ""; // to build the modified number as a string
  let numStr = String(num); // convert number to string
  let change = true; // flag to allow only one change

  for (const char of numStr) {
    if (change && char === "6") {
      // if we find the first 6
      result += "9"; // change it to 9
      change = false; // mark that we’ve used our one change
    } else {
      result += char; // otherwise keep the digit as it is
    }
  }

  return Number(result); // convert string back to number
}; 
