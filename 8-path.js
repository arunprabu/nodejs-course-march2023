const path = require('path'); 

const fileName = __filename;

console.log(fileName);

// to get the extension of the file 
const fileExtn = path.extname(fileName);
console.log(fileExtn);

// if we want only the file name not the entire path. 
const baseName =  path.basename(fileName);
console.log(baseName);
