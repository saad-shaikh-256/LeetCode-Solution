var largestTriangleArea = function (points) {
  let max = 0;

  // Check every unique combination of 3 points
  for (let i = 0; i < points.length - 2; i++)
    for (let j = i + 1; j < points.length - 1; j++)
      for (let k = j + 1; k < points.length; k++) {
        // Shoelace formula (area of triangle given 3 vertices)
        // | x1(y2 - y3) + x2(y3 - y1) + x3(y1 - y2) | / 2
        const a =
          Math.abs(
            points[i][0] * (points[j][1] - points[k][1]) +
              points[j][0] * (points[k][1] - points[i][1]) +
              points[k][0] * (points[i][1] - points[j][1])
          ) / 2;

        // Track the largest area found so far
        if (a > max) max = a;
      }

  return max;
};
