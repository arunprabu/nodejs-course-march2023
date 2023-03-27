// some properties you can avail from global 
console.log(`Directory Name: ${__dirname}`); // the dir where this file lies --- absolute path

console.log(`File Name: ${__filename}`); // will print file name with directory

console.log(process.argv); 
// try this cmd in cmd prompt to see argv 
// node 7-global-object.js --name='arun' --email='a@b.com' --phone=12121312

console.log(`Current Working Directory: ${process.cwd()}`); // Current Working Directory

