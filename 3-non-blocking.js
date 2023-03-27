// Non-Blocking I/O
// reading a file asynchronously
const fs = require("fs"); // importing file system

console.log("Program Started");

fs.readFile("./sample.txt", (err, data) => { // error first callback
  if (!err) {
    console.log(data.toString());
  } else {
    console.log(err);
  }
});

// the following line will get exec'd first while fs is reading the file
console.log("Program Ended");