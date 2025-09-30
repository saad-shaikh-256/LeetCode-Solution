async function sleep(millis) {
  // Return a Promise that resolves after 'millis' milliseconds
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(); // finish the Promise after the delay
    }, millis);
  });
}
