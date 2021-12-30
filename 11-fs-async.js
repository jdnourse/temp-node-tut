const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err2, result2) => {
    if (err2) {
      console.log(err2);
      return;
    }
    const second = result2;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err3, result3) => {
        if (err3) {
          console.log(err3);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task");
