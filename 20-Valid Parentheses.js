var isValid = function (s) {
  const stack = [];
  const params = "() {} []";

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);

    let open = stack[stack.length - 2];
    let close = stack[stack.length - 1];

    let potParam = open + close;

    if (params.includes(potParam)) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length === 0;
};