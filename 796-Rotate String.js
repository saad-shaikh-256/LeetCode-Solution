var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false; // lengths must match
  if (s === goal) return true; // already equal

  for (let i = 0; i < s.length; i++) {
    s = s.slice(1) + s[0]; // rotate: shift first char to end
    if (s === goal) return true;
  }

  return false;
};
