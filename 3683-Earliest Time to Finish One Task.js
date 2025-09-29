var earliestTime = function (tasks) {
  // Start with the largest possible value so any real finish time will be smaller.
  let earliestFinishTime = Infinity;

  // Loop through each task.
  // Each task is expected to be a 2-element array: [startTime, duration]
  for (let i = 0; i < tasks.length; i++) {
    const [startTime, duration] = tasks[i]; // destructure into variables

    // Calculate when this task would finish
    const finishTime = startTime + duration;

    // Update the earliest finish time if this task ends sooner
    if (finishTime < earliestFinishTime) {
      earliestFinishTime = finishTime;
    }
  }

  // Return the smallest (earliest) finish time among all tasks
  return earliestFinishTime;
};
