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

// import os from 'os'

// console.log('Platform :- ', os.platform())
// console.log("Relase ", os.release())
// console.log('Hostname', os.hostname())
// console.log('CUPs', os.cpus())
// console.log('Total memory', os.totalmem() / 1024, 'MB')
// console.log('Free memory', os.freemem() / 1024, 'MB')
// console.log('Network interfaces', os.networkInterfaces())
// console.log("Constants", os.constants)


// import EventEmitter from 'events';

// const myEmitter = new EventEmitter();

// function greeting() {
//   console.log("Hello.")
// }

// function callForAbsent() {
//   console.log('Call to students who are absent.')
//   // calling
// }

// myEmitter.on("Awdiz", greeting)

// myEmitter.on('Absent', callForAbsent)

// myEmitter.emit('Awdiz')
// myEmitter.emit('Absent')



// import http from 'http';

// const books = ["ABC", "XYZ", "PQR"];

// const server = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/api/books") {
//     res.end(JSON.stringify(books))
//   } else if (req.method === "GET" && req.url === "/api/awdiz") {
//     res.end("Hi from awdiz")
//   } else {
//     res.end("Method or url not found..")
//   }
// })

// server.listen(8000, () => {
//   console.log("Server is running on port 8000")
// })

// 1. console.log("Hi 1");
// 2. setTimeout(() => { console.log("Hi 2") }, 3000)
// 3. console.log("Hi 3");
// 4. setTimeout(() => { console.log("Hi 4") }, 5000)


// 1. Call stack  - 1 excuted , 2 , 3 excuted , 4 ,  2 excuted,  4 excuted , 5 excuted
// 2 .Async stack - 2 do work 3000  , 4 do work 5000
// 3. Callback queue - 2 , 4,  5
// 4. Event loop  - continuesly checking call stack and callback queue, if call stack is empty then
//                  it'll pick first task from callback queue and will add to call stack, and after execution of that 
//                  task it'll pick next task from callback queue and will add to call stack and so on..




import dotenv from 'dotenv';

dotenv.config()

console.log(process.env.MY_SECRET_KEY)