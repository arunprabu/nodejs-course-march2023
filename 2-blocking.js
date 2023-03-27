// Blocking I/O
// Let's learn how JS can access file system
const fs = require('fs'); // importing filesystem module

console.log('Program Started');
// read the file from my computer synchronously
const data = fs.readFileSync('./sample.txt'); // reading a file named sample.txt
console.log(data.toString());

// the following line will be printed at last after the entire file is read.
console.log("Program Ended");