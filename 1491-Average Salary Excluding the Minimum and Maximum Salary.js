var average = function (salary) {
  // Step 1: Sort the salary array in ascending order
  salary.sort((a, b) => a - b);

  // Step 2: Initialize variables
  var avgSalary = 0;
  var salarySum = 0;

  // Step 3: Sum all salaries except the first (min) and last (max)
  for (let i = 1; i < salary.length - 1; i++) {
    salarySum += salary[i];
  }

  // Step 4: Calculate average
  avgSalary = salarySum / (salary.length - 2);

  // Step 5: Return result
  return avgSalary;
};
