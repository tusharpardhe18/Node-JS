const fs = require('fs');
const os = require('os');
console.log(os.cpus().length);

//sync..  blocking...
// fs.writeFileSync('./test.txt','Sync')

//async..  non-blocking....
// fs.writeFile( './test.txt', 'Async', (err) => {} )

// const result = fs.readFile('./contacts.txt',"utf-8")
// console.log(result);

// fs.readFile( './contacts.txt' , 'utf-8' , ( err, result ) => {
//     // callback func
//     if (err) {
//         console.log('Error',err);
//     } else{
//         console.log(result);
        
//     }
// })


// fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString())
// fs.appendFileSync('./test.txt', `${Date.now()} hey there!!!\n`)

// console.log(fs.statSync('./test.txt'))
// fs.mkdirSync('myDocs/a/b', {recursive: true})
// fs.unlinkSync('myDocs/a/b/hi.txt')

// console.log("1");

//blocking,...
// const result = fs.readFileSync("contacts.txt", "utf-8")
// console.log(result);
// The fs.readFileSync function is a synchronous function, which means that it will block the execution of the code until the operation is complete. This can be problematic in Node.js, which is designed to be asynchronous and non-blocking.

// console.log("2");

// console.log("1");

//non-blocking....
// fs.readFile("contacts.txt", "utf-8", (err,result) => {
//     console.log(result); 
// });
// In this example, the fs.readFile function is called, but it does not block the execution of the code. Instead, it returns immediately and the code continues to execute. When the file has been read, the callback function is called with the contents of the file.

// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

// default thread pool size = 4
// max? -> 8-core-cpu then the max size is 8



