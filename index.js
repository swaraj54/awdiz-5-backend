// Express
// import fs from 'fs';
// // Example usage of the fs module
// fs.readFile('text.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });



// const content = 'hi';
// // Create a new file and write content to it
// fs.writeFile('awdiz.txt', content, (err) => {
//   if (err) {
//     console.error('Error writing file:', err);
//   } else {
//     console.log('File created and content written successfully.');
//   }
// });

import os from 'os'

console.log('Platform :- ', os.platform())
console.log("Relase ", os.release())
console.log('Hostname', os.hostname())
console.log('CUPs', os.cpus())
console.log('Total memory', os.totalmem() / 1024, 'MB')
console.log('Free memory', os.freemem() / 1024, 'MB')
console.log('Network interfaces', os.networkInterfaces())
console.log("Constants", os.constants)


import EventEmitter from 'events';

const myEmitter = new EventEmitter();

function greeting() {
  console.log("Hello.")
}

function callForAbsent() {
  console.log('Call to students who are absent.')
  // calling
}

myEmitter.on("Awdiz", greeting)

myEmitter.on('Absent', callForAbsent)

myEmitter.emit('Awdiz')
myEmitter.emit('Absent')

