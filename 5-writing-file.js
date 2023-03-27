// Let's write a file into file system
const fs = require('fs');

const content = 'NodeJS has created this file';

console.log("File Writing is going to be started");

//writing file async'ly 
fs.writeFile("./example.txt", content, (err) => { 
  // if the file writing complete, the callback will be exec'd 
  console.log(err);
  if(!err){
    console.log("File Writing Successful");
  }else {
    console.log(err);
  }
});

console.log('Program Ended');